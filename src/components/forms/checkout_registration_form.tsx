import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubCategoryElement from "../sub_category_element";
import {setApartmentAction, setBuildngAction, setCityAction, setEntranceAction, setPaymentMethodAction, setPhoneAction, setStreetAction} from "../../store/checkout_form_reducer"
import { IState } from "../../interfaces";
import { TPaymentMethod } from "../../interfaces/types";

export default function Checkout_registration_form () {
    const dispatch = useDispatch()
    const checkoutInputState = useSelector((state: IState) => state.checkoutInputState)

    function onChangePhone (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setPhoneAction(e.target.value))
    }

    function onChangeCity (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setCityAction(e.target.value))
    }
    function onChangeStreet (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setStreetAction(e.target.value))
    }
    function onChangeBuilding (e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        if (typeof value !== "number") {return}
        dispatch(setBuildngAction(value))
    }
    function onChangeApartment (e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        if (typeof value !== "number") {return}
        dispatch(setApartmentAction(value))
    }
    function onChangeEntrance (e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        if (typeof value !== "number") {return}
        dispatch(setEntranceAction(value))
    }
    function onSetPaymentMethod (payload: TPaymentMethod) {
        dispatch(setPaymentMethodAction(payload))
    }
    
    return (
        <div className="module-form" >
                <label className="f-si-22 f-w-500" >Телефон</label>
                <div>
                    <input value={checkoutInputState.phone} onChange={onChangePhone} />
                </div>
                <div>{!checkoutInputState.isPhoneValidated ? "номер введен неправильно" : ""}</div>

                <label className="f-si-22 f-w-500 mt-4 ">Адрес доставки</label>
                <div className="row" >
                    <div className="col-12" >
                        <input value={checkoutInputState.city} onChange={onChangeCity} required placeholder="Город" />
                    </div>
                        <div className="col-xl-3 col-6" >
                            <input value={checkoutInputState.street} required placeholder="Улица" onChange={onChangeStreet} />
                        </div>
                        <div className="col-xl-3 col-6" >
                            <input value={checkoutInputState.entrance || ""} placeholder="Подъезд" onChange={onChangeEntrance} />
                        </div>
                        <div className="col-xl-3 col-6" >
                            <input value={checkoutInputState.building || ""} required placeholder="Дом" onChange={onChangeBuilding} />
                        </div>
                        <div className="col-xl-3 col-6" >
                            <input value={checkoutInputState.apartment || ""} required placeholder="Квартира" onChange={onChangeApartment} />
                        </div>
                </div>
                
                <div className="mt-4" >
                    <div className="f-si-22 f-w-500" >Способ оплаты</div>
                    <div className="d-flex" >
                        <SubCategoryElement onClick={() => onSetPaymentMethod("cash")} isActive = {checkoutInputState.paymentMethod === "cash"}>Наличные</SubCategoryElement>
                        <SubCategoryElement onClick={() => onSetPaymentMethod("online")} isActive = {checkoutInputState.paymentMethod === "online"} >Онлайн оплата</SubCategoryElement>
                    </div>
                </div>
                <div className="mt-4 d-flex align-items-center " >
                    <input placeholder="промокод" />
                    <button type="button" className="btn btn-secondary mx-2" >Применить</button>
                </div>
        </div>
    )
}