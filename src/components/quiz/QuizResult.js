import classes from './QuizResult.module.css';

const QuizResult = ({ totalScore, maxQuestions, quizName }) => {
  const scorePercent = (totalScore / maxQuestions) * 100;

  const result =
    scorePercent > 80 ? (
      <p className={classes.passed}>PASSED</p>
    ) : (
      <p className={classes.failed}>FAILED</p>
    );

  return (
    <>
      <h2>You have complated</h2>
      <h2 className={classes.completion}>{quizName}</h2>
      <div className={classes.result}>
        <h1>Your score: {scorePercent}%</h1>
        {result}
      </div>
    </>
  );
};

export default QuizResult;
