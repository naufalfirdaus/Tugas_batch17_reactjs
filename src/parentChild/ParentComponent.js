import React, {useState} from 'react'
import ChildComponent from './ChildComponent'
export default function ParentComponent() {
    const [Answer, setAnswer] = useState("")
    const setQuiz = (quiz) =>{
        if (quiz === 'react') {
            setAnswer(`Your Answer ${quiz} is true`)
        }
        else{
            setAnswer( `Your Answer ${quiz} is false`)
        }
    }
  return (
    <div>
        <ChildComponent
        yourAnswer = {Answer}
        onQuiz = {setQuiz}
        />
    </div>
  )
}
