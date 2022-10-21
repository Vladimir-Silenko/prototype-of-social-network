import React from 'react'
// import { AddMessage, UpdateMessageText } from '../../../redux/state'
import styles from './SendMessage.module.css'
const SendMessage = (props) => {
    // debugger
    const SendMessageContent = React.createRef()
    const Update = () => {
        let text = SendMessageContent.current.value
        props.UpdateMessageText(text)
    }
    const Send = () => props.AddMessage()
    return <div className={styles.sendMessage}>
        <textarea
            onChange={Update}
            ref={SendMessageContent}
            value={props.newMessageText}
            name="" id="" cols="30" rows="10"></textarea>
        <button onClick={Send} >Send</button>
    </div>
}
export default SendMessage