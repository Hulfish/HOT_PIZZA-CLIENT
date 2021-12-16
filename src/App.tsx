import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "./interfaces";
import { switchIsMobileAction } from "./store/is_mobile_reducer";
import { useRoutes } from "./routes";
import MobileNavbar from "./components/offcanvas/mobile_navbar"
import Navbar from "./components/navbar"
import Cart_menu_offcanvas from "./components/offcanvas/cart_offcanvas";
import Footer from "./components/footer"
import { useEffect } from "react";
import useAuth from "./http/hooks/auth_hook";
import { setIsAdminAction, setUserDataAction, setUserNicknameAction } from "./store/user_state_reducer";
import useNotify from "./hooks/notify_hook";

function App() {
    const dispatch = useDispatch()
    const {loginOnload} = useAuth()
    const {notify} = useNotify()
    const {isMobile} = useSelector((state: IState) => state.isMobile)
    const userState = useSelector((state: IState) => state.userState)
    const routes = useRoutes(userState)

    window.onresize = () => {
        const width = document.documentElement.clientWidth
        if (width < 800 && !isMobile) {
            dispatch(switchIsMobileAction(true))
        }
        if (width >= 800 && isMobile) {
            dispatch(switchIsMobileAction(false))
        }
    }

    useEffect(() => {
        loginOnload((userData) => {dispatch(setUserDataAction(userData))})
    }, [])

    useEffect(() => {
        if (userState.isAuthorized) {
            const isFirstLoad = sessionStorage.getItem("isFirstLoad")
            if (isFirstLoad === null) {
                sessionStorage.setItem("isFirstLoad", "false")
                notify(`Привет, ${userState.nickname}`)
            }
            
        }
    }, [userState.isAuthorized])

    return (
        <div >
            <MobileNavbar />
            <Navbar />
            <Cart_menu_offcanvas />
            <div style={{paddingTop: "66px"}} ></div>
            <div id="main">
                <div className="container-fluid"  >
                    {routes}
                </div>
            </div>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={false}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
