import { useState } from "react";
import './toDoList.css'

interface TodoListFace {
    task: string;
}
// two interfaces to hanlde both the existing tasks and the new tasks being added
interface NewTask {
    newTask: string;
}

const TodoList = () => {
    const [tasks, setTasks] = useState<TodoListFace[]>([]);
    const [newTask, setNewTask] = useState<NewTask>({
        newTask: ''
    });
    // function to add a new task to list
    const addTask = () => {
        //  checks if the new task is not an empty string
        if (newTask.newTask.trim() !== '') {
            // updating the 'task' stat with new task
            setTasks([...tasks, { task: newTask.newTask }]);
            // clearing the inpt field by updating "newTask state"
            setNewTask({ newTask: '' });
        }
    };

    // function to remove a task from the list
    const removeTask = (index: number) => {
        // creates copy of the 'tasks' array
        const updatedTasks = [...tasks];
        // remving the task at the specified index
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list-container">
            <div className="title">To Do List</div>
            <div className="input-container">
                <input
                    type="text"
                    value={newTask.newTask}
                    onChange={(event) => setNewTask({ newTask: event.target.value })}
                />
                <button  className="add-task-button" onClick={addTask}>Add Task</button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <div key={index} className="task-container">
                        <div className="task-text">{task.task}</div>
                        <button className="remove-button" onClick={() => removeTask(index)}>
                            Mark Completed
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
