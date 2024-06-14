import React, { useState } from 'react';
import Task from '../Task';

const App = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: 'Task 1', completed: false }]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: `Ir al super ${tasks.length + 1}`,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }));
  };

  return (
    <div>
      <h1>Lista de Tarea</h1>
      <button onClick={addTask}>Agregar Tarea</button>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
};

export default App;
