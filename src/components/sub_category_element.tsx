import {ISubCategoryProps} from "../interfaces/props"
import { useEffect, useState } from "react"

export default function SubCategoryElement (props: ISubCategoryProps) {
    return (
        <div>
            <button 
                type="button"
                className={"sub_category-btn " + (props.isActive ? "active" : " ")}
                onClick={() => {
                    if (props.onClick) {props.onClick()}
                }}> 
                {props.children}
            </button>
        </div>
    )
}