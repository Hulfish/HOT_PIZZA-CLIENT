import useAuth from "../http/hooks/auth_hook"

export default function Logout_page () {
    const {logout} = useAuth()
    function onLogout () {
        logout()
    }
    return (
        <>
            <div className="row" >
                <div style={{height: "180px"}} ></div>
                <div className="col-xl-4 col-sm-2"></div>
                <div className="col-sm-8 col-xl-4 ">
                    <h3>Вы уверены, что хотите выйти?</h3>
                    <div className="mt-5" >
                        <a role="button" href="/" className="btn btn-primary">Назад</a>
                        <button onClick={onLogout} className="btn btn-secondary mx-2">Выйти</button>

                    </div>
                </div>
                <div className="col-xl-4 col-sm-2"></div>
                
            </div>
            <div style={{height: "70vh"}}></div>
        </>
    )
}

