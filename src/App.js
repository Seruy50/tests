import React, {useState} from 'react'
import style from './App.css'

let questionsList = [
  {
    id: 1,
    question: 'Провідне місто Волинської області',
    answer: 'Горохів'
  },
  {
    id: 2,
    question: 'Важливий торгово-ремісничий населений пункт для історії Волині',
    answer: 'Володимир'
  },
  {
    id: 3,
    question: 'Столиця це?',
    answer: 'іменник'
  },
  {
    id: 4,
    question: 'Питань більше немає',
    answer: 'іменник'
  }
]
  let i = 1;

export default function App(){
  
  const [value, setValue] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(
    questionsList.filter(item => {
      if(+item.id === i){
        return item;
      }
    })
  )
  const [points, setPoints] = useState(0);
  const [answ, setAnsw] = useState('')
  const [dis, setDis] = useState(false);

  const buttonPress = () => {
    if(value === currentQuestion[0].answer){
      setAnsw(true);
    } else {
      setAnsw(false);
    }
    setDis(true);
  }

  const nextQuestion = () => {
    if(i > 2){
      setCurrentQuestion('Thats all questions for today')
    }
    i++;
    setValue('');
    setCurrentQuestion(
      questionsList.filter(item => {
        if(+item.id === i){
          console.log(item.id)
          return item;
      }
    }))
    if(value === currentQuestion[0].answer){
      setPoints(points + 1)
    }
    setAnsw('');
    setDis(false);
  }

  return <div className="container">
    <div className="questionField">
      <p className="question">{currentQuestion[0].question}</p>
    </div>
    <div className="answerAndPointsField">
      <input value={value} onChange={(e) => setValue(e.target.value)} className="answerField" />
      <button onClick={buttonPress} disabled={dis}>Collect answer</button>
      <span className={answ === '' ? 'answerResume' : (answ ? 'answerResume right' :'answerResume wrong')}></span> 
      <span className="points">{points}</span> 
    </div>
    <button onClick={nextQuestion} disabled={i > 3 ? true : false}>Next question</button>
  </div>
}
