import { TDishType } from './../interfaces/types';
import { IDish_item } from './../interfaces/items';

import { IAction } from './../interfaces/actions';
import { IDishInputState } from './../interfaces/inputs';
const defaultState: IDishInputState = {
    price: undefined,
    mass: undefined,
    name: "",
    description: "",
    ingredient: "",
    ingredients: [],
    type: "pizza",
    isPromoted: false,
    promotionPrice: undefined
}

const SET_PRICE = "SET_PRICE"
const SET_MASS = "SET_MASS"
const SET_NAME = "SET_NAME"
const SET_DISH_TYPE = "SET_DISH_TYPE"
const SET_DESCRIPTION = "SET_DESCRIPTION"
const SET_IS_PROMOTED = "SET_IS_PROMOTED"
const SET_PROMOTION_PRICE = "SET_PROMOTION_PRICE" 
const SET_INGREDIENT = "SET_INGREDIENT"
const ADD_INGREDIENT = "ADD_INGREDIENT"
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT"
const LOAD_DISH_PRESET = "LOAD_DISH_PRESET"
const CLEAR_DISH_PRESET = "CLEAR_DISH_PRESET"

export function manageDishReducer (state: IDishInputState=defaultState, action: IAction): IDishInputState {
    switch (action.type) {
        case SET_PRICE: {
            const payload = action.payload as string
            return {...state, price: parseInt(payload) || 0}
        }
        case SET_MASS: {
            const payload = action.payload as string
            return {...state, mass: parseInt(payload) || 0}
        }
        case SET_NAME:
            return {...state, name: action.payload}        
        case SET_DESCRIPTION: 
            return {...state, description: action.payload}
        case SET_IS_PROMOTED: 
            return {...state, isPromoted: action.payload}
        case SET_PROMOTION_PRICE: 
            return {...state, promotionPrice: action.payload}
        case SET_INGREDIENT: 
            return {...state, ingredient: action.payload}
        case ADD_INGREDIENT: 
            return {...state, ingredients: [...state.ingredients, action.payload]}
        case REMOVE_INGREDIENT:
            const newArr: string[] = state.ingredients.filter((el) => {
                if (el !== action.payload) {
                    return el
                }
            })
            return {...state, ingredients: newArr}
        case SET_DISH_TYPE: 
            const type = action.payload as TDishType
            return {...state, type}
        case LOAD_DISH_PRESET: 
            const dish = action.payload as IDish_item
            return {
                ...dish,
                ingredient: ""
            }
        case CLEAR_DISH_PRESET: 
            return {...defaultState}
        default: return state
    }
}

export function setPriceAction (payload: string): IAction {
    return {type: SET_PRICE, payload}
}

export function setMassAction (payload: string): IAction {
    return {type: SET_MASS, payload}
}

export function setNameAction (payload: string): IAction {
    return {type: SET_NAME, payload}
}

export function setDescriptionAction (payload: string): IAction {
    return {type: SET_DESCRIPTION, payload}
}

export function setIngredientAction (payload: string): IAction {
    return {type: SET_INGREDIENT, payload}
}

export function addIngredientAction (payload: string): IAction {
    return {type: ADD_INGREDIENT, payload}
}

export function removeIngredientAction (payload: string): IAction {
    return {type: REMOVE_INGREDIENT, payload}
}

export function loadDishPresetAction (payload: IDish_item): IAction {
    return {type: LOAD_DISH_PRESET, payload}
}

export function clearDishPresetAction (): IAction {
    return {type: CLEAR_DISH_PRESET, payload: null}
}

export function setDishTypeAction (payload: TDishType): IAction {
    return {type: SET_DISH_TYPE, payload}
}

export function setIsPromotedAction (payload: boolean): IAction {
    return {type: SET_IS_PROMOTED, payload}
}

export function setPromotionPriceAction (payload: number | ''): IAction {
    return {type: SET_PROMOTION_PRICE, payload}
}

