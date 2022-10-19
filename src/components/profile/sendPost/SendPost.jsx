import React from 'react'
import classes from './SendPost.module.css';
let SendPost = (props) => {
    // debugger
    const NewPostEl = React.createRef()
    const SendPost = () => {
        props.AddPost()
    }
    const onPostChange = () => {
        let text = NewPostEl.current.value
        props.UpdatePostText(text)
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