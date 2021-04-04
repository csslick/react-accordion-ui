import { useState, useEffect } from 'react';
import data from './data';
import './App.css';
import Question from './components/Question';

function App() {
  const [questions, setQuestions] = useState([]);
  // console.log(questions)

  useEffect(() => {
    setQuestions(data);
  }, [])

  return (
    <section>
      <h2>홈페이지 Q&amp;A</h2>
      <dl className="question">
        {
          questions.map(q => {
            return <Question key={q.id} q={q} />
          })
        }
      </dl>
    </section>
  );
}

export default App;
