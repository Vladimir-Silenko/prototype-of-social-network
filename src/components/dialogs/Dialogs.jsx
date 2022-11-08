import DialogItem from './DialogItems/DialogItem'
import styles from './Dialogs.module.css'
import Messages from './messages/Messages';
import SendMessageContainer from './messages/SendMessageContainer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const Dialogs = (props) => {
    const auth = useSelector(state => state.auth.isAuth)
    let dlgs = useSelector(state => state.messages.dialogsData)
    let msgs = useSelector(state => state.messages.messageData)
    let dialogs = dlgs.map(item => <DialogItem ava={item.ava} name={item.name} surname={item.surname} key={item.id} />);
    let messages = msgs.map(item => <Messages key={item.id} content={item.message} you={item.you} />)
    if (!auth) return <Navigate to='../login' />
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                {dialogs}
            </div>
            <div className={styles.message_container}>
                <div className={styles.messageContent_container}>
                    {messages}
                </div>
                <SendMessageContainer
                    store={props.store} />
            </div>

        </div>
    )
}

export default Dialogs