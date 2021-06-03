import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    correct,
    index,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
        </article>
        <div className="btn-conatiner">
          {answers.map((ans, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                onClick={() => checkAnswer(correct_answer === ans)}
                dangerouslySetInnerHTML={{ __html: ans }}
              />
            );
          })}
        </div>
        <button className="next-question" onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  );
}
export default App;
