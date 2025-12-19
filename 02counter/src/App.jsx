import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15; 
  let  [Counter, setCounter] = useState(16);

  let addValue = ()=>{
    if (Counter<20) {
      Counter = Counter+1     
    }
    setCounter(Counter)                                           
    console.log("add value" , Counter);
  }
  
  let removeValue= () => {
    if (Counter > 0) {
      Counter = Counter - 1;
    }
    setCounter(Counter)
  }
  return (
    <>
      <h1>Add value{Counter}</h1>
      <h2>Counter value: {Counter}</h2>
  
      <button
      onClick={addValue}
      >Add value {Counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {Counter}</button>
    </>
  )
}

export default App
