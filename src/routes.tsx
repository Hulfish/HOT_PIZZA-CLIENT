import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

import Home_page from "./pages/home_page"
import Info_page from "./pages/info_page"
import Admin_page from "./pages/admin_page"
import Login_page from "./pages/login_page"
import Sign_up_page from "./pages/sign_up_page"
import Checkout_page from "./pages/checkout_page"
import Logout_page from "./pages/logout_page"
import { IUserState } from "./interfaces";

export function useRoutes (userState: IUserState) {
    if (userState.isAdmin) {
        return (
        <Router>
            <Routes>
                <Route path="/" element = {<Home_page />}/>
                <Route path="/info" element={<Info_page />} />
                <Route path="/admin" element={<Admin_page />}/>
                <Route path="/login" element={<Login_page />} />
                <Route path="/logout" element={<Logout_page />} />
                <Route path="/signup" element={<Sign_up_page /> } />
                <Route path="/checkout" element={<Checkout_page />} />
            </Routes>
        </Router>
        )
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Home_page />}/>
                <Route path="/info" element={<Info_page />} />
                <Route path="/login" element={<Login_page />} />
                <Route path="/logout" element={<Logout_page />} />
                <Route path="/signup" element={<Sign_up_page /> } />
                <Route path="/checkout" element={<Checkout_page />} />
            </Routes>
        </Router>
    )
}