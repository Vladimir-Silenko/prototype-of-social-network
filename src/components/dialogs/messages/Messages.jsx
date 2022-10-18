import styles from './Messages.module.css'
const Messages = (props) => {
    let classNames = require('classnames')
    return (
        <div className={props.you === 'you' ? classNames(styles.message, styles.mrgn) : styles.message}>
            <p>{props.content}</p>
        </div>
    )

}
export default Messages
