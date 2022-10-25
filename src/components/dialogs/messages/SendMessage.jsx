import React from 'react'
import { sendMessageActionCreator, UpdateMessageTextActionCreator } from '../../../redux/dialogs-reducer'
import styles from './SendMessage.module.css'
const SendMessage = (props) => {
    // debugger
    const Update = (e) => {
        let text = e.target.value
        props.dispatch(UpdateMessageTextActionCreator(text))
    }
    const Send = () => props.dispatch(sendMessageActionCreator())
    return <div className={styles.sendMessage}>
        <textarea
            placeholder='Type...'
            onChange={Update}
            value={props.newMessageText}
            name="" id="" cols="30" rows="10"></textarea>
        <button onClick={Send} >Send</button>
    </div>
}
export default SendMessage