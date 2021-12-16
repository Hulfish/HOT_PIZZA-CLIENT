import {useDispatch, useSelector} from "react-redux"
import {IState} from "../../interfaces/index"
import closeImg from "../../assets/close.svg"
import closeImg_2 from "../../assets/close_2.svg"
import { switchIsNavbarActiveAction } from "../../store/mobile_navbar_reducer"
import { useState } from "react"
import { NAVBAR_HEIGHT } from "../../config/variables"

export default function MobileNavbar () {
    const dispatch = useDispatch()
    const userState = useSelector((state: IState) => state.userState)
    const isActive = useSelector((state: IState) => state.mobileNavbar.isActive )

    return (
        <div id="mobile-navbar" className={(isActive ? "active" : "")} >
                <div style={{marginTop: `${NAVBAR_HEIGHT}`}} className="w-100 mobile-nav-body" >
                    <ul>
                        <li><a href="/">Главная</a></li>
                        {
                            userState.isAdmin ? 
                            <li> <a href="admin_page">Кабинет</a> </li> :
                            <></>
                        }
                        <li><a href="/info">О нас</a></li>
                    </ul>
                </div>
            
        </div>
        
    )
}