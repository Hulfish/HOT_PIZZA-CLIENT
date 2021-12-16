import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useNotify from "../../hooks/notify_hook"
import useAuth from "../../http/hooks/auth_hook"
import { IState } from "../../interfaces"
import { 
    changeSignupInputNicknameAction, 
    changeSignupInputPasswordAction, 
    changeSignupInputEmailAction
} from "../../store/inputs/sign_up_input_reducer"
import Loader from "../loaders/loader"

interface IChangeEvent {
    target: {
        value: string
    }
}

export default function Sign_up_form () {
    const dispatch = useDispatch()
    const {notify} = useNotify()
    const {signup} = useAuth()
    const signup_input = useSelector((state: IState) => state.signup_input)

    const [isLoading, setIsLoading] = useState(false)

    function onChangeNickname(e: IChangeEvent): void {
       dispatch( changeSignupInputNicknameAction(e.target.value))
    }
    function onChangePassword(e: IChangeEvent): void {
        dispatch(changeSignupInputPasswordAction(e.target.value))
    }
    function onChangeEmail(e: IChangeEvent): void {
        dispatch(changeSignupInputEmailAction(e.target.value))
    }

    function onSubmit (e: FormEvent): void {
        e.preventDefault()
        submit()
    }

    async function submit (): Promise<void> {
        setIsLoading(true)
        try {
            const res = await signup({
                nickname: signup_input.nickname,
                password: signup_input.password,
                email: signup_input.email
            })
            if (res.isSuccess) {
                // dispatch(changeSignupInputEmailAction(""))
                // dispatch(changeSignupInputPasswordAction(""))
                // dispatch(changeSignupInputNicknameAction(""))
                notify("Аккаунт успешно создан!") 
                return 
            }
            return notify("Возникли проблемы регистрации: " + res.message)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)

        }
    }

    if (isLoading) {
        return (
            <div >
                <Loader />
                <div style={{height: "400px"}} >
                </div>
            </div>
        )
    }
    return (
        <div>
            <h3>Регистриоваться</h3>
            <form onSubmit={onSubmit} >
                <input required type="text" placeholder="nickname" value={signup_input.nickname} onChange={onChangeNickname} />
                
                <input required type="email" placeholder="email" value={signup_input.email} onChange={onChangeEmail} />
                <input required type="password" minLength={8} maxLength={32}  placeholder="password" value={signup_input.password} onChange={onChangePassword}/>
                <button className="w-100 form-submit-button" type="submit"> Регистрироваться </button>
            </form>
            <div className="mt-5" >
                <span className="text-muted"> Уже есть аккаунт? </span>
                <a href="/login" >Войти </a>
            </div>
        </div>
    )
}