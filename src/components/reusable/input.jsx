import styled from "styled-components"
const Inp = styled.input`
margin: 10px;
padding:5px;
border-radius: 5px;
outline: none;
border:${meta => meta.touched && meta.error ? '1px solid red' : '1px solid darkblue'};
`
export const Input = ({ meta, input, ...props }) => {
    // debugger
    return <div>
        <Inp {...props} {...input} {...meta} />
    </div>
}
