import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part line = {props.line1}/>
      <Part line = {props.line2}/>
      <Part line = {props.line3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
         Number of exercises {props.tot}
      </p>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.line}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content line1 ={part1 +' '+exercises1} line2 ={part2 +' '+ exercises2} line3 = {part3 +' '+ exercises3} />
      <Total  tot = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))