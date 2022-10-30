const AddPost = 'AddPost';
const UpdatePostText = 'UpdatePostText';

let initialState = {
    newPostText: '',
    postData: [
        { id: 1, post: 'Hey! how are you?', likes: 24, },
        { id: 2, post: 'I am learning react.js', likes: 20, },
        { id: 3, post: 'miss my girlfriend so much!', likes: 15, },
    ],
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPost: {
            let newPostText = state.newPostText
            return {
                ...state,
                postData: [...state.postData, { id: 5, post: newPostText, likes: 0, }],
                newPostText: ''
            }


        }
        case UpdatePostText: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export let addPostActionCreator = () => ({ type: AddPost });
export let UpdatePostTextActionCreator = (text) => ({
    type: UpdatePostText,
    newText: text
});
export default ProfileReducer