import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Room from './Room';

function App() {
  return (
    <div>
         Yes it is calling room <Room name="TV lounge" number={10}/>
    </div>
  );
}

export default App;
