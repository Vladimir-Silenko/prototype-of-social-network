import { AuthData } from "./auth-reducer"

const SET_INITIALISE = 'SET_INITIALISE'
const initialstate = {
    initialise: false,
    error: null,

}
export const appReducer = (state = initialstate, action) => {
    switch (action.type) {
        case (SET_INITIALISE): {
            return {
                ...state,
                initialise: true
            }
        }
        default: {
            return state
        }
    }
}
export const initialiseAc = () => ({ type: SET_INITIALISE })

export const initialiseAPP = () => (dispatch) => {
    let promise = dispatch(AuthData())
    Promise.all([promise]).then(() => {
        dispatch(initialiseAc())
    })
}