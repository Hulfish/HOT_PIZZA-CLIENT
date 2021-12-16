import { IAction } from './../interfaces/actions';
import { IRequestsFilters_state } from './../interfaces/index';
import { TDishType } from '../interfaces/types';



const defaultState: IRequestsFilters_state = {
    menu_filters: {
        isPromoted: false,
        isPopular: false,
        types: []
    },
    isWatched: true
}

const ADD_DISH_TYPE = "ADD_DISH_TYPE" 
const REMOVE_DISH_TYPE = "REMOVE_DISH_TYPE" 
const TURN_ON_PROMOTION_OPTION = "SWITCH_PROMOTION_OPTION"
const TURN_ON_POPULAR_OPTION = "SWITCH_POPULAR_OPTION"
const TURN_ON_ALL_OPTION = "TURN_ON_ALL_OPTION"
const SWITCH_STATE_TO_WATCHED = "SWITCH_STATE_TO_WATCHED"

export function requestFiltersReducer (state: IRequestsFilters_state=defaultState, action: IAction): IRequestsFilters_state {
    switch (action.type) {
        case ADD_DISH_TYPE: {
            const payload = action.payload as TDishType
            if (state.menu_filters.types.includes(payload)) {
                return state
            }
            return {
                ...state,
                isWatched: false,
                menu_filters: {
                ...state.menu_filters,
                types: [...state.menu_filters.types, action.payload]
            }}
        }
        case REMOVE_DISH_TYPE: {
            const payload = action.payload as TDishType
            const typesArr = state.menu_filters.types.slice() 
            for (let i = 0; i < typesArr.length; i++) {
                if (typesArr[i] === payload) {
                    typesArr.splice(i, 1)
                }
            }
            return {
                ...state, 
                isWatched: false,
                menu_filters: {
                ...state.menu_filters, 
                types: typesArr
                }
            }
        }
        case TURN_ON_PROMOTION_OPTION: {
            return {
                ...state,
                isWatched: false,
                menu_filters: {
                    ...state.menu_filters,
                    isPromoted: true,
                    isPopular: false
                }
            }
        }
        case TURN_ON_POPULAR_OPTION: {
            return {
                ...state,
                isWatched: false,
                menu_filters: {
                    ...state.menu_filters,
                    isPopular: true,
                    isPromoted: false
                }
            }
        }

        case TURN_ON_ALL_OPTION: {
            return {
                ...state,
                isWatched: false,
                menu_filters: {
                    ...state.menu_filters,
                    isPopular: false,
                    isPromoted: false
                }
            }
        }

        case SWITCH_STATE_TO_WATCHED: {
            return {...state,  isWatched: true}
        }

        default: return state
    }
} 

export function addDishTypeFilterAction (payload: TDishType): IAction {
    return {type: ADD_DISH_TYPE, payload}
}

export function removeDishTypeFilterAction (payload: TDishType): IAction {
    return {type: REMOVE_DISH_TYPE, payload}
}

export function turnOnPromotionOptionFilterAction (): IAction {
    return {type: TURN_ON_PROMOTION_OPTION, payload: null}
}

export function turnOnPopularOptionFilterAction (): IAction {
    return {type: TURN_ON_POPULAR_OPTION, payload: null}
}

export function turnOnAllOptionFilterAction (): IAction {
    return {type: TURN_ON_ALL_OPTION, payload: null}
}

export function switchFiltersStateToWatched (): IAction {
    return {type: SWITCH_STATE_TO_WATCHED, payload: null}
}
