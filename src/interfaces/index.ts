import { IDish_item } from './items';
import { ICheckoutFormInputState, IDishInputState, ILoginInputState, ISignupInputState } from './inputs';
import { TDishType } from './types';

export interface IState {
    isMobile: IMobileState
    mobileNavbar: IMobileNavbarState
    cartState: ICartState
    menuState: IMenu_state
    admin_modals: IAdminModals_state
    request_filters: IRequestsFilters_state
    login_input: ILoginInputState
    signup_input: ISignupInputState
    dish_input: IDishInputState
    authState: IAuthState
    checkoutInputState: ICheckoutFormInputState
    userState: IUserState
} 

export interface ICart_offcanvas {
    isActive: boolean 
}

export interface IMobileState {
    isMobile: boolean
}

export interface IMobileNavbarState {
    isActive: boolean
}

export interface ICartState {
    list: ICartCategory[]
    isOffcanvasActive: boolean
}

export interface ICartCategory {
    price: number
    promotionPrice: number | undefined
    isPromoted: boolean
    name: string
    product_id: number
    items: IDish_item[]
}

export interface IMenu_state{
    menu: IDish_item[] 
}

export interface IAdminModals_state {
    create_dish_modal: boolean
    edit_dish_modal: boolean
    statistics_modal: boolean
}

export interface IRequestsFilters_state {
    menu_filters: IMenuFilters
    isWatched: boolean
}

export interface IMenuFilters {
    isPromoted: boolean
    isPopular: boolean
    types: TDishType[]
    [key: string]: boolean | TDishType[]
}

export interface IAuthState {
    accessToken: string | null
}

export interface IUserState {
    nickname?: string
    isAdmin: boolean
    isAuthorized: boolean
     
}

