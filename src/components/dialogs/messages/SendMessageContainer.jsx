import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessageActionCreator, UpdateMessageTextActionCreator } from '../../../redux/dialogs-reducer'
import SendMessage from './SendMessage'
const SendMessageContainer = (props) => {
    let messageText = useSelector(state => state.messages.newMessageText)
    let dispatch = useDispatch()
    const Update = (text) => dispatch(UpdateMessageTextActionCreator(text))
    const Send = () => dispatch(sendMessageActionCreator())
    return < SendMessage
        Update={Update}
        Send={Send}
        newMessageText={messageText}
    />
}
export default SendMessageContainer