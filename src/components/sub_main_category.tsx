import { useDispatch, useSelector } from "react-redux"
import { IState } from "../interfaces"
import { TDishType } from "../interfaces/types"
import { addDishTypeFilterAction, removeDishTypeFilterAction } from "../store/request_filters_reducer"
import SubCatedoryElement from "./sub_category_element"

export default function SubMainCategory () {
    const dispatch = useDispatch()
    const dish_types = useSelector((state: IState) => state.request_filters.menu_filters.types)

    function onAddDishType (type: TDishType) {
        dispatch(addDishTypeFilterAction(type))
    }

    function onRemoveDishType (type: TDishType) {
        dispatch(removeDishTypeFilterAction(type))
    }

    const food_types: TDishType[] = ["drink", "pizza", "rolls"] 

    return (
        <div >
            
            <div className="sub-category mt-2 mb-4" >
                {
                    food_types.map((el) => {
                        return (
                            <SubCatedoryElement isActive={dish_types.includes(el)}
                            onClick={() => {
                                if (dish_types.includes(el)) {
                                    return onRemoveDishType(el)
                                }
                                onAddDishType(el)
                                
                            }}
                            >{el}</SubCatedoryElement>
                        )
                    })
                }
            </div>
        </div>
    )
}