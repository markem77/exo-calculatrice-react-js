import React from 'react'
import { useState } from 'react'
import './components/style1.css'
import Input from './components/Input'
import Button from './components/Button'


function App() {

  const [input, setInput] = useState('');

  const handleClick = (value) => {
    console.log("button clicked :", value)
    if (value === 'AC') {
      setInput(''); 
    }else if (value === 'DE'){
      setInput((prevInput) => prevInput.slice(0, -1))
    }else if (value === '='){
      calculResult()
    }else {
      setInput((prevInput) => prevInput + value);
    }
  };


  const calculResult = () => {
    try{
      const result = eval(input)
      setInput(result.toString())
    }catch (error){
      setInput('Erreur')
    }
  }

  return (
    <div className="App">
      <div className="but-box">
         <Input value={input}/>
         <Button handleClick={handleClick}/>
      </div>
      
    </div>
  )
}

export default App