import { IMobileState } from '../interfaces/index';

interface IAction {
    type: string
    payload: boolean
}

const defaultState: IMobileState = {
    isMobile: window.document.documentElement.clientWidth > 800 ? false : true 
}

const SWITCH_IS_MOBILE = "SWITCH_IS_MOBILE"


export function isMobileReducer(state: IMobileState=defaultState, action: IAction): IMobileState {
    switch (action.type) {
        case SWITCH_IS_MOBILE: {
            return {...state, isMobile: action.payload}
        }
        default: return state
    }
} 

export function switchIsMobileAction (payload: boolean) {
    return {type: SWITCH_IS_MOBILE, payload}
}
