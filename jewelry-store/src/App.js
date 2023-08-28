import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import React, {useState, useEffect} from 'react';
import Home from './components/Home';
// import Search from './components/Search';
import Shop from './components/Shop';

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

  const numberArray = [2,3,4,5,35]
  const DoubleArray = numberArray.map(numberItem =>{
    return(
      <div>{numberItem *2}</div>
    )
  })
  // console.log(DoubleArray)

  return (
    <>
            <Routes>
              <Route path = '/' element = {<Main />} />
              <Route path = '/shop' element = {<Shop />} />


            </Routes>

    {/* <Main></Main>
    {numberArray.map(numberItem =>{
    return(
      <div>{numberItem *5}</div>
    )
  })} */}
    {/* <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick ={incrementCount}>+</button> */}

    </>
  );
}

export default App;
