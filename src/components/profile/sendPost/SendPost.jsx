import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from './SendPost.module.css';
let SendPost = (props) => {
    const Send = (values) => {
        props.Send(values.newPostText)
        values.newPostText = ''
    }
    return <div className={classes.sendPost}>
        <h3>My Posts</h3>
        <AddPostFormRedux onSubmit={Send} />
    </div>

}
const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            component="textarea"
            name="newPostText"
            placeholder="type..." />
        <button>Send Post</button>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)
export default SendPost;