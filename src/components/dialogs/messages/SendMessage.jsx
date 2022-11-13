import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './SendMessage.module.css'

// const Update = (e) => {
//     let text = e.target.value
//     props.Update(text)
// }
const works = (values) => {
    alert(values.newMessageText)
}
const SendMessage = (props) => {
    const Send = (values) => props.Send(values.newMessageText)
    return <div className={styles.sendMessage}>
        <AddMessageFormRedux onSubmit={Send} />
    </div>
}
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            component='textarea'
            placeholder='Type...'
            // onChange={Update}
            name="newMessageText" />
        <button >Send</button>
    </form>
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default SendMessage