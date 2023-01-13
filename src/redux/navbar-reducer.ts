import { authApi } from "../api/useApi"

const SET_CURRENT_USER: string = 'SET_CURRENT_USER'

type userIconType = {
    name: string,
    ava: string,
    id: number,
}
type InitialStateType = {
    friends: Array<userIconType>,
    usersProfile: number,
}

let initialstate: InitialStateType = {
    friends: [
        { name: 'Alisa', ava: 'https://krot.info/uploads/posts/2021-03/1615285482_44-p-kotenok-gav-art-kartinki-46.jpg', id: 1 },
        { name: 'Karina', ava: 'https://funart.pro/uploads/posts/2021-10/1633940898_1-funart-pro-p-zlaya-taksa-zhivotnie-krasivo-foto-2.jpg', id: 2 },
        { name: 'Mikel', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGFzx_58JF2vM5_r82NKOuNxOcOGzhRGRuA&usqp=CAU', id: 3 },
    ],
    usersProfile: 2
}


const NavbarReducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {
                ...state,
                usersProfile: action.userId
            }
        }
        default: {
            return state
        }
    }
}
const currentUserAC = (userId: number) => ({ type: SET_CURRENT_USER, userId: userId })
export const SetCurrentUser = () => {
    return (dispatch) => {
        authApi.AuthMe().then(response => {
            dispatch(currentUserAC(response.data.data.id))
        })
    }
}
export default NavbarReducer