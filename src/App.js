import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RangeNumberNoRepeatSort,BinarySearch,JsAsyncEvent} from './arithmetic/common.js'

function App() {
  console.info(1111,RangeNumberNoRepeatSort());
  // console.info('JsAsyncEvent',JsAsyncEvent());
  // console.info(2222,BinarySearch([1,2,3,4,5,6],3,0,5));
  // console.info(2222,BinarySearch([1,2,3,4,5,6],3,0,5));

  setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

//   setTimeout(function(){
//     console.log('1')
// });

// new Promise(function(resolve){
//     console.log('2');
//                 resolve();
// }).then(function(){
//     console.log('3')
// });

// console.log('4');

// function Person() {
//   this.test = function() {
//       alert("Person");
//   }
// }

// function Dog() {
//   this.test = function() {
//       alert("Dog");
//   }
// }

// var v = new Person();
// alert(v.constructor);

// v = new Dog();
// alert(v.constructor);




// console.log('1');

// setTimeout(()=>{
//   console.info('2')
// },0)

// setImmediate(()=>{
//   console.info('3');
// })

// new Promise(function(resolve) {
//   console.log('4');
//   resolve();
//   }).then(function() {
//   console.log('5')
//   })

//   new Promise(function(resolve) {
//     console.log('6');
//     resolve();
//     }).then(function() {
//     console.log('7')
//     })
 


// process.nextTick(function() {
//   console.log('8');})

 

// process.nextTick(function() {
//   console.log('9');})

//   process.nextTick(()=>{
//     console.info('10')
//   }
//     )

// console.info('11');

// new Promise(function(resolve) {
// console.log('7');
// resolve();
// }).then(function() {
// console.log('8')
// })

// //加入两个nextTick的回调函数
// process.nextTick(function () {
//   console.log('1');
// });
// process.nextTick(function () { 
//   console.log('2');
// });
// // 加入两个setImmediate()的回调函数
// setImmediate(function () {
//   console.log('3'); 
//   // 进入下次循环 
//   process.nextTick(function () {
//       console.log('4');
//   });
// });
// setImmediate(function () {
//   console.log('5'); 
// });

// console.log('6');


// setImmediate((/* 回调1 */) => {
//   console.log('setImmediate1')
//   setImmediate(() => {
//       console.log('setImmediate2')
//   })
//   process.nextTick(() => {
//       console.log('nextTick')
//   })
// })
// setImmediate((/* 回调2 */) => {
//   console.log('setImmediate3')
// })



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
