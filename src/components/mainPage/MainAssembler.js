import { DUMMY_QUIZ } from 'helpers/DUMMY_QUIZ';

import classes from './MainAssembler.module.css';
import QuizBox from './QuizBox';

const MainAssembler = () => {
  const quizes = DUMMY_QUIZ.map((quiz) => (
    <QuizBox key={quiz.id} id={quiz.id} name={quiz.name} />
  ));

  return (
    <div className={classes.mainContainer}>
      <div className={classes.quizesContainer}>{quizes}</div>
    </div>
  );
};

export default MainAssembler;
