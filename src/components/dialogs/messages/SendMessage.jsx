import React from 'react'
import styles from './SendMessage.module.css'
const SendMessage = (props) => {
    const Update = (e) => {
        let text = e.target.value
        props.Update(text)
    }
    const Send = () => props.Send()
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