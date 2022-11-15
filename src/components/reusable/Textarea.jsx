import styled from "styled-components";

const Txt = styled.textarea`
    resize:none;
    margin: 5px;
    padding:5px;
    border-radius: 5px;
    outline: none;
    border:1px solid darkblue;
`


export const Textarea = ({ input, meta, ...props }) => {
    // debugger
    return <div>
        <Txt {...props} {...input} {...meta} />
    </div>
}