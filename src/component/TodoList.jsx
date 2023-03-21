import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: true },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
    { id: 4, text: "Task 4", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  //  changes to the new task input field
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleCompleteTask = (taskId) => {
    // Map over the tasks array
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  //adding a new task to the list
  const handleAddTask = () => {
    // Generating a new ID for the new task
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    // Create a new task object
    const newTaskObject = { id: newId, text: newTask, completed: false };
    // Update the tasks state by adding the new task to the end of the array
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  // Handle removing completed tasks from the list
  const handleRemoveCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };
  // Renders the TodoList component
  return (
    <div className="todoList">
      <h1>To do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="inputButton">
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={handleRemoveCompletedTasks}>
          Remove Completed Tasks
        </button>
      </div>
    </div>
  );
}

export default TodoList;
