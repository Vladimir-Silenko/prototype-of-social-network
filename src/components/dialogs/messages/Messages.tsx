
import styled from 'styled-components'
import dayjs from 'dayjs'

type YouProp = {
    you: boolean
}

const Message = styled.div<YouProp>`
display: flex;
flex-direction: column;
padding: 10px;
margin-left:${props => props.you ? '250px' : '10px'} ;
height: 100px;
width: 200px;
background-color: rgb(229, 229, 229);
border-radius: 10px;
`
type Props = {
    content: string
    time: number
    you: boolean
}

const Messages: React.FC<Props> = ({ content, time, you }) => {
    return (
        <Message you={you}>
            <p>{content}</p>
            <span>{dayjs(time).format('D.MMM HH:mm')}</span>
        </Message>
    )
}
export default Messages
