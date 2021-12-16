import { FormEvent, MouseEventHandler, ReactChild } from "react";

import { ICartCategory } from './index';
import { IDish_item } from './items';
import { TChildren } from './types';


export interface ICard_table_props { 
    dish_list: IDish_item[]
}

export interface IFood_card_props {
    item: IDish_item
}

export interface ISubCategoryProps {
    isActive: boolean
    children: TChildren
    onClick?: <T>(arg?: T) => any
    shouldChangeState?: undefined | boolean
}

export interface IFood_card_modal_props {
    onClose: MouseEventHandler
    item: IDish_item
}

export interface IProduct_info {
    name: string
    id: number
}

export interface IClose_button_props {
    onClose: MouseEventHandler
}

export interface ICards_container_props {
    children: ReactChild
}

export interface ICartItem_props {
    category: ICartCategory
}

export interface IAdminButton_toggle_props {
    children: ReactChild
    onToggle: MouseEventHandler
}

export interface IAdminMeeting_props {
    name: string
}

export interface IModal_props {
    onHide: MouseEventHandler
    isVisible: boolean
    
}

export interface IModalMenu_props {
    toggleDish: (dish: IDish_item) => void
    toggleDelete: (dish: IDish_item) => void
}

export interface IModalEditDish_props {
    onClose: () => void
    onSubmit: (e: FormEvent<HTMLFormElement>, image: File | null) => Promise<void>

}

export interface IEditDishForm_props {
    onCancel: MouseEventHandler
    isCreator?: boolean | undefined
    onSubmit: (e: FormEvent<HTMLFormElement>, image: File | null) => Promise<void>
}

export interface IDeleteModalProps {
    onUnmount: () => any
    onDelete: (product_id: number) => void
}

export interface IDeleteModalBodyProps {
    onClose: MouseEventHandler
    onDelete: (product_id: number) => void

}