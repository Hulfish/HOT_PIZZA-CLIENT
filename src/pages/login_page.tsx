import { useEffect, useState } from "react"
import { useHref } from "react-router"
import { useLinkClickHandler } from "react-router-dom"
import Login_form from "../components/forms/login_form"

export default function Login_page () {
    useEffect(() => {
        setTimeout(() => {
        }, 1000)
    })
    return (
        <>
            <div className="row" >
                <div style={{height: "180px"}} ></div>
                <div className="col-xl-4 col-sm-2"></div>
                <div className="col-sm-8 col-xl-4 ">
                    <Login_form />
                </div>
                <div className="col-xl-4 col-sm-2"></div>
                
            </div>
            <div style={{height: "550px"}}></div>
        </>
    )
}

