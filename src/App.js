import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RangeNumberNoRepeatSort,BinarySearch} from './arithmetic/common.js'

function App() {
  console.info(1111,RangeNumberNoRepeatSort());
  console.info(2222,BinarySearch([1,2,3,4,5,6],3,0,5));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
