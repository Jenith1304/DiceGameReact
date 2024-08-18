
import styled from 'styled-components'
const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src={`${import.meta.env.BASE_URL}images/dices 1.png`} alt="Dice image" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <button onClick={toggle}>Play Now</button>
            </div>
        </Container>
    )
}
const Container = styled.div`
max-width:1180px;
height:100vh;
display:flex;
margin:0 auto;
align-items:center;

.content h1
{
white-space:nowrap;
font-size:96px 
}
.content button
{
background:black;
color:white;
border:transparent;
align-items:center;
width:220px;
height:44px;
font-size:16px;
transition:0.4s all ease;
float:right;
}
.content button:hover
{
background:transparent;
color:black;
border:1px solid black;
transition:0.3s all ease;
}
`;
export default StartGame