import styled from "styled-components"
import Button from "../components/Button.jsx"
import { useState } from "react"

const RollDice=({selectedNumber,setScore,setSelectedNumber,setError,setGuidelines})=>
{
    const [currentDice,setCurrentDice]=useState(1);

    const generateRandomNumber=(min,max)=>
    {
        return Math.floor(Math.random()*  (max - min + 1) + min);
    }

    const rollDice=()=>
    {
        if(!selectedNumber) {
            console.log("error");
            setError("You have not selected any number");
            return 
        }
        setError("");
        const randomNumber=generateRandomNumber(1,6);
     console.log(randomNumber)
        setCurrentDice(randomNumber);
        if(randomNumber === selectedNumber)
        {
            setScore((prev)=>prev+randomNumber);
            console.log("matched");
        }
        else{
            setScore((prev)=>prev-2);
            console.log("not matched");
        }
        setSelectedNumber(undefined);
    }

    return(
        <>
        <Dice >
            <div onClick={rollDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on Dice to Roll</p>
            <Button text="Reset Score" bg={false} onClick={()=>{setScore(0)}
            }></Button>
            <Button text="Show Rules" bg={true} onClick={()=>{setGuidelines((prev)=>!prev)}}></Button>
        </Dice>
        
        </>
    )
}
const Dice=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:450px;
width:250px;

img
{
width:250px;
height:250px;}

p
{
text-align:center;
font-size:22px;
font-weight:500;
}

Button
{
margin-top:24px
}

`
export default RollDice