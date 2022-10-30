import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, UpdatePostTextActionCreator } from '../../../redux/profile-reducer';
import SendPost from './SendPost';
const SendPostContainer = (props) => {
    // debugger
    const dispatch = useDispatch()
    const newPostText = useSelector(state => state.profile.newPostText)
    const Send = () => dispatch(addPostActionCreator())
    const onPostChange = (text) => {
        dispatch(UpdatePostTextActionCreator(text))
    }
    return (
        (<SendPost
            newPostText={newPostText}
            Send={Send}
            Change={onPostChange}
        />)
    )
}
export default SendPostContainer;