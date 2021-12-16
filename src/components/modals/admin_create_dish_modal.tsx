import { FormEvent } from "react"
import { useSelector } from "react-redux"
import { Modal } from "react-bootstrap"

import { IState } from "../../interfaces"
import { IModal_props } from "../../interfaces/props"
import { ICreateDish_request } from "../../interfaces/requests"
import food_api from "../../http/food_api"
import useNotify from "../../hooks/notify_hook"
import ManageDishForm from "../forms/manage_dish_form"


export default function CreateDishModal (props: IModal_props) {
    const {createDish} = food_api()
    const {notify} = useNotify()
    const dish_input = useSelector((state: IState) => state.dish_input)

    async function onSubmit(e: FormEvent<HTMLFormElement>, image: File | null): Promise<void> {
        e.preventDefault()
        try {
            if (!image) {
                return
            }
            const createDish_dto: ICreateDish_request = {
                name: dish_input.name,
                price: dish_input.price || 0,
                mass: dish_input.mass || 0,
                description: dish_input.description,
                ingredients: dish_input.ingredients,
                type: dish_input.type || "pizza",    
                image: image
            }
            const res = await createDish(createDish_dto)
            if (!res) {
                return notify("Что то пошло не так")
            }
            return notify("Блюдо успешно создано!")
        } catch (e) {
            console.log(e)
        } 
    }

    return (
        <Modal width={1000} animation={true} show={props.isVisible} onHide={props.onHide} centered={true} >
            <Modal.Header closeButton><b className="f-si-20">Создание блюда</b></Modal.Header>
            <ManageDishForm onSubmit={onSubmit} isCreator={true} onCancel={props.onHide} />
        </Modal>
    )
}
