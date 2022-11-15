import { profileApi } from "../api/useApi";

const AddPost = 'AddPost';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
    newPostText: '',
    profile: null,
    postData: [
        { id: 1, post: 'Hey! how are you?', likes: 24, },
        { id: 2, post: 'I am learning react.js', likes: 20, },
        { id: 3, post: 'miss my girlfriend so much!', likes: 15, },
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
        default:
            return state
    }
}

export let addPostActionCreator = (text) => ({ type: AddPost, text });
// export let UpdatePostTextActionCreator = (text) => ({
//     type: UpdatePostText,
//     newText: text
// });
export let setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile })
export let setStatusAC = (status) => ({ type: SET_STATUS, status: status })

export const GetUserProfile = (params) => {
    return (dispatch) => {
        profileApi.GetProfile(params).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}
export const GetUserStatus = (params) => {
    return (dispatch) => {
        profileApi.getStatus(params).then(data => {
            dispatch(setStatusAC(data.data))

        })
    }
}
export const UpdateUserStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}
export default ProfileReducer