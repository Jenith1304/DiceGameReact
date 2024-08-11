import { useState } from 'react';
import styled from 'styled-components'
import RollDice from './RollDice';
import Guidelines from "./Guidelines.jsx";
const ScoreTotal = () => {
    const boxValue = [1, 2, 3, 4, 5, 6];
    const [selectNumber,setSelectedNumber]=useState();
    const [score,setScore]=useState(0);
    const [error,setError]=useState("");
    const [guidelines,setGuidelines]=useState(false);

    return (
        <>
        <Header>

            <div className='score'>
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
            <div className='numSelect'>
                <p>{error}</p>
            <div className='box'>
                {
                    
                    boxValue.map((curValue, index) => (

                        <Box 
                        isSelected={curValue === selectNumber}
                        key={index}
                        onClick={()=>setSelectedNumber(curValue)}
                        >{curValue}</Box>
                    ))
                }
                
            </div>
            <br />
             <div style={{textAlign:"right"}}>
                    <h1>Select Number</h1>
            </div>
            </div>
        </Header>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <RollDice selectedNumber={selectNumber} setScore={setScore} setSelectedNumber={setSelectedNumber} setError={setError} setGuidelines={setGuidelines}/>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"25px"}}>
        {guidelines ? <Guidelines /> : "" }
        </div>
    </>
    )
}
const Header = styled.div`
max-width:1280px;
// height:150px;
// border:1px solid red;
margin:0 auto;
display:flex;
align-items:center;

.score
{
// border:1px solid black;
display:flex;
flex-direction:column;
width:20%;
padding:6.5px 0 6.5px 0;
}
.score h1
{
text-align:center;
font-size:100px;
font-weight:500;
}
.score p
{
text-align:center;
font-weight:500;
font-size:24px;
}
.box
{
display:flex;
// flex-direction:column;
gap:24px;
justify-content:end;
// width:100%;
// border:3px solid red;
align-items:center;
}
.numSelect
{
width:100%;
float:right;
}
.numSelect p
{
text-align:right;
margin-bottom:15px;
margin-top:15px;
font-size:24px;
color:red;}
}
`;
const Box = styled.div`
cursor:pointer;
width:72px;
height:72px;
border:2px solid black;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
font-size:24px;
font-weight:500;
gap:24px;
background: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};

}}

h1
{
font-size:24px;
font-weight:600;
}`;
export default ScoreTotal