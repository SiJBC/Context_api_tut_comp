import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import MathsContext from './MathsContext';
import Child from './Child';

function App() {
  const [total, setTotal] = useState(0)
  const MathsContextObject = {
    addition: function(){
      setTotal(total + 1)
    },
    subtraction: function(){
      if(total > 0){
        setTotal(total - 1)
      }
    },
  }
  return (
    <div className="App">
        <h1>
          Total
          <br>
          </br>
          {total}
        </h1>
        <MathsContext.Provider 
        value={MathsContextObject}>
          <Child />
        </MathsContext.Provider>
    </div>
  );
}

export default App;
