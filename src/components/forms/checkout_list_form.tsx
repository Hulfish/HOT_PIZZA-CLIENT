import { useSelector } from "react-redux"
import { ICartCategory, IState } from "../../interfaces"
import CartItem from "../cart_item"

export default function Checkout_list_form () {
    const cart_list = useSelector((state: IState) => state.cartState.list)
    function calculateTotalPrice(list: ICartCategory[]): number {
        if (list[0]) {
            return (
                cart_list.map((category) => {
                    if (category.isPromoted && category.promotionPrice) {
                        return category.items.length * category.promotionPrice
                    }
                    return category.items.length * category.price
                })
                .reduce((prev, current) =>  prev + current)
            )
        }
        return 0
    }
    return (
        <div className="module-form h-100 d-flex flex-column justify-content-between" >
            <div className="overflow-auto" style={{overflow: "auto"}} >
                <ul className="checkout-cart-list bg-green" >
                    {
                        cart_list.map((category) => {
                            return (
                                <CartItem category={category} />
                            )
                        })
                    }
                </ul>
            </div>
            <div className="f-si-20" >
                Итого: 
                {calculateTotalPrice(cart_list)}&#8381; {/** TOTAL PRICE */}
            </div>
        </div>
    )
}