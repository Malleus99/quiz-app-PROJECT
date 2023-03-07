import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { DUMMY_QUIZ } from 'helpers/DUMMY_QUIZ';
import classes from './Quiz.module.css';
import CurrentQuestion from './CurrentQuestion';
import QuizResult from './QuizResult';

const Quiz = () => {
  const { quizId } = useParams();
  const [quiz] = DUMMY_QUIZ.filter((quiz) => quiz.id === quizId);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [totalScore, setTotalScore] = useState(0);

  const maxQuestions = quiz.questions.length;

  const currentQuestion = quiz.questions[questionIndex];

  const quizName = quiz.name;

  const selectionHandler = (event) => {
    if (submitted) return;
    console.dir(event.target);
    const answer = event.target.querySelector('span').textContent;
    setCurrentAnswer(answer);
  };

  const answerSubmitHandler = () => {
    if (submitted) return;
    setSubmitted(true);
    if (currentAnswer === currentQuestion.rightAnswer) {
      setTotalScore(totalScore + 1);
    }
  };

  const nextQuestionHandler = () => {
    if (!submitted) return;
    setCurrentAnswer(null);
    setSubmitted(false);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className={classes.quizContainer}>
      {questionIndex < maxQuestions && (
        <CurrentQuestion
          maxQuestions={maxQuestions}
          questionIndex={questionIndex}
          currentQuestion={currentQuestion}
          currentAnswer={currentAnswer}
          submitted={submitted}
          onSelection={selectionHandler}
          onAnswerSubmit={answerSubmitHandler}
          onNextQuestion={nextQuestionHandler}
        />
      )}
      {questionIndex === maxQuestions && (
        <QuizResult
          totalScore={totalScore}
          maxQuestions={maxQuestions}
          quizName={quizName}
        />
      )}
    </div>
  );
};

export default Quiz;
