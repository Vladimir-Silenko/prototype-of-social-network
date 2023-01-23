import DialogItem from './DialogItems/DialogItem'
import styles from './Dialogs.module.css'
import Messages from './messages/Messages';
import SendMessageContainer from './messages/SendMessageContainer';
import { useSelector } from 'react-redux';
import { useRedirect } from '../../hooks/useRedirect';
import { AppStateType } from '../../redux/redux-store';
import { DialogUserType, MessageType } from '../../redux/dialogs-reducer';


const Dialogs: React.FC<any> = ({ store }) => {
    const auth = useSelector<AppStateType>(state => state.auth.isAuth)
    const redirect = useRedirect()

    let dlgs: any = useSelector<AppStateType>(state => state.messages.dialogsData)
    let msgs: any = useSelector<AppStateType>(state => state.messages.messageData)
    let dialogs = dlgs.map((item: DialogUserType) => <DialogItem ava={item.ava} name={item.name} surname={item.surname} key={item.id} id={item.id} />);
    let messages = msgs.map((item: MessageType) => <Messages time={item.created} key={item.id} content={item.message} you={item.you} />)
    if (!auth) return redirect
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
                    store={store} />
            </div>

        </div>
    )
}

export default Dialogs