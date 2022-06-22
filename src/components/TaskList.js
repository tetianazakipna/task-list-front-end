import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const getTaskListJSX = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        isComplete={task.isComplete}
        completeCallback={props.completeCallback}
        incompleteCallback={props.incompleteCallback}
        deleteCallback={props.deleteCallback}
      />
    );
  });
  return <ul className="tasks__list no-bullet">{getTaskListJSX}</ul>;
};

TaskList.propTypes = {
  completeCallback: PropTypes.func,
  incompleteCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

// TaskList.propTypes = {
//   tasks: PropTypes.array.isRequired,
// };

export default TaskList;
