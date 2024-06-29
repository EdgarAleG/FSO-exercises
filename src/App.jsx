import { useState } from 'react'
import './App.css'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const History = ({allClicks}) => {
  if(allClicks.length == 0) {
    return (
      <div>This is used for count the clicks</div>
    )
  }

  return (
    <p>Total Clicks: {allClicks.join(' ')}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleCLick} className='button'>
      {props.title}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const totalClicks = left + 1
    setLeft(totalClicks)
    setTotal(totalClicks + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const totalClicks = right + 1
    setRight(totalClicks)
    setTotal(totalClicks + left)
  }

  const handleZero = () => {
    setRight(0)
    setLeft(0)
    setAll( [] )
  }

  
  return (
    <div className='container'>

      <p>{left}</p>
      <Button handleCLick={ handleLeftClick } title={'Left'}/>

      <Button handleCLick={ handleRightClick } title={'Right'}/>
      <p>{right}</p>
      <button onClick={ handleZero }>set to zero</button>

      <p>Total de clicks: {total}</p>

      <History allClicks={allClicks}/>
    </div>
  )
}

export default App
