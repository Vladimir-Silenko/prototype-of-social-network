import { AuthMe } from "../api/useApi"
const SET_USER_DATA = 'SET_USER_DATA'
let initialstate = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
}
const authReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
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
        AuthMe().then(data => {
            let { id, email, login } = data.data
            dispatch(authReducerAC(id, email, login))
            console.log(data.data)
        })
    }
}
export default authReducer