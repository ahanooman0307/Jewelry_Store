import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import React, {useState, useEffect} from 'react';

function App() {

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(count + 1)
  }

  const [count, setCount] = useState(() =>{
    return 0;
  })

  return (
    <>
    <Main></Main>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick ={incrementCount}>+</button>
    </>
  );
}

export default App;
