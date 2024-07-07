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
  const anecdotes = [
    'If it hurts, do it more often.',

    'Adding manpower to a late software project makes it later!',

    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',

    'Premature optimization is the root of all evil.',

    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',

    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',

    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  const handleRandom = () => {
    const numberRandom = Math.floor(Math.random() * anecdotes.length);
    setSelected(numberRandom);
  }

  const searchMaxValue = (arr) => {
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] >= arr[maxIndex])
        maxIndex = i
    }
    return maxIndex;
  }

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }
  const maxValue = searchMaxValue(points);

  return (
    <div className='container'>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} <br/> Has {points[selected]} votes </p>

      <Button handleCLick={handleRandom} title={'Next Anedcote'}/>
      <Button handleCLick={handleVote} title={'Vote'}/>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxValue]}</p>
    </div>
  )
}

export default App
