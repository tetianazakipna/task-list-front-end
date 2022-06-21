import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);


  const markComplete = (id) => {
    const newTasks = tasks.map((task) => ({...task}));
    for (let task of newTasks) {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
    }
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [];
    for (let task of tasks) {
      const newTask = {...task};
      if (newTask.id !== id) {
        newTasks.push(newTask);
      }
    }
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} 
                    completeCallback={markComplete} 
                    deleteCallback={deleteTask}/>
        </div>
      </main>
    </div>
  );
};

export default App;
