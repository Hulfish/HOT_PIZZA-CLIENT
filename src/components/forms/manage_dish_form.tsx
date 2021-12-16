import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "react-bootstrap"

import { IState } from "../../interfaces"
import { IEditDishForm_props } from "../../interfaces/props"
import { 
    addIngredientAction, 
    removeIngredientAction, 
    setDescriptionAction, 
    setDishTypeAction, 
    setIngredientAction, 
    setIsPromotedAction, 
    setMassAction, 
    setNameAction, 
    setPriceAction, 
    setPromotionPriceAction
} from "../../store/manage_dish_reducer"
import SubCategoryElement from "../sub_category_element"
import { TDishType } from "../../interfaces/types"

export default function ManageDishForm (props: IEditDishForm_props) {
    
    const dispatch = useDispatch()
    const dish_input = useSelector((state: IState) => state.dish_input)
    const [imageFile, setImageFile] = useState<File | null>(null)

    function onChangeDescription (payload: string) {
        dispatch(setDescriptionAction(payload))
    }
    function onChangeMass (payload: string) {
        dispatch(setMassAction(payload))

    }
    function onChangePrice (payload: string) {
        dispatch(setPriceAction(payload))
    }
    function onChangeName (payload: string) {
        dispatch(setNameAction(payload))
    }
    function onChangeIngredient (payload: string) {
        dispatch(setIngredientAction(payload))
    }
    function onAddIngredient () {
        const payload = dish_input.ingredient
        if (!payload.trim()) {
            return
        }
        dispatch(addIngredientAction(payload))
        dispatch(setIngredientAction(""))
    }
    function onRemoveIngredient (payload: string) {
        if (!payload.trim()) {
            return
        }
        dispatch(removeIngredientAction(payload))
    }
    function onSetDishType (payload: TDishType) {
        dispatch(setDishTypeAction(payload))
    }

    function onSetIsPromoted () {
        dispatch(setIsPromotedAction(!dish_input.isPromoted))
    }

    function onSetPromotionPrice (payload: string) {
        const newPrice = parseInt(payload) || ''
        dispatch(setPromotionPriceAction(newPrice))
    }

    return (
        <form onSubmit={(e) => {props.onSubmit(e, imageFile)}}>
            <Modal.Body>
                <div>
                    <div>Характеристики блюда: </div>
                    <div>
                        
                        <select required onChange={(e) => onSetDishType(e.target.value as TDishType)} name="type-select">
                            <option>pizza</option>
                            <option>drinks</option>
                            <option>rolls</option>
                        </select>
                        <input onChange={(e) => {onChangeName(e.target.value)}} required={true} value={dish_input.name} placeholder="dish name" />
                        <input onChange={(e) => {onChangePrice(e.target.value)}} required={true} value={dish_input.price} placeholder="price" />
                        <input onChange={(e) => {onChangeMass(e.target.value)}} required={true} value={dish_input.mass} placeholder="mass" />
                        <div >
                            <div>
                                Ингредиенты: 
                                <div className="d-flex flex-wrap" >
                                    {dish_input.ingredients.map((ingredient) => {
                                    return <div>
                                    <SubCategoryElement
                                        isActive={false}
                                        onClick={() => onRemoveIngredient(ingredient)}
                                    >
                                        {ingredient}
                                    </SubCategoryElement></div>
                                })}
                                </div>
                            </div>
                            <div className="d-flex" >
                                <input onChange={e => onChangeIngredient(e.target.value)} value={dish_input.ingredient} placeholder="ingredient"  />
                                <button className="btn" type="button" onClick={onAddIngredient} > Add </button>
                            </div>
                        </div>
                        <textarea cols={5} className="w-100 textarea" onChange={e => onChangeDescription(e.target.value)}  required={true} value={dish_input.description} placeholder="description"  />
                        <input required={props.isCreator || false} type="file" onChange={(e) => setImageFile(prev => e.target.files?.[0] || null )}/>
                        {props.isCreator || 
                            <div>
                                <div className="px-1 f-si-14" >Осторожно! Выбирая файл, вы меняете картинку блюда.</div> 
                            </div>
                        }
                        <div className="mt-3">
                            <div>Действующая скидка</div>
                            <div>{dish_input.isPromoted ? "Скидка действует" : "Скидка отсутствует"}</div>
                            {
                                dish_input.isPromoted ? 
                                <div>
                                    <div>Прежняя цена: {dish_input.price}</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-nowrap">Нынешняя цена: </div>
                                        <input required className="mx-2" value={dish_input.promotionPrice} onChange={(e) => {onSetPromotionPrice(e.target.value)}} />
                                        </div>
                                </div> :
                                <></>
                            }
                            <button type="button" className="btn-regular mt-4" onClick={onSetIsPromoted}>
                                {dish_input.isPromoted ? "Выключить скидку" : "Включить скиду"}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer >
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={props.onCancel}>
                            Отмена
                        </button>
                    </div>
                    <div >
                        {
                        props.isCreator ? 
                            <button type="submit" className='btn btn-primary' >
                                Создать блюдо
                            </button> : 
                            <button type="submit" className='btn btn-primary' >
                                Сохранить изменения
                            </button>
                        }
                    </div>
            </Modal.Footer>
        </form>
    )
}