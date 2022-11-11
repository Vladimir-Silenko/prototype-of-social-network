import { authApi } from "../api/useApi"
const SET_USER_DATA = 'SET_USER_DATA'
let initialstate = {
    userId: null,
    email: null,
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
export let authReducerAC = (userId, email, login,) => ({ type: SET_USER_DATA, data: { userId, email, login, }, })
export const AuthData = () => {
    return (dispatch) => {
        authApi.AuthMe().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                dispatch(authReducerAC(id, email, login))
            }
        })
    }
}
export default authReducer