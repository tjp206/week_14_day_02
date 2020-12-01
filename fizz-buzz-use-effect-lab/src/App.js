import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(1);
  const [fizzNum, setFizzNum] = useState("");

  useEffect(() => {
    if (number % 3 === 0 && number % 5 === 0) {
      setFizzNum("FizzBuzz");
    }
    else if (number % 3 === 0) {
      setFizzNum("Fizz");
    }
    else if (number % 5 === 0) {
      setFizzNum("Buzz");
    }
    else {
      setFizzNum(number);
    };
  }, [number])

  const handleIncrement = () => {
    setNumber(number + 1);
    // setFizzNum(number + 1);
  }

  return (
    <div>
      <button value={number} onClick={handleIncrement}> + </button>
      <h2>Number is: {number}</h2>
      <h2>Checking for FizzBuzz: {fizzNum}</h2>
    </div>
  );
}

export default App;
