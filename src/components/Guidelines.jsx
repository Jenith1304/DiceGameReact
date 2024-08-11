import styled from "styled-components"
const Guidelines=()=>
{
return(
    <Rules>
        <h1>How to play dice game</h1>
        <p>1.Select any number</p>
        <p>2.Click on dice image</p>
        <p>3.after click on  dice  if selected number is equal to dice number you will get same point as 
        <br/>dice 
if you get wrong guess then  2 point will be dedcuted </p>
    </Rules>
)
}
const Rules=styled.div`
width:795px;
height:210px;
background:#FBF1F1;
display:flex;
flex-direction:column;
// align-items:center;  
justify-content:center;
padding-left:25px;

h1
{
margin-bottom:25px;}

`;
export default Guidelines;