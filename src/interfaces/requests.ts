import { TDishType } from "./types";

export interface ILogin_request {
    email: string
    password: string
}

export interface ISignup_request {
    email: string
    password: string
    nickname: string
}

export interface ICreateDish_request {
    name: string
    price: number
    description: string
    ingredients: string[]
    mass: number
    image: File
    type: TDishType
}

export interface IChangeDish_request {
    name: string
    price: number
    description: string
    ingredients: string[]
    mass: number
    image: File | null
    product_id: number
    image_ref: string
    type: TDishType
    promotionPrice: number | undefined,
    isPromoted: boolean
}