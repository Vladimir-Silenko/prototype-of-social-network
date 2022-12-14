import { UserApi } from "../api/useApi"
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'
let initialstate = {
    users: [],
    totalCount: 30,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    toggleFollowing: [],
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
                users: action.users // переназначаем для юзерз массив: копируем statе.users и склеиваем action.users
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
                    : state.toggleFollowing.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export let followAC = (userId) => ({ type: FOLLOW, userId })
export let unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export let setUsersAC = (users) => ({ type: SET_USERS, users })
export let setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export let setTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, count: totalUsersCount })
export let toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export let toggleIsFollowingAC = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching: isFetching, userId })

export const GetUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingAC(true))

        let data = await UserApi.GetAllUsers(currentPage, pageSize)

        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))

    }
}

export let OnpageChanged = (pageNumber) => {

    return async (dispatch) => {
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(toggleIsFetchingAC(true));
        let data = await UserApi.ChangeUserPage(pageNumber, initialstate.pageSize)
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));

    }
}
const FollowUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingAC(true, userId))
    let data = await apiMethod(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingAC(false, userId))

}

export const Follow = (userId) => {
    return async (dispatch) => {
        FollowUnfollow(dispatch, userId, UserApi.FollowUser.bind(UserApi), followAC)
    }
}
export const UnFollow = (userId) => {
    return async (dispatch) => {
        FollowUnfollow(dispatch, userId, UserApi.UnFollowUser.bind(UserApi), unFollowAC)
    }
}

export default UsersReduser