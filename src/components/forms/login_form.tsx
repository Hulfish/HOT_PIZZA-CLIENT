import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import useAuth from "../../http/hooks/auth_hook"
import { IState } from "../../interfaces"
import { changeLoginInputEmailAction, changeLoginInputPasswordAction } from "../../store/inputs/login_input_reducer"
import Loader from "../loaders/loader"
import useNotify from "../../hooks/notify_hook"


interface IChangeEvent {
    target: {
        value: string
    }
}

export default function Login_form () {
    const {notify} = useNotify()
    const dispatch = useDispatch()
    const {login} = useAuth()
    const [isLoading, setIsloading] = useState(false) 

    const login_input = useSelector((state: IState) => state.login_input)

    function onChangeEmail (e: IChangeEvent): void {
        dispatch(changeLoginInputEmailAction(e.target.value))
    }
    function onChangePassword (e: IChangeEvent): void {
        dispatch(changeLoginInputPasswordAction (e.target.value))
    }

    function onSubmit (e: FormEvent): void {
        e.preventDefault()
        submit()
    }

    async function submit (): Promise<void> {
        setIsloading(true)
        try {
            const res = await login({
            email:login_input.email, 
            password: login_input.password
            })
            // dispatch(changeLoginInputEmailAction(''))
            // dispatch(changeLoginInputPasswordAction (''))
            if (res) {
                notify("Logined successifully!")
                setTimeout(() => {window.location.href = "/"}, 1000)
                return 
            }
            return notify("A login error ocurred")
        } catch (e) {
            console.log(e)
        } finally {
            setIsloading(false)
        }
    }

    if (isLoading) {
        return (
            <div >
                <Loader/>
                <div style={{height: "400px"}} >
                </div>
            </div>
        )
    }
    
    return (
        <div >
            <h3 >Войти</h3>
            
            <form onSubmit={onSubmit} >
                <input required type="email" placeholder="email" value={login_input.email} onChange={ onChangeEmail} />
                <input required minLength={8} maxLength={32} type="password" placeholder="password" value={login_input.password} onChange={onChangePassword} />
                <div className="row" >
                <div className=" col-12" >
                    <button type="submit" className="w-100 form-submit-button" > Войти </button>
                </div>
            </div>
            </form>
            <div className="mt-5" >
                <span className="text-muted"> Еще нет аккаунта? </span>
                <a href="/signup">регистрироваться</a>
            </div>
        </div>
    )
}