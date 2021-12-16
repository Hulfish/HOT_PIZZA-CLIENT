import { IDish_item } from '../interfaces/items';
import { ICartState, ICartCategory } from '../interfaces/index';


const defaultState: ICartState = {
    list: [],
    isOffcanvasActive: false
}

interface IAction {
    type: string
    payload: IPayload
}

interface IPayload {
    item?: IDish_item
}

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"  
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"
const SWITCH_CART_OFFCANVAS_STATE = "SWITCH_CART_OFFCANVAS_STATE"


export function cartListReducer (state: ICartState=defaultState, action:IAction): ICartState {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            let newList = state.list;
            let shouldAddCategory: boolean = true;
            for (let i = 0; i < state.list.length; i++) {
                if (newList[i].product_id === action.payload.item?.product_id) {
                    newList[i].items.push(action.payload.item)
                    shouldAddCategory = false
                }
            }
            if (shouldAddCategory) {
                const payload: IDish_item = action.payload.item as IDish_item
                const newCategory: ICartCategory = {
                    product_id: payload.product_id,
                    name: payload.name, 
                    items: [payload],
                    price: payload.price,
                    promotionPrice: payload.promotionPrice,
                    isPromoted: payload.isPromoted
                }
                newList.push(newCategory)
            }
            sessionStorage.setItem("cart_list", JSON.stringify(newList))
            return {...state, list: [...newList]}
        }
        case REMOVE_ITEM_FROM_CART: {
            const newList = state.list
            for (let i = 0; i < state.list.length; i++) {
                
                if (newList[i].product_id === action.payload.item?.product_id) {
                    if (newList[i].items.length === 1) {
                        newList.splice(i, 1)
                    } else {
                        newList[i].items.splice(0, 1)
                    }
                    
                }
            }
            sessionStorage.setItem("cart_list", JSON.stringify(newList))
            return {...state, list: [...newList]}
        }
        case SWITCH_CART_OFFCANVAS_STATE: {
            return {...state, isOffcanvasActive: !state.isOffcanvasActive}
        }
        default: 
            const cartData = sessionStorage.getItem("cart_list")
            state.list = cartData ? JSON.parse(cartData) : []
            return state
    }
}

export function addItemToCartAction (payload: IDish_item) {
    return ({type: ADD_ITEM_TO_CART, payload: {item: payload}})
}
export function removeItemFromCartAction (payload: IDish_item) {
    return ({type: REMOVE_ITEM_FROM_CART, payload: {item: payload}})

}
export function switchCartOffcanvasAction () {
    return {type: SWITCH_CART_OFFCANVAS_STATE, payload: null}
}