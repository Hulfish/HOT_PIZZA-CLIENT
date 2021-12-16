import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import {pizza_logo} from "./../../logo/pizza_logo.svg"
import logoImgBig from "../assets/logo.svg"
import logoImgSm from "../assets/logo.svg"
import cartImg from "../assets/cart.svg"
import personImg from "../assets/person.svg"
import menuImg from "../assets/menu.svg"
import {IState} from "../interfaces/index"
import { switchIsNavbarActiveAction } from "../store/mobile_navbar_reducer"
import { switchCartOffcanvasAction } from "../store/cart_reducer"

export default function Navbar () {
    const dispatch = useDispatch()
    const isMobile = useSelector((state: IState) => state.isMobile.isMobile)
    const userState = useSelector((state: IState) => state.userState)
    function switchMobileNavState (): void {
        dispatch(switchIsNavbarActiveAction())
    }
    function onOpenCartOffcanvas(): void {
        dispatch(switchCartOffcanvasAction())
    }

    return (
        <nav className="__navbar scroll-fixed d-flex" >
            <div >
                {
                    !isMobile ? 
                    (
                        <div className={`d-flex ${isMobile ? "d-none" : ""} `} >
                            <div className="__nav-item f-si-18 " >
                                <a className="nav-link" href="/" >Главная</a>
                            </div>
                            <div className="__nav-item f-si-18 " >
                                <a className="nav-link" href="/info" >Инфо</a>
                            </div>
                            {
                                userState.isAdmin ? 
                                <div className="__nav-item f-si-18 " >
                                    <a className="nav-link" href="/admin" >Кабинет</a>
                                </div> : <></>
                            }
                        </div>
                    ) : (
                        <>
                            <button 
                                className="btn-nav" 
                                onClick={() => {switchMobileNavState()}}
                                >
                                    <img src={menuImg} /> {/** MENU/MOBILE_NAV BUTTON */}
                            </button>
                        </>
                    )

                }
                
            </div>
            <div className="centered" > {/** LOGO */}
                {!isMobile ? (
                        <div>
                            <img src={logoImgBig} className="logo-img-lg" />
                        </div>
                    ) : (
                        <div className="logo-wrapper" >
                            <img src={logoImgSm} className="logo-img-sm" />
                        </div>
                    )
                }
            </div>
            <div className = "" style ={{marginRight: "0px", width: "120px", paddingLeft: "20px"}} >
                <button className="btn-nav" >
                    <a href={`/${userState.isAuthorized ? "logout" : "login"}`}>
                        <img src={personImg} /> {/** PERSON/LOG IN /SIGNUP */}
                    </a>
                </button>
                <button className="btn-nav" onClick={onOpenCartOffcanvas} >
                    <img src={cartImg} /> {/** CART */}
                </button>
            </div>
        </nav>  
    )
}

