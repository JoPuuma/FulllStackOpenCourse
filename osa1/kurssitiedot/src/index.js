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
      {props.line.name + ' ' +props.line.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content line1 = {part1} line2 = {part2} line3 = {part3} />
      <Total  tot = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))