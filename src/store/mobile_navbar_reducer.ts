import { IMobileNavbarState } from '../interfaces/index';

interface IAction {
    type: string
    payload: boolean
}

const defaultState: IMobileNavbarState = {
    isActive: false
}

const SWITCH_IS_ACTIVE = "SWITCH_IS_ACTIVE"
const SWITCH_TO_STATE = "SWITCH_TO_STATE" 


export function mobileNavbarReducer(state: IMobileNavbarState=defaultState, action: IAction): IMobileNavbarState {
    
    switch (action.type) {
        case SWITCH_TO_STATE: {
            return {...state, isActive: action.payload}
        }
        case SWITCH_IS_ACTIVE: {
            return {...state, isActive: !state.isActive}
        }
        default: return state
    }
    

} 

export function switchIsNavbarActiveAction (payload?: boolean) {
    if (payload !== undefined) {
        return {type: SWITCH_TO_STATE, payload}
    }
    return {type: SWITCH_IS_ACTIVE, payload: null}
}
