import { IAction } from './../interfaces/actions';
import { IAuthState } from './../interfaces/index';


const defaultState: IAuthState = {
    accessToken: null
}

const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN"
const REMOVE_ACCESS_TOKEN = "REMOVE_ACCESS_TOKEN" 

export function authReducer (state: IAuthState=defaultState, action: IAction): IAuthState {
    switch (action.type) {
        case SET_ACCESS_TOKEN: {
            const payload = action.payload as string
            return {...state, accessToken: payload}
        }
        case REMOVE_ACCESS_TOKEN: {
            return {...state, accessToken: null}
        }
        default: return state
    }
}

export function setAccessTokenAction(accessToken: string ): IAction {
    return {type: SET_ACCESS_TOKEN, payload: accessToken}
}