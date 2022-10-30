const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialstate = {
    users: [
    ],
}

const UsersReduser = (state = initialstate, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,//копируем стейт
                users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: true }// присваиваем значение follow
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, //копируем стейт
                users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: false }// присваиваем значение follow
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, //копируем стейт
                users: [...state.users, ...action.users] // переназначаем для юзерз массив: копируем statе.users и склеиваем action.users
            }
        }
        default:
            return state
    }
}

export let followAC = (userId) => ({ type: FOLLOW, userId })
export let unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export let setUsersAC = (users) => ({ type: SET_USERS, users })

export default UsersReduser