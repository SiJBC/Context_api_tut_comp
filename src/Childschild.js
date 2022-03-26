import React, {useContext} from 'react'
import MathsContext from './MathsContext'

function Childschild() {
    const mathsContext = 
    useContext(MathsContext)
  return (
    <button onClick={mathsContext.subtraction}>Subtraction</button>
  )
}

export default Childschild