import {combineReducers, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import { isMobileReducer} from "./is_mobile_reducer"
import { mobileNavbarReducer} from "./mobile_navbar_reducer"
import { cartListReducer } from "./cart_reducer"
import { login_input_reducer} from "./inputs/login_input_reducer"
import { signup_input_reducer} from "./inputs/sign_up_input_reducer"
import { manageDishReducer} from "./manage_dish_reducer"
import { menuReducer} from "./menu_reducer"
import { adminModalsReducer } from "./admin_modal_reducer"
import { requestFiltersReducer } from "./request_filters_reducer"
import { authReducer } from "./auth_reducer"
import { checkoutFormReducer } from "./checkout_form_reducer"
import { userStateReducer } from "./user_state_reducer"

const rootReducer = combineReducers({
    isMobile: isMobileReducer,
    mobileNavbar: mobileNavbarReducer,
    cartState: cartListReducer,
    menuState: menuReducer,
    login_input: login_input_reducer,
    signup_input: signup_input_reducer,
    dish_input: manageDishReducer,
    admin_modals: adminModalsReducer,
    request_filters: requestFiltersReducer,
    authState: authReducer,
    checkoutInputState: checkoutFormReducer,
    userState: userStateReducer
})

export const store = createStore(rootReducer, composeWithDevTools())