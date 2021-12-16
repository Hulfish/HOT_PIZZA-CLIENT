import { TDishType, TPaymentMethod } from './types';
export interface ILoginInputState {
    email: string
    password: string
}

export interface ISignupInputState {
    email: string
    password: string
    nickname: string
}

export interface IDishInputState {
    mass: number | undefined
    price: number | undefined
    name: string 
    description: string 
    ingredient: string 
    ingredients: string[]
    product_id?: number | undefined
    image_ref?: string | undefined
    type: TDishType | null
    isPromoted: boolean
    promotionPrice: number | undefined
}

export interface ICheckoutFormInputState {
    city: string
    street: string
    building: number | null
    entrance: number | null
    apartment: number | null
    paymentMethod: TPaymentMethod
    promocode: string
    isPhoneValidated: boolean
    phone: string
}