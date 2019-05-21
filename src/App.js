import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RangeNumberNoRepeatSort,BinarySearch,JsAsyncEvent,JsRegexCommon} from './arithmetic/common.js'

function App() {
  console.info(1111,RangeNumberNoRepeatSort());
  // console.info('JsRegexCommon',JsRegexCommon());
  // console.info(2222,BinarySearch([1,2,3,4,5,6],3,0,5));
  // console.info(2222,BinarySearch([1,2,3,4,5,6],3,0,5));
  // 浏览器渲染

  // 来至于谷友的一到面试题
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
  }).then(function() {
    console.log('promise2');
  });
console.log('script end');


//   setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
//   Promise.resolve().then(_ => {
//     console.log('before timeout')
//   }).then(_ => {
//     Promise.resolve().then(_ => {
//       console.log('also before timeout')
//     })
//   })
// })

// console.log(2)


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
