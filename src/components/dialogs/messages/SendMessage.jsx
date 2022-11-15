import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../reusable/Textarea'
import styles from './SendMessage.module.css'

const SendMessage = (props) => {
    const Send = (values) => props.Send(values.newMessageText)
    return <div className={styles.sendMessage}>
        <AddMessageFormRedux onSubmit={Send} />
    </div>
}
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            component={Textarea}
            placeholder='Type...'
            name="newMessageText" />
        <button >Send</button>
    </form>
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default SendMessage