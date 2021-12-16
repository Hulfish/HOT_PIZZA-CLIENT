import { useDispatch, useSelector } from "react-redux"
import {IState} from "../interfaces/index"
import { 
    turnOnAllOptionFilterAction, 
    turnOnPopularOptionFilterAction, 
    turnOnPromotionOptionFilterAction
} from "../store/request_filters_reducer"

export default function MainCategoryComponent () {
    const dispatch = useDispatch()
    const filters = useSelector((state: IState) => state.request_filters.menu_filters)

    function onTurnOnPopular () {
        dispatch(turnOnPopularOptionFilterAction())
    }

    function onTurnOnPromoted () {
        dispatch(turnOnPromotionOptionFilterAction())
    }

    function onTurnOnAll () {
        dispatch(turnOnAllOptionFilterAction())
    }

    return (
        <div>
            <div className = "d-flex ">
                <div className={`category f-si-26 ${!filters.isPromoted && !filters.isPopular ? "active" : ""}`} 
                    onClick = {onTurnOnAll}
                >
                    ВСЕ
                </div >
                <div className={`category f-si-26 ${filters.isPromoted ? "active" : ""}`} 
                    onClick = {onTurnOnPromoted}
                >
                    АКЦИИ
                </div >
                
            </div>
        </div>
    )
}