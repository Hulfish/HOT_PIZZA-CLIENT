import { AxiosResponse } from 'axios';
import { IDish_item } from './items';
export interface ISignup_response {
    isSuccess: boolean
    message: string | undefined
}

export interface IGetMenu_response extends AxiosResponse {
    data: {
        menu: IDish_item[]
        message: string
    }
    
}