import React from 'react'
import './style1.css'


function Button({handleClick}) {
  return (

    <div >

      <div className="bcontain">
      <button  value="AC" onClick={() => handleClick("AC")}>AC</button>
      <button value="DE" onClick={() => handleClick("DE")}>DE</button>
      <button value ="." onClick={() => handleClick(".")}>.</button>
      <button value ="/" onClick={() => handleClick("/")}>/</button>

      <button  value="7" onClick={() => handleClick("7")}>7</button>
      <button  value="8" onClick={() => handleClick("8")}>8</button>
      <button  value="9" onClick={() => handleClick("9")}>9</button>
      <button  value="*" onClick={() => handleClick("*")}>*</button>

      <button  value="4" onClick={() => handleClick("4")}>4</button>
      <button  value="5" onClick={() => handleClick("5")}>5</button>
      <button  value="6" onClick={() => handleClick("6")}>6</button>
      <button  value="+" onClick={() => handleClick("+")}>+</button>
      
      <button  value="1" onClick={() => handleClick("1")}>1</button>
      <button  value="2" onClick={() => handleClick("2")}>2</button>
      <button  value="3" onClick={() => handleClick("3")}>3</button>
      <button  value="-" onClick={() => handleClick("-")}>-</button>

      <button  value="00" onClick={() => handleClick("00")}>00</button>
      <button  value="0" onClick={() => handleClick("0")}>0</button>
      <button  className="box2" value="=" onClick={() => handleClick("=")}>=</button>
      </div>
      
    </div>

  )
}

export default Button