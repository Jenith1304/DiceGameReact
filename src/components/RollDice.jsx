import styled from 'styled-components'
const RollDice = () => {
    const boxValue = [1, 2, 3, 4, 5, 6];
    return (
        <Header>
            <div className='score'>
                <h1>0</h1>
                <p>Total Score</p>
            </div>
            <div className='box'>
                {
                    boxValue.map((curValue, index) => (

                        <Box key={index}>{curValue}</Box>
                    ))
                }
                <br />
                <div>
                    <h1>Select Number</h1>
                </div>
            </div>
        </Header>
    )
}
const Header = styled.div`
max-width:1280px;
heigth:150px;
border:1px solid red;
margin:0 auto;
display:flex;
align-items:center;

.score
{
border:1px solid black;
displat:flex;
flex-direction:column;
width:135px;
padding:6.5px 0 6.5px 0;
}
.score h1
{
text-align:center;
font-size:100px
}
.score p
{
font-size:24px
}
.box
{
display:flex;
gap:24px;
border:3px solid red;
align-items:center;
}
`;
const Box = styled.div`
width:72px;
height:72px;
border:2px solid black;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
font-size:24px;
font-weight:500
gap:24px;

h1
{
font-size:24px;
font-weight:600;
}`;
export default RollDice