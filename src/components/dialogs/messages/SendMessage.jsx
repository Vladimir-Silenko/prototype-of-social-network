import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { Btn } from '../../reusable/button'
import { Textarea } from '../../reusable/Textarea'
const SendMessageSection = styled.div`
width: 95%;
height: 100px;
background-color: #fff;
display: flex;
flex-direction: column;
padding: 10px;
border-top:1px solid lightgrey;
border-bottom-left-radius:20px;
`
const SendMessage = (props) => {
    const Send = (values) => props.Send(values.newMessageText)
    return <SendMessageSection>
        <AddMessageFormRedux onSubmit={Send} />
    </SendMessageSection>
}
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            component={Textarea}
            placeholder='Type...'
            name="newMessageText" />
        <Btn>Send</Btn>
    </form>
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default SendMessage