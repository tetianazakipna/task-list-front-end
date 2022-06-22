import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  const flipTaskComplete = () => {
    props.completeCallback(props.id);
  };

  const flipTaskIncomplete = () => {
    props.incompleteCallback(props.id);
  };

  const deleteOneTask = () => {
    props.deleteCallback(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={props.isComplete ? flipTaskIncomplete : flipTaskComplete}
      >
        {props.title}
      </button>
      <p>{props.description}</p>
      <button className="tasks__item__remove button" onClick={deleteOneTask}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  completeCallback: PropTypes.func,
  incompleteCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
};

export default Task;
