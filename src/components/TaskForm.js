import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = (props) => {
    const defaultTask ={
        title:'',
        description:'',
        isComplete: false
    };
    const [formData, setformData] = useState(defaultTask);

    const onFormChange = (event) =>{
        const stateName = event.target.name;
        const inputValue = event.target.value;

        const newFormData = {...formData};
        newFormData[stateName] = inputValue;

        setformData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTask(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={onFormChange}
            ></input>
            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                name="description"
                value={formData.description}
                onChange={onFormChange}
                ></input>
            <input type="submit" value="Add task"></input>
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func,
};

export default TaskForm;