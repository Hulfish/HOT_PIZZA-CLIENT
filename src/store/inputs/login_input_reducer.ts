import { ILoginInputState } from '../../interfaces/inputs';


const defaultState: ILoginInputState = {
    email: '',
    password: ''
}

interface IAction {
    type: string
    payload: string
}

const CHANGE_EMAIL = "CHANGE_EMAIL"
const CHANGE_PASSWORD = "CHANGE_PASSWORD" 

export function login_input_reducer (state: ILoginInputState=defaultState, action: IAction): ILoginInputState {
    switch (action.type) {
        case CHANGE_EMAIL: 
            return {...state, email: action.payload}
        case CHANGE_PASSWORD: 
            return {...state, password: action.payload}
        default: return state
    }
}

export function changeLoginInputEmailAction (payload: string): IAction {
    return {type: CHANGE_EMAIL, payload}
}

export function changeLoginInputPasswordAction (payload: string): IAction {
    return {type: CHANGE_PASSWORD, payload}
}