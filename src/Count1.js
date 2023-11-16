import React, { useState } from 'react'

const Count1 = () => {
    const[count,setCount]= useState(0);
    // Avec une multiplication,le compteur est tjrs à 1 donc il est conseillé d'utiliser prevCount qui est l'ideal pour resoudre ça
    const decrementCount=()=>{
      setCount(count-1);
    }
    const incrementCount=()=>{
      setCount(prevCount=>prevCount+1);
      setCount(prevCount=>prevCount+1);
      setCount(prevCount=>prevCount+1);
    }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{ count }</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Count1
