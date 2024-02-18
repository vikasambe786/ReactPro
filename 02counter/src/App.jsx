import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let[counter,setCounter]=useState(27)
let[subcounter,setSubcounter]=useState(5)

    

    const addValue=()=>{
      counter=counter+1;
      if(counter<=35){
        setCounter(counter);
      }else{
        alert("Max limit Reached : ")
      }
      
        //instead of writing 2 line code you can also write setCounter(counter+1)

        //setCounter(counter+1);
      console.log("Click" , counter);
    }

    const subValue=()=>{
      subcounter=subcounter-1
      if(subcounter>0){
        setSubcounter(subcounter-1);
      }else{
        alert("Negative Value not alllowed")
      }               
      
    }

  return (

    <>

    <h1>Hello World</h1>
    <h1>Add Counter Value : {counter}</h1>
    <h1>Sub Counter Value : {subcounter}</h1>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={subValue}>Subtract Value {subcounter}</button>
    </>
   
  )
}

export default App
