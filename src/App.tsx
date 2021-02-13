import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Greed from '../src/TestType'

function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('Mike')

  const onClick = (name : string) => {
    console.log(`${name} say hello`)
  }
  
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Greed onClick={onClick} name={name} age={count}></Greed>
     {count}
     <button onClick={increment} >증가!</button>
     
    </div>
  );
}

export default App;
