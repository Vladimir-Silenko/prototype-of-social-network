import { stopSubmit } from "redux-form"
import { authApi, securityApi } from "../api/useApi"
const SET_USER_DATA = 'SET_USER_DATA'
const LOGIN_USER = "LOGIN_USER"
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

let initialstate = {
    captchaUrl: null,
    userId: null,
    email: null,
    password: null,
    rememberMe: false,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialstate, action) => {
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
                captchaUrl: action.url
            }
        }
        default: {
            return state
        }
    }
}
export let authReducerAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth }, })
export const GetCaptchaUrlAC = (url) => ({ type: GET_CAPTCHA_URL, url })

export const AuthData = () => async (dispatch) => {
    let response = await authApi.AuthMe()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(authReducerAC(id, email, login, true))
    }


}

export const LoginData = (email, password, rememberMe) => async (dispatch) => {
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
export const Logout = () => async (dispatch) => {
    let response = await authApi.LogoutMe()
    if (response.data.resultCode === 0) {
        dispatch(authReducerAC(null, null, null, false))
    }

}
export const GetCaptchaUrl = () => async (dispatch) => {
    let response = await securityApi.GetCaptcha()
    console.log(response)
    const captchaUrl = response.data.url

    dispatch(GetCaptchaUrlAC(captchaUrl))
}
export default authReducer
