import { IUserDataDto } from './../interfaces/dtos';
import { IAction } from './../interfaces/actions';
import { IUserState } from './../interfaces/index';
const defaultState: IUserState = {
    isAdmin: false,
    isAuthorized: false,
}

const SET_IS_ADMIN = "SET_IS_ADMIN" 
const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED"
const SET_USER_NICKNAME = "SET_USER_NICKNAME"
const SET_USER_DATA = "SET_USER_DATA"

export function userStateReducer (state: IUserState=defaultState, action: IAction): IUserState {
    switch (action.type) {
        case SET_IS_ADMIN: {
            const payload = action.payload as boolean
            return {...state, isAdmin: payload}
        } 
        case SET_IS_AUTHORIZED: {
            const payload = action.payload as boolean
            return {...state, isAuthorized: payload}
        }
        case SET_USER_NICKNAME: {
            const payload = action.payload as string
            return {...state, nickname: payload}
        }
        case SET_USER_DATA: {
            const payload = action.payload as IUserDataDto
            return {...state, nickname: payload.nickname, isAdmin: payload.isAdmin, isAuthorized: true}
        }
        default: return state
    }
}

export function setIsAdminAction (payload: boolean): IAction {
    return {type: SET_IS_ADMIN, payload}
}

export function setIsAuthorizedAction (payload: boolean): IAction {
    return {type: SET_IS_AUTHORIZED, payload}
}

export function setUserNicknameAction (payload: string): IAction {
    return {type: SET_USER_NICKNAME, payload}
}

export function setUserDataAction (payload: IUserDataDto): IAction {
    return {type: SET_USER_DATA, payload}
}