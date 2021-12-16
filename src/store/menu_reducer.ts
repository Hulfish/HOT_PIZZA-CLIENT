import { IDish_item } from './../interfaces/items';
import { IAction } from './../interfaces/actions';
import { IMenu_state } from './../interfaces/index';
const defaultState: IMenu_state = {
    menu: [],
}

const ADD_DISH_TO_LIST = "ADD_DISH_TO_LIST"
const ADD_MANY_DISHES_TO_LIST = "ADD_MANY_DISHES_TO_LIST"
const SET_MENU = "SET_MENU"

export function menuReducer(state: IMenu_state=defaultState, action: IAction): IMenu_state {
    switch(action.type) {
        case ADD_DISH_TO_LIST: 
            const item = action.payload as IDish_item
            return {...state, menu: [...state.menu, item]}
        case ADD_MANY_DISHES_TO_LIST: 
            const items = action.payload as IDish_item[]
            return {...state, menu: [...state.menu, ...items]}
        case SET_MENU: {
            const menu = action.payload as IDish_item[]
            return {...state, menu: menu}
        }
        default: return state
    }
}

export function addDishToListAction (payload: IDish_item): IAction {
    return {type: ADD_DISH_TO_LIST, payload}
}

export function addManyDishesToListAction (payload: IDish_item[]): IAction {
    return {type: ADD_MANY_DISHES_TO_LIST, payload}
}

export function setMenuAction (payload: IDish_item[]): IAction {
    return {type: SET_MENU, payload}
}