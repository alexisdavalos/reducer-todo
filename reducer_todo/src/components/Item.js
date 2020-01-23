import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';

const Item = props =>{
    return (
        <div className='ItemWrapper'>
            <div 
            className={`item${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleTask(props.task.id)}>
                {props.task.completed ? <div className='taskDone'><FaCheckCircle/><p>{props.task.task}</p></div> :  <div className='taskDone'><p>{props.task.task}</p></div> }
            </div>
            <button onClick={() => props.clearTask(props.task.id)}>Delete</button>
        </div>
    )
        
    
}

export default Item;