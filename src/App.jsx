import { useState } from 'react'
import './App.css'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='button'>
      {props.title}
    </button>
  )
}

const App = () => {
  const [ counter , setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () =>{
    console.log('increasing, value before', counter)
     setCounter(counter + 1)
  }
  const reset = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  const decrementByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  
  return (
    <div className='container'>

      <Display counter={counter} />

      <Button title="+" onClick={increaseByOne} />

      <Button title="-" onClick={decrementByOne}/>

      <Button title="reset" onClick={reset}/>
    </div>
  )
}

export default App
