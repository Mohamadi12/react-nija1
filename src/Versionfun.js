import React, { useState } from 'react'
const countInitial=()=>{
    console.log('run function');
    return 4;
}
const Versionfun = () => {
    // Cette façon de faire nous donne à chaque click 'run function' dans le console

    // const[count,setCount]=useState(()=>{
    //     console.log('run function');
    //     return 4;
    // });




    // Declarons et passons une fonction. C'est la même loqique s'est que cette fois le 'run function' sera de façon aligné

//     const [count, setCount]=useState(countInitial());




// Cette façons ne necessite pas trop de 'run function'

    const [count, setCount]=useState(()=>countInitial());
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

export default Versionfun
