// import { toggleIsFetchingAC } from './users-reducer';
import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"
import { UserApi } from "../api/useApi"
import { photosType } from "./profile-reducer"
import { AppStateType } from "./redux-store"
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

export type UserType = {
    name: string,
    id: number,
    photos: photosType,
    status: null | string,
    followed: boolean
}

export let initialstate = {
    users: [] as Array<UserType>,
    totalCount: 30,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    toggleFollowing: [] as Array<number>, // Array of users id
}
export type UsersInitialstateType = typeof initialstate

const UsersReduser = (state = initialstate, action: ActionsType): UsersInitialstateType => {
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
                users: action.users// переназначаем для юзерз массив: копируем statе.users и склеиваем action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                toggleFollowing: action.isFetching ? [...state.toggleFollowing, action.userId]
                    : state.toggleFollowing.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}


//types for actions in reducer
type ActionsType = followACType | unFollowACType | setUsersACType | setCurrentPageACType | setTotalCountACType
    | toggleIsFetchingACType | toggleIsFollowingACType

//Action Creators and their types
type followACType = {
    type: typeof FOLLOW,
    userId: number
}
export let followAC = (userId: number): followACType => ({ type: FOLLOW, userId })

type unFollowACType = {
    type: typeof UNFOLLOW,
    userId: number
}
export let unFollowAC = (userId: number): unFollowACType => ({ type: UNFOLLOW, userId })

type setUsersACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export let setUsersAC = (users: Array<UserType>): setUsersACType => ({ type: SET_USERS, users })

type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export let setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({ type: SET_CURRENT_PAGE, currentPage })

type setTotalCountACType = {
    type: typeof SET_TOTAL_COUNT,
    count: number
}
export let setTotalCountAC = (totalUsersCount: number): setTotalCountACType => ({ type: SET_TOTAL_COUNT, count: totalUsersCount })

type toggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export let toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingACType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type toggleIsFollowingACType = {
    type: typeof TOGGLE_IS_FOLLOWING,
    isFetching: boolean,
    userId: number
}
export let toggleIsFollowingAC = (isFetching: boolean, userId: number): toggleIsFollowingACType => ({ type: TOGGLE_IS_FOLLOWING, isFetching: isFetching, userId })
//THUNKS
//ThunkAction 1:argument to return, 2:State Type, 3:Action Types
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const GetUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingAC(true))

        let data = await UserApi.GetAllUsers(currentPage, pageSize)

        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))

    }
}

export let OnpageChanged = (pageNumber: number): ThunkType => {

    return async (dispatch) => {
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(toggleIsFetchingAC(true));
        let data = await UserApi.ChangeUserPage(pageNumber, initialstate.pageSize)
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));

    }
}
const _FollowUnfollow = async (dispatch: Dispatch<ActionsType>, userId: number, apiMethod: any, actionCreator: (userId: number) => followACType | unFollowACType) => {
    dispatch(toggleIsFollowingAC(true, userId))
    let data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingAC(false, userId))

}

export const Follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _FollowUnfollow(dispatch, userId, UserApi.FollowUser.bind(UserApi), followAC)
    }
}
export const UnFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _FollowUnfollow(dispatch, userId, UserApi.UnFollowUser.bind(UserApi), unFollowAC)
    }
}

export default UsersReduser