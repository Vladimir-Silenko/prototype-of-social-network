import React from 'react'
import { AddPost } from '../../../redux/state';
import classes from './SendPost.module.css';
let SendPost = (props) => {
    const NewPostEl = React.createRef()
    const SendPost = () => {
        let text = NewPostEl.current.value
        props.AddPost(text)
    }
    return <div className={classes.sendPost}>
        <h3>My Posts</h3>
        <textarea ref={NewPostEl} placeholder='Enter your message'></textarea>
        <button onClick={SendPost}>{props.btn}</button>
    </div>

}
export default SendPost;