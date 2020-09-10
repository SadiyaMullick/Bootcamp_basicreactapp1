import React from 'react';
import './new.css'

//import logo from './logo.svg';
//import './App.css';

/*function Room(props) {
  return (
  <div>its my room {props.name} {props.number*3}</div>
  );
}*/
/*function Room({name,number}){
    return(
    <div>passing variables by name {name} {number*5}</div>
    )
}*/
const Room=({name,number})=>(
<div className="bcolor">Cleaner the code {name} {number+8}</div>
)

export default Room;