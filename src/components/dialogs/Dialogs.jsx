import DialogItem from './DialogItems/DialogItem'
import styles from './Dialogs.module.css'
import Messages from './messages/Messages';
import SendMessage from './messages/SendMessage';

const Dialogs = (props) => {
    // debugger
    let dialogs = props.dialogsData.map(item => <DialogItem ava={item.ava} name={item.name} surname={item.surname} key={item.id} />);
    let messages = props.messageData.map(item => <Messages id={item.id} content={item.message} you={item.you} />)
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                {dialogs}
            </div>
            <div className={styles.message_container}>
                <div className={styles.messageContent_container}>
                    {messages}
                </div>
                <SendMessage
                    UpdateMessageText={props.UpdateMessageText}
                    newMessageText={props.newMessageText}
                    AddMessage={props.AddMessage} />
            </div>

        </div>
    )
}

export default Dialogs