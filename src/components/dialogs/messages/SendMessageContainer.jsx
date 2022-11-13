import React from 'react'
import { useDispatch } from 'react-redux'
import { sendMessageActionCreator } from '../../../redux/dialogs-reducer'
import SendMessage from './SendMessage'
const SendMessageContainer = (props) => {
    let dispatch = useDispatch()
    const Send = (newMessageText) => dispatch(sendMessageActionCreator(newMessageText))
    return < SendMessage Send={Send} />
}
export default SendMessageContainer