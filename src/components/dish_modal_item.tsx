import {IDishModal_item} from "../interfaces/items"
import trashImg from "../assets/trash.svg"
export function DishModalItem (props: IDishModal_item) {
    const {price, name, image_ref} = props.item
    return (
        <div className ="dish-modal-item w-100" onClick={() => props.onClick && props.onClick()}>
            <div>
                <img src={"http://localhost:5000/" + image_ref + ".jpeg"} height={80} width={80} />
            </div>
            <div className="w-100" >
                <div className="d-flex justify-content-between w-100" >
                    <div className="f-si-20" >
                        {name}
                    </div>
                    <div>
                        {price}
                    </div>
                </div>
                <div className="d-flex mt-2 justify-content-between w-100" >
                    <div >
                    </div>
                    <div >
                        <button 
                            role="button" 
                            className="btn px-0"
                            onClick={(e) =>{
                                e.stopPropagation()
                                props.onDeleteClick()
                            }}
                            >
                            <img className="mx-0" width={20} height={20} src={trashImg}/>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}