import { Link } from 'react-router-dom';
import classes from './QuizBox.module.css';

const QuizBox = ({ id, name }) => {
  return (
    <Link to={id} key={id} className={classes.quizes}>
      {name}
    </Link>
  );
};

export default QuizBox;
