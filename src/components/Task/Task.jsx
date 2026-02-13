import { MdClose } from 'react-icons/md';
import css from './Task.module.scss';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/tasksSlice';
import clsx from 'clsx';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };
  return (
    <div className={clsx(css.wrapper, task.priority === "high" && css.highPriority, task.priority === "medium" && css.mediumPriority, task.priority === "low" && css.lowPriority)}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
