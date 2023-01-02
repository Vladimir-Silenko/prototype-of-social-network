import { act } from "react-test-renderer";
import { stopSubmit } from "redux-form";
import { profileApi } from "../api/useApi";

const AddPost = 'AddPost';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const POST_IS_LIKED = 'POST_IS_LIKED'
const SAVE_PHOTO = 'SAVE_PHOTO'
let initialState = {
    newPostText: '',
    profile: null,
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
            isLiked: true,
        },
    ],
    status: ''
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPost: {
            let newPostText = action.text
            return {
                ...state,
                postData: [...state.postData, { id: 5, post: newPostText, likes: 0, }],
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
                    if (item.id == action.itemId) {
                        item.isLiked = action.liked
                        item.likes = action.likesCount
                    }
                    return item
                })]

            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                photos: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state
    }
}

export let addPostActionCreator = (text) => ({ type: AddPost, text });
export let deletePostAC = (postId) => ({ type: DELETE_POST, postId })
export let setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile })
export let setStatusAC = (status) => ({ type: SET_STATUS, status: status })
export let postIsLikedAC = (liked, itemId, likesCount) => ({ type: POST_IS_LIKED, liked, itemId, likesCount })
export let savePhotoAC = (photos) => ({ type: SAVE_PHOTO, photos })

export const GetUserProfile = (params) => async (dispatch) => {
    let response = await profileApi.GetProfile(params)

    dispatch(setUserProfileAC(response))

}
export const GetUserStatus = (params) => async (dispatch) => {
    let response = await profileApi.getStatus(params)
    dispatch(setStatusAC(response.data))
}

export const UpdateUserStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }


}
export const UpdateUserPhoto = (photo) => async (dispatch) => {
    let response = await profileApi.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.photo))
    }


}
export const saveProfile = (profile) => async (dispatch, getState) => {
    // const userId = getState().auth.userId
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode != 0) {
        dispatch(stopSubmit('profile', { _error: response.data.messages[0] }))
    }


}
export default ProfileReducer