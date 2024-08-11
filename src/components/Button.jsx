import styled from "styled-components"
const Button=(props)=>
{
return(
    <Btn bg={props.bg} {...props} >{props.text}</Btn>

)
}
const Btn=styled.button`
background: ${(props) => (props.bg ? "black" : "white")};
color: ${(props) => (props.bg ? "white" : "black")};
border: 1px solid black;
    border-radius: 5px;
    width: 220px;
    height: 44px;
    font-weight:400;
    font-size:16px;
`;
export default Button

