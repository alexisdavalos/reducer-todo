import React, {useState} from 'react'
import { Form, InputGroup, InputGroupAddon} from 'reactstrap';

const TodoForm = (props) =>{
    const [task, setTaskName] = useState({
        taskName:'',
        valid:true
    })
    //set state for task name

    const handleChanges = e => {
        //update state with each keystroke on input
        setTaskName({
            taskName: e.target.value,
            valid:true
        })
        console.log('New Task Name:', e.target.value);
    }

    //handles form submission

    const handleSubmit = e => {
        //prevent submit default
        e.preventDefault();
        //validates form - cannot be empty
        if (task.taskName === ''){ 
            setTaskName({
                ...task, //spread the state in
                valid:false //set valid to false - toggles form error/alert
            })
        }else{
            props.addToList(task.taskName);
            setTaskName('')
            console.log('Submitting Form... \n Value:', task.taskName)
        }
    }

   
        return(
            <>
            <Form style={{width:'50%', marginTop:'1%'}} onSubmit={handleSubmit}>
                <InputGroup>
                    <input
                    className='Input'
                    type='text' 
                    name='itme' 
                    onChange={handleChanges}
                    value={task.taskName}
                    placeholder='To Do.....'
                    />
                    <InputGroupAddon className='GroupButton' addonType='append'>
                        <button>Add</button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
            {(task.valid) ? <div></div> : <div className='Error'><p>Oh noes! This Field Cannot Be Empty!</p></div>}
            <button style={{marginRight:'1%', marginTop:'1%'}} onClick={() => props.clearComplete()}>Clear Completed</button>
            <button style={{marginRight:'1%', marginTop:'1%'}} onClick={() => props.emptyList()}>Empty List</button>
            </>

        );

}

export default TodoForm;