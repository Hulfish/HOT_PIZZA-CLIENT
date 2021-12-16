import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios"
import { API_URL } from './../config/index';
import useAuth from "./hooks/auth_hook";

interface IRequestConfig  {
    headers: {
        authorization: string,
        also: "string"
    }
}

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})



// $api.interceptors.request.use((config: AxiosRequestConfig ): AxiosRequestConfig => {
//     config.headers = {Authorization: "Bearer " + localStorage.getItem("accessToken")}
//     return config;
// })

$api.interceptors.response.use(
    (config) => {return config},
    async (error: AxiosError) => {
        const {refresh, logout} = useAuth()
        if (error.response?.status === 401) {
            try {
                const isSucced = await refresh()
                if (!isSucced) {
                    return logout()
                }
                const initialRequest = error.config
                return $api.request(initialRequest)
            } catch (e) {
                console.log(e)
            }
        }
    }
)

