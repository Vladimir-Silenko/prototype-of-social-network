import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from './SendPost.module.css';
import { required, MaxLength, } from '../../../utils/validators'
import { Textarea } from '../../reusable/Textarea';
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
const MaxLength10 = MaxLength(10)
const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            validate={[required, MaxLength10]}
            component={Textarea}
            name="newPostText"
            placeholder="type..." />
        <button>Send Post</button>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)
export default SendPost;