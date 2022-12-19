import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators'
import { Textarea } from '../../reusable/Textarea';
import { Btn } from '../../reusable/button';
let SendPost = (props) => {
    const Send = (values) => {
        props.Send(values.newPostText)
        values.newPostText = ''
    }
    return <div>
        <h3 style={{ marginLeft: '18px' }}>My Posts</h3>
        <AddPostFormRedux onSubmit={Send} />
    </div>

}
const AddPostForm = (props) => {
    return <form style={{ marginLeft: '16px' }} onSubmit={props.handleSubmit}>
        <Field
            validate={required}
            component={Textarea}
            name="newPostText"
            placeholder="type..." />
        <Btn>Send Post</Btn>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)
export default SendPost;