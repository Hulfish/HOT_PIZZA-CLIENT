import { TDishType } from './types';
export interface IDish_item {
    product_id: number
    name: string
    price: number
    description: string
    ingredients: string[]
    mass: number
    isPopular: boolean
    image_ref: string
    type: TDishType
    isPromoted: boolean
    promotionPrice: number | undefined
}

export interface ICartItem {
    name: string
    id: number
    additions: string[]
}

export interface IDishModal_item {
    item: IDish_item
    onClick?: <T>(arg?: T) => any
    onDeleteClick: <T>(arg?: T) => any
}
