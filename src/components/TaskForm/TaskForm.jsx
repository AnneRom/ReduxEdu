import { Button } from '../Button/Button';
import css from './TaskForm.module.scss';
import { useDispatch } from 'react-redux';
// import { addTask } from '../../redux/tasksSlice';
import { addTask } from '../../redux/operations';
import { useState } from 'react';

export const TaskForm = () => {
  const [priority, setPriority] = useState("low");//локальний стан
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask({//викликаємо екшен і відправляємо дані на стор(змінюючи глобальний стан)
      id: Date.now(),
      text: text,
      completed: false,
      priority: priority,
    }))
    setText("");
    setPriority("low");
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
        value={text}
        onChange={(event) => setText(event.target.value)}
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

