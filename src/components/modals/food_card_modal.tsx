import { IClose_button_props, IFood_card_modal_props } from "../../interfaces/props";
import closeImg from "../../assets/close_black.svg"
import { useDispatch } from "react-redux";
import {addItemToCartAction} from "../../store/cart_reducer"
import { ICartItem, IDish_item } from "../../interfaces/items";

export default function Food_card_modal (props: IFood_card_modal_props) {
    const dispatch = useDispatch()
    function addToCart () {
        const item: IDish_item = props.item
        dispatch(addItemToCartAction(item))
    }

    return (
        <div className="food-modal" >
            <div className="food-modal-body" >
                <div className="d-flex justify-content-end" >
                    <CloseButton onClose={props.onClose} />
                </div>
                <div className="row" >
                    <div className="col-sm-6 px-3" >
                        <img className="modal-img" src={`http://localhost:5000/${props.item.image_ref}.jpeg`} />
                    </div>
                    <div className="col-sm-6 px-3 d-flex flex-column justify-content-between" >
                        <div className="f-si-16" >
                            <div className="f-si-22" >{props.item.name}</div>
                            <div>{props.item.description}</div>
                        </div>
                        <div>
                            <div>
                                <span>цена: {props.item.price}&#8381;</span>
                            </div>
                            <div className="d-flex justify-content-end mt-3">
                                <button className="btn-to-cart" onClick={addToCart} >В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CloseButton (props: IClose_button_props) {
    return (
        <button className="btn-close-general" onClick={props.onClose} >
            <img src={closeImg} style={{width: "16px", height: "16px"}} />
        </button>  
    )
}