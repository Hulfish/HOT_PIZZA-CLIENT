import Checkout_registration_form from "../components/forms/checkout_registration_form";
import Checkout_list_form from "../components/forms/checkout_list_form"

export default function Checkout_page () {
    return (
        <div className="mt-5 page-frame" style={{marginBottom: "100px"}}>
            <form>
                <div className="row" >
                    <div className="col-sm-1" ></div>
                    <div className="col-sm-10 col-12"  >
                        <div className="row" >
                            <div className="col-md-8 col-12" >
                                <h1 className="my-4" > Оформление заказа </h1>
                                <Checkout_registration_form />
                            </div>
                            <div className="col-md-4 col-12 px-3 d-flex flex-column justify-content-between" >
                                <h1 className="my-4" >
                                    Ваш заказ
                                </h1>
                                <Checkout_list_form />
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm-1" ></div>
                </div>
                <div className="row" >
                    <div className="col-sm-1" ></div>
                    <div className="col-sm-10 col-12 row" >
                        <div className="col-xl-4 col-md-6 col-12 " >
                            <button className="order-button mt-4" >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-1" ></div>
                </div>
            </form>
            
        </div>
    )
}