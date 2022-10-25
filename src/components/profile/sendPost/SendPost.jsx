import React from 'react'
import { addPostActionCreator, UpdatePostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './SendPost.module.css';
let SendPost = (props) => {
    // debugger


    const NewPostEl = React.createRef()
    const SendPost = () => props.dispatch(addPostActionCreator())
    const onPostChange = () => {
        let text = NewPostEl.current.value
        props.dispatch(UpdatePostTextActionCreator(text))
    }
    return <div className={classes.sendPost}>
        <h3>My Posts</h3>
        <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={NewPostEl}
            placeholder="type..." />
        <button onClick={SendPost}>{props.btn}</button>
    </div>

}
export default SendPost;