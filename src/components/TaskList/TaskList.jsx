import { Task } from '../Task/Task';
import css from './TaskList.module.scss';
import { useSelector } from 'react-redux';

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks.items);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};