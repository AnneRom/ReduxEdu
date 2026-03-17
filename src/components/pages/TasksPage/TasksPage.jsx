import AppBar from "../../AppBar/AppBar";
import TaskForm from "../../TaskForm/TaskForm";
import TaskList from "../../TaskList/TaskList";

const TasksPage = () => {
    return (
        <div>
            <h1>Tasks Page</h1>
             <AppBar />
             <TaskForm />
             <TaskList />
        </div>
    );
};

export default TasksPage;