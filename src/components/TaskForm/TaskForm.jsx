import { Button } from '../Button/Button';
import css from './TaskForm.module.scss';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

export const TaskForm = () => {
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask({
      id: Date.now(),
      text: form.elements.text.value,
      completed: false,
    }))
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />

      <select className={css.prioritySelect} 
      name="priority" 
      value={priority}
      onChange={(event) => setPriority(event.target.value)}> 
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <Button type="submit">Add task</Button>
    </form>
  );
};

