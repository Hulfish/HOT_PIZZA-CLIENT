import { useSelector } from "react-redux"
import { CART_OFFCANVAS_WIDTH } from "../../config/variables"
import { IState } from "../../interfaces"
import CartItem from "../cart_item"


export default function Cart_menu_offcanvas () {
    const isActive = useSelector((state: IState) => state.cartState.isOffcanvasActive)
    const isMobile = useSelector((state: IState) => state.isMobile.isMobile)
    if (!isActive) {
        return (
        <div className={!isMobile ? "cart-menu-offcanvas" : "cart-menu-offcanvas-mobile"} style={{width:"0px"}} >
        <Cart_menu_offcanvas_body />
        
        </div>)
    } 
    
    return (
        <div className={!isMobile ? "cart-menu-offcanvas" : "cart-menu-offcanvas-mobile" } style={{width: (!isMobile ?  CART_OFFCANVAS_WIDTH : "100%")}} >
            
            <Cart_menu_offcanvas_body />
        </div>
    )
    
    
}

function Cart_menu_offcanvas_body () {
    return (
        <div className="cart-menu-offcanvas-body d-flex flex-column justify-content-between" >
            <div>
                <h1> Корзина </h1>
                <Cart_list />
            </div>
            <div>
                <button className="btn-black w-100" >
                    <a href="/checkout"> Перейти к заказу </a>
                </button>
            </div>
        </div>
    )
}

function Cart_list () {
    const cart_list = useSelector((state: IState) => state.cartState.list)
    
    return (
        <div className="cart-list" style={{overflow: "auto"}}>
            <ul>
                {
                    cart_list.map((category) => {
                        return (
                            <CartItem category={category} />
                        )
                    })
                }
            </ul>
        </div>
    )
}