import { ISignupInputState } from '../../interfaces/inputs';


const defaultState: ISignupInputState = {
    email: '',
    password: '',
    nickname: ''
}

interface IAction {
    type: string
    payload: string
}

const CHANGE_EMAIL = "CHANGE_EMAIL"
const CHANGE_PASSWORD = "CHANGE_PASSWORD" 
const CHANGE_NICKNAME = "CHANGE_NICKNAME" 

export function signup_input_reducer (state: ISignupInputState=defaultState, action: IAction): ISignupInputState {
    switch (action.type) {
        case CHANGE_EMAIL: 
            return {...state, email: action.payload}
        case CHANGE_PASSWORD: 
            return {...state, password: action.payload}
        case CHANGE_NICKNAME: 
            return {...state, nickname: action.payload}
        default: return state
    }
}

export function changeSignupInputEmailAction (payload: string): IAction {
    return {type: CHANGE_EMAIL, payload}
}

export function changeSignupInputPasswordAction (payload: string): IAction {
    return {type: CHANGE_PASSWORD, payload}
}

export function changeSignupInputNicknameAction (payload: string): IAction {
    return {type: CHANGE_NICKNAME, payload}
}