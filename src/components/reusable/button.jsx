import styled from "styled-components";

export const Btn = styled.button`
outline: none;
margin-top: 10px;
margin-left: 5px;
height: 30px;
width: 100px;
border-radius: 5px;
font-size: 15px;
font-weight: 600;
color: #fff;
background: linear-gradient(0deg, rgba(2, 66, 143, 1) 87%, rgba(61, 115, 173, 1) 95%, rgba(118, 150, 228, 1) 100%);
&:hover{
    cursor:pointer;
}
&:active {
    opacity: 0.5;
}
`