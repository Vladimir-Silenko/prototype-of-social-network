import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';
import { stopSubmit } from "redux-form";
import { profileApi } from "../api/useApi";
import { AppStateType } from './redux-store';

const AddPost = 'AddPost';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const POST_IS_LIKED = 'POST_IS_LIKED'
const SAVE_PHOTO = 'SAVE_PHOTO'
const POST_IS_UPDATED = 'POST_IS_UPDATED'

type postType = {
    id: number
    post: string
    likes: number
    created: number
    isLiked: boolean
}
type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string | null
    large: string | null
}

type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos?: photosType


}

let initialState = {
    isUpdated: '' as string,
    newPostText: '' as string,
    profile: null as profileType | null,
    postData: [
        {
            id: 1,
            post: 'Hey! how are you?',
            likes: 24,
            created: new Date().getTime(),
            isLiked: false,
        },
        {
            id: 2,
            post: 'Fine',
            likes: 20,
            created: new Date().getTime(),
            isLiked: true,
        },
        {
            id: 3,
            post: 'When  will you  come back?',
            likes: 15,
            created: new Date().getTime(),
            isLiked: false,
        },
    ] as Array<postType>,
    status: ''
};
export type InitialstateType = typeof initialState
const ProfileReducer = (state = initialState, action: ActionsType): InitialstateType => {
    switch (action.type) {
        case AddPost: {
            let newPost = {
                id: 5,
                post: action.text,
                likes: 0,
                isLiked: false,
                created: new Date().getTime(),
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }


        }
        case DELETE_POST: {
            return {
                ...state,
                postData: [...state.postData.filter(item => item.id != action.postId)]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case POST_IS_LIKED: {
            return {
                ...state,
                postData: [...state.postData.map(item => {
                    if (item.id === action.item.id) {
                        item.isLiked = action.liked
                        item.likes = action.likesCount
                    }
                    return item
                })]

            }
        }
        case SAVE_PHOTO: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos } as profileType


            }
        }
        case POST_IS_UPDATED: {
            return {
                ...state,
                isUpdated: action.isUpdated,
            }
        }
        default:
            return state
    }
}

// ++++++++++++++++++++++ACTION CREATORS++++++++++++++++++++++


type ActionsType = addPostActionCreatorType | deletePostACType | setUserProfileACType |
    setStatusACType | postIsLikedACType | savePhotoACType | profileIsUpdatedACType

type addPostActionCreatorType = {
    type: typeof AddPost,
    text: string
}
export let addPostActionCreator = (text: string): addPostActionCreatorType => ({ type: AddPost, text });

type deletePostACType = {
    type: typeof DELETE_POST,
    postId: number
}
export let deletePostAC = (postId: any): deletePostACType => ({ type: DELETE_POST, postId })

type setUserProfileACType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
export let setUserProfileAC = (profile: profileType): setUserProfileACType => ({ type: SET_USER_PROFILE, profile })

type setStatusACType = {
    type: typeof SET_STATUS,
    status: string
}
export let setStatusAC = (status: string): setStatusACType => ({ type: SET_STATUS, status: status })

type postIsLikedACType = {
    type: typeof POST_IS_LIKED
    liked: boolean
    item: postType
    likesCount: number
}
export let postIsLikedAC = (liked: boolean, item: postType, likesCount: number): postIsLikedACType => ({ type: POST_IS_LIKED, liked, item, likesCount })

type savePhotoACType = {
    type: typeof SAVE_PHOTO,
    photos: photosType
}
export let savePhotoAC = (photos: photosType): savePhotoACType => ({ type: SAVE_PHOTO, photos })

type profileIsUpdatedACType = {
    type: typeof POST_IS_UPDATED,
    isUpdated: string
}
export const profileIsUpdatedAC = (isUpdated: string): profileIsUpdatedACType => ({ type: POST_IS_UPDATED, isUpdated })


//++++++++++++++++THUNKS+++++++++++++++++++

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const GetUserProfile = (params: number): ThunkType => async (dispatch) => {
    let response = await profileApi.GetProfile(params)

    dispatch(setUserProfileAC(response))

}
export const GetUserStatus = (params: number): ThunkType => async (dispatch) => {
    let response = await profileApi.getStatus(params)
    dispatch(setStatusAC(response.data))
}

export const UpdateUserStatus = (status: string): ThunkType => async (dispatch) => {

    try {
        const response = await profileApi.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
            console.log('works')
        }
    }
    catch (error: any) {
        alert(error.message)
    }


}
export const UpdateUserPhoto = (photo: any): ThunkType => async (dispatch) => {
    try {

        let response = await profileApi.savePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoAC(response.data.photo))
        }
    }
    catch (error: any) {
        alert(error.message)
    }


}
export const saveProfile = (profile: profileType): ThunkType => async (dispatch, getState: () => AppStateType) => {
    // const userId = getState().auth.userId

    try {
        let response = await profileApi.saveProfile(profile)

        if (response.data.resultCode !== 0) {
            // @ts-ignore
            dispatch(stopSubmit('profile', { _error: response.data.messages[0] }))
            return Promise.reject(response.data.messages[0])
        }
        else {
            dispatch(profileIsUpdatedAC('Profile successfully updated'))
        }
    }
    catch (error: any) {
        alert(error.message)
    }



}
export default ProfileReducer