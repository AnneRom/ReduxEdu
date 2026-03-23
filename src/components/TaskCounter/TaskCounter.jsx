import { selectTasksCount } from '../../redux/tasks/tasksSlice';
import css from './TaskCounter.module.scss';
import { useSelector } from 'react-redux';


export const TaskCounter = () => {
  const count = useSelector(selectTasksCount);
  
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};