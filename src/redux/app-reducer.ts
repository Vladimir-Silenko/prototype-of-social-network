
import { AuthData } from "./auth-reducer"


const SET_INITIALISE = 'SET_INITIALISE'

export type IinitialStateType = {
    initialise: boolean,
}

const initialstate: IinitialStateType = {
    initialise: false,
}

export const appReducer = (state = initialstate, action: any): IinitialStateType => {
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

type InitialiseAcType = {
    type: typeof SET_INITIALISE
}
export const initialiseAc = (): InitialiseAcType => ({ type: SET_INITIALISE })

export const initialiseAPP = () => (dispatch: any) => {
    let promise = dispatch(AuthData())
    Promise.all([promise]).then(() => {
        dispatch(initialiseAc())
    })
}