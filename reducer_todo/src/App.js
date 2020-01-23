import React, {useState, useReducer} from 'react';
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import './App.css';

//reducers
import {initialState, toDoReducer} from './reducers/toDoReducer';

function App () {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  console.log('Reducer State:', state)

  // adds new task to the todo list object
  const addToList = taskName => {
    dispatch({type: 'ADD_NEW_TASK', payload: taskName}) //dispatches type and sends new task as payload 
  }

  //toggles task completion
  const toggleTask = id =>{
    dispatch({type: 'TOGGLE_TASK', payload: id});
  }
  //clears list of completed tasks
  const clearComplete = () =>{
    dispatch({type: 'CLEAR_COMPLETE'});
  }
  //empty the entire list
  const emptyList = () =>{
    dispatch({type:'EMPTY_LIST'})
  }

  const clearTask = id =>{ 
    dispatch({type: 'CLEAR_TASK', payload: id})   
  }

    return (
      <div className='wrapper'>
        <section>
        <div><h1>Reducer To Do App</h1></div>
        <TodoForm emptyList ={emptyList} clearComplete={clearComplete} addToList={addToList} toDoList={state}/>
        </section>
        <section className='listSection'>
          <TodoList clearTask={clearTask} toggleTask={toggleTask} toDoList={state}/>
        </section>
      </div>
    );
}

export default App;
