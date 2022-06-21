import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  const flipTaskComplete = () => {
    props.completeCallback(props.id);
  };

  const deleteOneTask = () => {
    props.deleteCallback(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={flipTaskComplete}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={deleteOneTask}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  completeCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
};

export default Task;
