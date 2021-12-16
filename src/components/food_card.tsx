import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FOOD_CARD_WIDTH } from "../config/variables"
import { IState } from "../interfaces"
import { IFood_card_props } from "../interfaces/props"
import Food_card_modal from "./modals/food_card_modal"

export default function Food_card (props: IFood_card_props) {
    const [isActive, setIsActive] = useState(false)
    const {isMobile} = useSelector((state: IState) => state.isMobile)
    
    function toCart (): void {
        setIsActive(true)
    }
    function onClose (): void {
        setIsActive(false)
    }

    return (
        <div >
            {isActive && <Food_card_modal item={props.item} onClose={onClose} />}
            <div className = "food-card position-relative" style={{width: (isMobile ? FOOD_CARD_WIDTH : "240px" )}} >
                <img src={`http://localhost:5000/${props.item.image_ref}.jpeg`} className="cart-img" />
                <div className = "food-card-description"  >
                    <div className={"font-product-name f-si-"+(isMobile ? "14" : "16" )}>{props.item.name}</div>
                    <div className="row">
                        <div className="col-xl-6 pt-2 f-si-14">
                            {
                                props.item.isPromoted ? 
                                <div>
                                    <b>{props.item.promotionPrice}&#8381; </b>
                                    <span className="text-line-through px-1">{props.item.price}&#8381;</span>
                                </div> : 
                                <div>{props.item.price} &#8381;</div>
                            }
                                
                        </div>
                        <div className="col-xl-6 d-xl-flex my-2 w-0 justify-content-end">
                            <div className="f-si-14" >
                                <button className="text-nowrap" onClick={toCart} > 
                                    В корзину
                                </button> 
                            </div>
                        </div>
                    </div>
                    {
                        props.item.isPromoted ? 
                        (
                            <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                Акция
                            </span> 
                        ) : (
                            <></>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}