import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import RollDice from './components/RollDice'
function App() {
  const [isSelected, setSelected] = useState(false);
  const toggle = () => {
    setSelected((prev) => !prev)

  }
  return (
    <>
      {isSelected ? <RollDice /> : <StartGame toggle={toggle} />}
    </>
  )
}

export default App
