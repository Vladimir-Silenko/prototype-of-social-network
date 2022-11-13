import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import SendPost from './SendPost';
const SendPostContainer = (props) => {

    const dispatch = useDispatch()
    const newPostText = useSelector(state => state.profile.newPostText)
    const Send = (text) => dispatch(addPostActionCreator(text))
    return (
        (<SendPost Send={Send} />)
    )
}
export default SendPostContainer;