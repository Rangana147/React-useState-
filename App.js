
import './App.css';
import {useState} from "react";

function App() {
  const[number,setNumber] = useState(1);
  function increment(){
    //things to do
    console.log('clicked');
    setNumber(number+1);
  }
  function decrement(){
    setNumber(number-1);
  }
  function multiply(){
    setNumber(number*2); 
  }
  return (
    <>
   
    <button onClick={increment}> + </button>
    
    <span>{number}+20</span>
    <button onClick={decrement}> - </button>
    <button onClick={multiply}> x2 </button>
    
    </>
  );
}

export default App;
