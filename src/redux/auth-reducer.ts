import { stopSubmit } from "redux-form"
import { authApi, securityApi } from "../api/useApi"
const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

export type authInitialstateType = {
    captchaUrl: string | null,
    userId: number | null,
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    login: string | null,
    isAuth: boolean,
}

let initialstate: authInitialstateType = {
    captchaUrl: null,
    userId: null,
    email: null,
    password: null,
    rememberMe: false,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialstate, action: any): authInitialstateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }

        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        }
        default: {
            return state
        }
    }
}
type AuthReducerPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type AuthReducerACType = {
    data: AuthReducerPayloadType
    type: typeof SET_USER_DATA
}

export let authReducerAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): AuthReducerACType => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth }, })

type GetCaptchaUrlACType = {
    type: typeof GET_CAPTCHA_URL,
    captchaUrl: string,
}
export const GetCaptchaUrlAC = (captchaUrl: string): GetCaptchaUrlACType => ({ type: GET_CAPTCHA_URL, captchaUrl })

export const AuthData = () => async (dispatch: any) => {
    let response = await authApi.AuthMe()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(authReducerAC(id, email, login, true))
    }


}

export const LoginData = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authApi.LoginMe(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(AuthData())
    }
    else {

        if (response.data.resultCode === 10) {
            dispatch(GetCaptchaUrl())
        }

        let message = response.data.messages.length > 0 ?
            response.data.messages[0] : "Something wrong'"
        dispatch(stopSubmit('login', { _error: message }))


    }


}
export const Logout = () => async (dispatch: any) => {
    let response = await authApi.LogoutMe()
    if (response.data.resultCode === 0) {
        dispatch(authReducerAC(null, null, null, false))
    }

}
export const GetCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityApi.GetCaptcha()
    console.log(response)
    const captchaUrl = response.data.url

    dispatch(GetCaptchaUrlAC(captchaUrl))
}
export default authReducer
