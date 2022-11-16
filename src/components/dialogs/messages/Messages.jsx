
import styled from 'styled-components'

const Message = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
margin-left:${props => props.you === 'you' ? '250px' : '10px'} ;
height: 100px;
width: 200px;
background-color: rgb(229, 229, 229);
border-radius: 10px;
`
const Messages = (props) => {
    let classNames = require('classnames')
    return (
        <Message {...props}>
            <p>{props.content}</p>
        </Message>
    )
}
export default Messages
