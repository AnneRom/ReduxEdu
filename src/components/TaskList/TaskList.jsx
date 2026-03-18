import { Task } from '../Task/Task';
import css from './TaskList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/tasks/operations';
import { selectIsLoading, selectError, selectVisibleTasks } from '../../redux/tasks/tasksSlice';

export const TaskList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleTasks = useSelector(selectVisibleTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && visibleTasks.length === 0 && <p>No tasks yet.</p>}

      <ul className={css.list}>
        {visibleTasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
    
  );
};

export default TaskList;