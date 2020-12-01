import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  const [doubleNum, setDoubleNum] = useState(0);

  useEffect(() => {
    console.log("use effect triggered");
    setDoubleNum(number * 2)
  }, [number])

  const handleIncrement = () => {
    setNumber(number + 1);
    // setDoubleNum(number * 2);
  }

  const handleDecrement = () => {
    setNumber(number - 1);
    // setDoubleNum(number * 2);
  }

  return (
    <div>
      <button value={number} onClick={handleIncrement}> + </button>
      <button value={number} onClick={handleDecrement}> - </button>
      <h2>Number is {number}</h2>
      <h2>Double num is: {doubleNum}</h2>
    </div>
  );
}

export default App;
