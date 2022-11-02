import React from 'react'
import classes from './SendPost.module.css';
let SendPost = (props) => {
    const onPostChange = (e) => {
        let text = e.target.value
        props.Change(text)
    }
    return <div className={classes.sendPost}>
        <h3>My Posts</h3>
        <textarea
            onChange={onPostChange}
            value={props.newPostText}
            placeholder="type..." />
        <button onClick={() => props.Send()}>Send Post</button>
    </div>

}
export default SendPost;