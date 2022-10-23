import React from 'react'
import styles from './SendMessage.module.css'
const SendMessage = (props) => {
    // debugger
    const SendMessageContent = React.createRef()
    const Update = () => {
        let text = SendMessageContent.current.value
        props.dispatch({ type: 'UpdateMessageText', newText: text })
    }
    const Send = () => props.dispatch({ type: 'AddMessage' })
    return <div className={styles.sendMessage}>
        <textarea
            placeholder='Type...'
            onChange={Update}
            ref={SendMessageContent}
            value={props.newMessageText}
            name="" id="" cols="30" rows="10"></textarea>
        <button onClick={Send} >Send</button>
    </div>
}
export default SendMessage