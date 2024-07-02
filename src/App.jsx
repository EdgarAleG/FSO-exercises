import { useState } from 'react'
import './App.css'

const Display = (props) => <div>{props.counter}</div>


const Button = (props) => {
  return (
    <button onClick={props.handleCLick} className='button'>
      {props.title}
    </button>
  )
}

const App = () => {
  const [value, setValue] = useState(0)

  
  return (
    <div className='container'>

      <Display counter={value}/>
      <Button handleCLick={ () => setValue(1000)} title={'thousand'}/>
      <Button handleCLick={ () => setValue(0)} title={'reset'}/>
      <Button handleCLick={ () => setValue(value + 1)} title={'increase'}/>
    </div>
  )
}

export default App
