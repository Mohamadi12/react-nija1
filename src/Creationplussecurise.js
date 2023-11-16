import React, { useState } from 'react'

const Creationplussecurise = () => {
    const[count,setCount]=useState(2)
    const[theme,setTheme]=useState('red')

    const decrementCount=()=>{
        setCount(prevCount=>prevCount -1)
        setTheme('blue')
    }
    const incrementCount=()=>{
        setCount(prevCount=>prevCount+1)
        setTheme('red')
    }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{ count }</span>
      <span>{ theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Creationplussecurise
