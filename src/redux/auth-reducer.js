import { authApi } from "../api/useApi"
const SET_USER_DATA = 'SET_USER_DATA'
const LOGIN_USER = "LOGIN_USER"
let initialstate = {
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
                isAuth: true
            }

        }
        default: {
            return state
        }
    }
}
export let authReducerAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth }, })
export const AuthData = () => {
    return (dispatch) => {
        authApi.AuthMe().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                dispatch(authReducerAC(id, email, login))
                console.log(response.data.data)
            }
        })
    }
}
export const LoginData = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.LoginMe(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(AuthData())
                }
            })
    }
}
export const Logout = () => {
    return (dispatch) => {
        authApi.LogoutMe().then(response => {
            dispatch(authReducerAC(null, null, null, false))
        })
    }
}
export default authReducer