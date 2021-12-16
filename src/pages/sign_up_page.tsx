import { useState } from "react"
import Sign_up_form from "../components/forms/sign_up_form"

export default function Sign_up_page () {
    return (
        <>
            <div className="row" >
                <div style={{height: "180px"}} ></div>
                <div className="col-xl-4 col-sm-2"></div>
                <div className="col-sm-8 col-xl-4 ">
                    <Sign_up_form />
                </div>
                <div className="col-xl-4 col-sm-2"></div>
                
            </div>
            <div style={{height: "550px"}}></div>
        </>
    )
}

