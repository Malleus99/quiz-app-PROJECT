import classes from './CurrentQuestion.module.css';

const CurrentQuestion = ({
  maxQuestions,
  questionIndex,
  currentQuestion,
  currentAnswer,
  submitted,
  onSelection,
  onAnswerSubmit,
  onNextQuestion,
}) => {
  const submitBtnClasses = `${classes.submitBtn} ${
    currentAnswer && classes.btnActive
  }`;
  const nextBtnClasses = `${classes.nextBtn} ${submitted && classes.btnActive}`;

  return (
    <>
      <h2>{currentQuestion.question} </h2>
      <div className={classes.currentPage}>
        {questionIndex + 1} / {maxQuestions}
      </div>
      <div className={classes.answers}>
        <div className={classes.answer} onClick={onSelection}>
          <p>a&#41;</p> <span>{currentQuestion.answers[0]}</span>
        </div>
        <div className={classes.answer} onClick={onSelection}>
          <p>b&#41;</p> <span>{currentQuestion.answers[1]}</span>
        </div>
        <div className={classes.answer} onClick={onSelection}>
          <p>c&#41;</p> <span>{currentQuestion.answers[2]}</span>
        </div>
        <div className={classes.answer} onClick={onSelection}>
          <p>d&#41;</p> <span>{currentQuestion.answers[3]}</span>
        </div>
      </div>
      {submitted && (
        <div className={classes.solutionContainer}>
          <p>Solution: {currentQuestion.solution}</p>
          <p className={classes.rightAnswer}>
            Right Answer: {currentQuestion.rightAnswer}
          </p>
        </div>
      )}
      <div className={submitBtnClasses} onClick={onAnswerSubmit}>
        SUBMIT
      </div>
      <div className={nextBtnClasses} onClick={onNextQuestion}>
        NEXT
      </div>
    </>
  );
};

export default CurrentQuestion;
