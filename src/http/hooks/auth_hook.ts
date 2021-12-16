import { IUserDataDto } from './../../interfaces/dtos';
import { ISignup_response } from './../../interfaces/responses';
import { ILogin_request, ISignup_request } from './../../interfaces/requests';
import { $api } from ".."

export default function useAuth() {
    
    async function login (login_request_body: ILogin_request): Promise<boolean | undefined> {
        // gets cookies with built-in tokens
        try {
            const res = await $api.post("/api/auth/login", {
                email: login_request_body.email,
                password: login_request_body.password
            })
            if (res.status === 200) {
                return true
            }
            return false
        } catch (e) {
            console.log(e)
            
        } 
    }

    async function loginOnload (callback: (userData: IUserDataDto) => void): Promise<boolean> {
        // gets user data by using tokens from cookies
        try {
            const res = await $api.get("/api/auth/login")
            if (res.status === 200) {
                const userData = res.data.userData as IUserDataDto
                callback(userData)
                return true
            }
            return false
        } catch (e) {
            return false
        }
    }

    async function signup (signup_request_body: ISignup_request): Promise<ISignup_response> {
        // creates user account and gets cookies with built-in tokens  
        try {
            const res = await $api.post("/api/auth/signup", {
                email: signup_request_body.email,
                password: signup_request_body.password,
                nickname: signup_request_body.nickname
            })
            console.log("res: ", res)
            if (res.status === 201) {
                return {
                    isSuccess: true,
                    message: ""
                }
            }
            return {
                isSuccess: false,
                message: res.data.message
            }
        } catch (e) {
            console.log(e)
            return {isSuccess: false, message: "Возникли проблемы сервера или ресурс не найден"}
        } 
    }

    

    async function refresh (): Promise<boolean> {
        try {
            const res = await $api.get("/api/auth/refresh")
            if (!res) {
                return false
            }
            if (res.status === 200) {
                return true
            }
            return false
        } catch (e) {
            console.log(e)
            return false
            
        }
    }

    async function logout (): Promise<void> {
        try {
            const res = await $api.get("/api/auth/logout")
            return 
        } catch (e) {
            console.log(e)
        }
    }

    

    return {
        login, 
        signup, 
        refresh,
        logout,
        loginOnload
    }
}