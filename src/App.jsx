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

const StatisticLine = ({title, data}) => {

  return (
    <tr>
      <th>{title}</th>
      <td>{data}</td>
    </tr>
  )
}

const Statistics = ({good = 0, neutral = 0, bad = 0}) => {
  const total = good + neutral + bad;
  const average = (total > 0) ? (good - bad) / total : 0;
  const positive = (total) ? good / total : 0;

  if(total == 0)
    return <h4>No feedback given</h4>


  return (
    <>
      <table className='table'>
          <thead></thead>
          <tbody>

            <StatisticLine 
              title={"Good"}
              data={good}
            />

            <StatisticLine 
              title={"Neutral"}
              data={neutral}
            />

            <StatisticLine 
              title={"Bad"}
              data={bad}
            />

            <StatisticLine 
              title={"Total"}
              data={total}
            />

            <StatisticLine 
              title={"Average"}
              data={(average >= 0) ? average : 0}
            />

            <StatisticLine 
              title={"Positive"}
              data={positive}
            />

          </tbody>
        </table>
        
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGood = () => {
    const value1 = good + 1
    setGood(value1)
  }

  const handleNeutral = () => {
    const value1 = neutral + 1
    setNeutral(value1)
  }

  const handleBad = () => {
    const value1 = bad + 1
    setBad(value1)
  }

  return (
    <div className='container'>
      <h1>Give Feedback</h1>
      <Button handleCLick={ () => handleGood() } title={'Good'}/>
      <Button handleCLick={ () => handleNeutral() } title={'Neutral'}/>
      <Button handleCLick={ () => handleBad() } title={'Bad'}/>

      <h2>Statics</h2>

      <Statistics
        good={good}
        neutral={neutral} 
        bad={bad}
      />
      
    </div>
  )
}

export default App
