import { IAction } from './../interfaces/actions';
import { IAdminModals_state } from '../interfaces';
const defaultState: IAdminModals_state = {
    create_dish_modal: false,
    edit_dish_modal: false, 
    statistics_modal: false
}


const TOGGLE_STATISTICS_MODAL = "TOGGLE_STATISTICS_MODAL" 
const TOGGLE_CREATE_DISH_MODAL = "TOGGLE_CREATE_DISH_MODAL" 
const TOGGLE_EDIT_DISH_MODAL = "TOGGLE_EDIT_DISH_MODAL"

export function adminModalsReducer (state: IAdminModals_state=defaultState, action: IAction): IAdminModals_state {
    switch (action.type) {
        case TOGGLE_CREATE_DISH_MODAL:
            return {...state, create_dish_modal: !state.create_dish_modal}
        case TOGGLE_EDIT_DISH_MODAL: 
            return {...state, edit_dish_modal: !state.edit_dish_modal}
        case TOGGLE_STATISTICS_MODAL:
            return {...state, statistics_modal: !state.statistics_modal}
        default: return state
    }
}

export function toggleStatisticsModalAction (payload?: undefined) {
    return {type: TOGGLE_STATISTICS_MODAL, payload}
}

export function toggleCreateDishModalAction (payload?: undefined) {
    return {type: TOGGLE_CREATE_DISH_MODAL, payload}
}

export function toggleEditDishModalAction (payload?: undefined) {
    return {type: TOGGLE_EDIT_DISH_MODAL, payload}
}