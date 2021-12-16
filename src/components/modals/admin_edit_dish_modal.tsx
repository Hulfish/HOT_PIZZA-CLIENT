import React, { FormEvent, useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import food_api from "../../http/food_api"
import { IDish_item } from "../../interfaces/items"
import { IDeleteModalBodyProps, IDeleteModalProps, IModalEditDish_props, IModalMenu_props, IModal_props } from "../../interfaces/props"
import Loader from "../loaders/loader"
import {DishModalItem} from "../dish_modal_item"
import { clearDishPresetAction, loadDishPresetAction } from "../../store/manage_dish_reducer"
import { timingSafeEqual } from "crypto"
import ManageDishForm from "../forms/manage_dish_form"
import { IChangeDish_request } from "../../interfaces/requests"
import { IState } from "../../interfaces"
import useNotify from "../../hooks/notify_hook"

export default function EditDishModal (props: IModal_props) {
    const dispatch = useDispatch()
    const {notify} = useNotify()
    const {changeDish, deleteDish} = food_api()

    const dish_input = useSelector((state: IState) => state.dish_input)

    const [visibleDeleteMenu, setVisibleDeleteMenu] = useState<boolean>(false) 
    const [visibleEditMenu, setVisibleEditMenu] = useState<boolean>(false)
    const [visibleMenu, setVisibleMenu] = useState<boolean>(true)

    function onToggleDish(dish: IDish_item): void {
        dispatch(loadDishPresetAction(dish))
        setDefaultSettings()
        setVisibleEditMenu(true)
    }
    function onToggleDelete (dish: IDish_item): void {
        dispatch(loadDishPresetAction(dish))
        setDefaultSettings()
        setVisibleDeleteMenu(true)
    }
    function clearDishPreset () {
        dispatch(clearDishPresetAction())
    }

    function onCloseEditModal () {
        clearDishPreset()
        setVisibleEditMenu(false)
        setVisibleMenu(true)
    }

    function onCloseDeleteModal () {
        clearDishPreset()
        setVisibleDeleteMenu(false)
        setVisibleMenu(true)
    }
    function setDefaultSettings () {
        setVisibleEditMenu(false)
        setVisibleDeleteMenu(false)
        setVisibleMenu(false)
    }

    async function onSubmit (e: FormEvent<HTMLFormElement>, image: File | null): Promise<void> {
        e.preventDefault()
        try {
            if (!dish_input.product_id || !dish_input.image_ref) {
                console.log("no product_id or image_ref in dish_input")
                return
            }
            const changeDish_dto: IChangeDish_request = {
                name: dish_input.name,
                price: dish_input.price || 0,
                mass: dish_input.mass || 0,
                description: dish_input.description,
                ingredients: dish_input.ingredients,    
                product_id: dish_input.product_id,
                image_ref: dish_input.image_ref,
                type: dish_input.type || "pizza",
                image: image,
                isPromoted: dish_input.isPromoted,
                promotionPrice: dish_input.promotionPrice
            }
            const res = await changeDish(changeDish_dto)
            if (res) {
                notify("Блюдо успешно изменено")
            }
        } catch (e) {
            console.log(e)
        }
    }
    async function onDelete (product_id: number): Promise<void> {
        try {
            const res = await deleteDish(product_id)
            if (res) {
                return notify("Блюдо успешно удалено!")
            }
            notify("Возникли проблемы удаления")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Modal animation={true} show={props.isVisible} onHide={props.onHide} centered={true} >
            <Modal.Header closeButton><b className="f-si-20">Изменить блюдо</b></Modal.Header>
            {
                visibleMenu ? 
                <ModalBody_menuMode toggleDish={onToggleDish} toggleDelete={onToggleDelete} /> :
                <></>
            }
            {
                visibleEditMenu ? 
                <ModalBody_editingMode onClose={onCloseEditModal} onSubmit={onSubmit} /> : 
                <></>
            }
            {
                visibleDeleteMenu ? 
                <ModalBodyDeleteMode onUnmount={onCloseDeleteModal} onDelete={onDelete}/> :
                <></>
            }
            {
                visibleEditMenu || visibleDeleteMenu ||
                <Modal.Footer >
                    <button  className="btn btn-secondary" onClick={props.onHide}>Закрыть</button>
                </Modal.Footer>
            }
        </Modal>
    )
} 

function ModalBody_menuMode (props: IModalMenu_props) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [menu, setMenu] = useState <IDish_item[]>([])
    const {getMenu} = food_api()
    useEffect(() => {
        getMenu_callback()
    }, [])

    async function getMenu_callback (): Promise<void> {
        try {
            const menu = await getMenu()
            if (!menu) {
                return console.log("<< getMenu >> API err occured")
            }
            setMenu(menu)
        } catch (e) {
            console.log(e)
        } finally {
            {setIsLoading(false)}
        }
    }

    return (
        <div>
            <Modal.Title>
                <div className="px-3" >
                    Текущее меню:
                </div>
            </Modal.Title>
            <Modal.Body>
                {isLoading ? 
                    <Loader /> : 
                    menu.map((dish) => <DishModalItem
                        onClick={() => {props.toggleDish(dish)}}
                        onDeleteClick={() => props.toggleDelete(dish)}
                        item={dish}
                    />) 
                }
            </Modal.Body>
        </div>
        
    )
}


class ModalBody_editingMode extends React.Component<IModalEditDish_props, {}> {
    
    constructor(props: IModalEditDish_props) {
        super(props)
    }
    componentWillUnmount() {
        this.props.onClose()
    }
    render() {
        return (
            <div>
                <ManageDishForm onCancel={this.props.onClose} onSubmit={this.props.onSubmit} />
            </div>
        )
    }
    
}

class ModalBodyDeleteMode extends React.Component<IDeleteModalProps, {}> {
    constructor (props: IDeleteModalProps) {
        super(props)
    }
    componentWillUnmount() {
        this.props.onUnmount()
    }
    render() {
        return (
            <div>
                <DeleteModalBody onDelete={this.props.onDelete} onClose={(e) => this.props.onUnmount()} />
            </div>
        )
    }

}

function DeleteModalBody (props: IDeleteModalBodyProps) {
    const dish_input = useSelector((state: IState) => state.dish_input)
    function onDelete () {
        const payload = dish_input.product_id || 0
        props.onDelete(payload)
    }
    return (
        <div>
            <Modal.Title>
                <div className="px-3" >
                    Удаление блюда
                </div>
            </Modal.Title>
            <Modal.Body>
                <div>Действительно хотите удалить {dish_input.name}?</div>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <button className="btn delete-button" onClick={onDelete}>Удалить</button>
                    </div>
                    <div>
                        <button onClick={props.onClose} className="btn btn-primary">Назад</button>
                    </div>
                </div>
            </Modal.Footer>
        </div>
    )
}