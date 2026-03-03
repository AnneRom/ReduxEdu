import { MdClose } from 'react-icons/md';
import css from './Task.module.scss';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../redux/operations';
import clsx from 'clsx';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(updateTask({
      id: task.id, 
      updates: { completed: !task.completed }
    }))
  };
  const handlePriorityChange = (newPriority) => {
    dispatch(updateTask({
      id: task.id, 
      updates: { priority: newPriority }
    }))
  }
  return (
    <div className={clsx(css.wrapper, task.priority === "high" && css.highPriority, task.priority === "medium" && css.mediumPriority, task.priority === "low" && css.lowPriority)}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <div className={css.priorityIndicator}>
        <button onClick={() => handlePriorityChange("high")} className={clsx(css.priorityButton, task.priority === "high" && css.active)}>High</button>
        <button onClick={() => handlePriorityChange("medium")} className={clsx(css.priorityButton, task.priority === "medium" && css.active)}>Medium</button>
        <button onClick={() => handlePriorityChange("low")} className={clsx(css.priorityButton, task.priority === "low" && css.active)}>Low</button>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
      {console.log("task.text:", task.text, typeof task.text)}
    </div>
  );
};
