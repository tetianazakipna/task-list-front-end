import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm.js';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  const fetchTasks = () => {
    axios
      .get(URL)
      .then((result) => {
        const newTasks = result.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            isComplete: task.is_complete,
          };
        });
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(fetchTasks, []);

  const markComplete = (id) => {
    axios
      .patch(`${URL}/${id}/mark_complete`)
      .then(() => {
        const newTasks = tasks.map((task) => ({ ...task }));
        for (let task of newTasks) {
          if (task.id === id) {
            if (!task.isComplete) task.isComplete = !task.isComplete;
          }
        }
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const markIncomplete = (id) => {
    axios
      .patch(`${URL}/${id}/mark_incomplete`)
      .then(() => {
        const newTasks = tasks.map((task) => ({ ...task }));
        for (let task of newTasks) {
          if (task.id === id) {
            if (task.isComplete) task.isComplete = !task.isComplete;
          }
        }
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = [];
        for (let task of tasks) {
          const newTask = { ...task };
          if (newTask.id !== id) {
            newTasks.push(newTask);
          }
        }
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTask = (taskInfo) =>{
    axios.post(URL, taskInfo)
      .then((response) => {
        console.log(response);
        fetchTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            completeCallback={markComplete}
            incompleteCallback={markIncomplete}
            deleteCallback={deleteTask}
          />
          <TaskForm
            addTask={addTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
