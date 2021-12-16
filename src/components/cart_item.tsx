import { useDispatch } from "react-redux"
import { ICartCategory } from "../interfaces"
import { ICartItem_props } from "../interfaces/props"
import { addItemToCartAction, removeItemFromCartAction } from "../store/cart_reducer"

export default function CartItem (props: ICartItem_props) {
    const dispatch = useDispatch()
    function onAddItem (): void {
        dispatch(addItemToCartAction(props.category.items[0]))
    }
    function onRemoveItem (): void {
        dispatch(removeItemFromCartAction(props.category.items[0]))
    }
    function calculatePrice (category: ICartCategory) {
        if (category.isPromoted && category.promotionPrice) {
            return category.items.length * category.promotionPrice
        }
        return category.items.length * category.price
    }
    return (
        <li>
            <div className="cart-item" >
                <div className="d-flex justify-content-between" >
                    <div>{props.category.name} </div>
                    <div>x{props.category.items.length}</div>
                </div>
                <div className="d-flex justify-content-between" >
                    <b>{calculatePrice(props.category)} &#8381;</b>
                    <div className="d-flex" >
                        <button type="button" onClick={onAddItem} >+</button>
                        <button type="button" onClick={onRemoveItem} >-</button>
                    </div>
                </div>
            </div>
        </li>
    )
}
