import React from 'react';
import Item from './Item';
import {Alert} from 'reactstrap'

const TodoList = (props) =>{
    
        console.log('Rendered Item List:', props.toDoList);
        return(
            <>
            <h2>Task list:</h2>
            <div className='ListWrapper'>
                {(props.toDoList.length === 0) ? 
                <Alert className='Alert'>Empty List! - Add New Items</Alert> : 
                props.toDoList.map(task => (
                   <Item key={task.id} task={task} clearTask={props.clearTask} toggleTask={props.toggleTask}/>
               )) }
               
            </div>
            </>
        )
    
}
export default TodoList;