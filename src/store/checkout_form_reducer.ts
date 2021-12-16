import { TPaymentMethod } from './../interfaces/types';
import { IAction } from './../interfaces/actions';
import { ICheckoutFormInputState } from './../interfaces/inputs';

const defaultState: ICheckoutFormInputState = {
    city: "",
    street: "",
    building: null,
    entrance: null,
    apartment: null,
    paymentMethod: "cash",
    promocode: "",
    isPhoneValidated: false,
    phone: "",
}

const SET_CITY = "SET_CITY " 
const SET_STREET = "SET_STREET"
const SET_BUILDING = "SET_BUILDING " 
const SET_ENTRANCE = "SET_ENTRANCE"
const SET_APARTMENT = "SET_APARTMENT"
const SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD"
const SET_PROMOCODE = "SET_PROMOCODE"
const SET_PRONE = "SET_PRONE"

function validatePhone (phone: string): boolean {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone)
}

export function checkoutFormReducer (state: ICheckoutFormInputState=defaultState, action: IAction): ICheckoutFormInputState{
    switch (action.type) {
        case SET_CITY: {
            const payload = action.payload as string
            return {...state, city: payload}
        }
        case SET_STREET: {
            const payload = action.payload as string
            return {...state, street: payload}
        }
        case SET_BUILDING: {
            const payload = action.payload as number
            return {...state, building: payload}
        }
        case SET_ENTRANCE: {
            const payload = action.payload as number
            return {...state, entrance: payload}
        }
        case SET_APARTMENT: {
            const payload = action.payload as number
            return {...state, apartment: payload}
        }
        case SET_PAYMENT_METHOD: {
            const payload = action.payload as TPaymentMethod
            return {...state, paymentMethod: payload}
        }
        case SET_PROMOCODE: {
            const payload = action.payload as string
            return {...state, promocode: payload}
        }
        case SET_PRONE: {
            const payload = action.payload as string
            const isPhoneValidated = validatePhone(payload)
            return {...state, phone: payload, isPhoneValidated}
        }
        default: return state
    }
}

export function setCityAction (payload: string): IAction {
    return {type: SET_CITY, payload}
}
export function setStreetAction (payload: string): IAction {
    return {type: SET_STREET, payload}
}
export function setBuildngAction (payload: number): IAction {
    return {type: SET_BUILDING, payload}
}
export function setEntranceAction (payload: number): IAction {
    return {type: SET_ENTRANCE, payload}
}
export function setApartmentAction (payload: number): IAction {
    return {type: SET_APARTMENT, payload}
}
export function setPaymentMethodAction (payload: TPaymentMethod): IAction {
    return {type: SET_PAYMENT_METHOD, payload}
}
export function setPromocodeAction (payload: string): IAction {
    return {type: SET_PROMOCODE, payload}
}
export function setPhoneAction (payload: string): IAction {
    return {type: SET_PRONE, payload}
}

