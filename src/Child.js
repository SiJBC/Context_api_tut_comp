import React, {useContext} from 'react'
import Childschild from './Childschild'
import MathsContext from './MathsContext'
// nested child component

function Child() {
    const mathsContext = 
    useContext(MathsContext)
    console.log(mathsContext)
  return (
    <div>Child
        <br></br>
        <button 
        onClick={mathsContext.addition}> Addition</button>
        <br></br>
        <Childschild />
    </div>
  )
}

export default Child