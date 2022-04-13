import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h1>Quiz Programing</h1>
        <p>What programing for build cross-platform app</p>
        <button onClick={()=>props.onQuiz('react')}>React</button>
        <button onClick={()=>props.onQuiz('pyton')}>Phyton</button>
        <button onClick={()=>props.onQuiz('golang')}>Golang</button>
        <h2>{props.yourAnswer}</h2>
    </div>
  )
}
