import React from 'react'
import styles from './SendMessage.module.css'
const SendMessage = () => {
    const SendMessageContent = React.createRef()
    const Send = () => alert(SendMessageContent.current.value)
    return <div className={styles.sendMessage}>
        <textarea ref={SendMessageContent} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={Send} >Send</button>
    </div>
}
export default SendMessage