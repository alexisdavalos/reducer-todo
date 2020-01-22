import React, {useState, useReducer} from 'react';
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import './App.css';

function App () {
  const [toDoList, setToDo] = useState([{
    task: 'Help',
    id: 9879879870987098,
    completed: false
  }]);
  console.log('ToDoList', toDoList)
 
  // adds new task to the todo list object
  const addToList = taskName => {
    const newTask ={
      task: taskName,
      id: Date.now(),
      completed: false
    };
    setToDo([...toDoList, newTask]) //spreads in current state of data and adds new task to the end
    
  }

  //toggles task completion
  const toggleTask = id =>{

    const newToDoList = toDoList.map(item =>{ //maps through toDoList
      console.log('After Toggling Task:', item.completed)
      if(item.id === id){ //if an id on the list matches the id of the item clicked
        //spreads in the item key value pairs and toggles the completed value
        return{
          ...item,
          completed: !item.completed
        };
      }else{
        return item;
      }
    });
    setToDo(newToDoList)
  }
  //clears list of completed tasks
  const clearComplete = () =>{
    console.log('clearing list..', toDoList)
    const newToDoList = toDoList.filter(item => !item.completed)
    console.log('setting list to state:', newToDoList);
    setToDo({
      toDoList: newToDoList
    })
  }
  //empty the entire list
  const emptyList = () =>{
    setToDo([])
  }

  const clearTask = id =>{
    console.log('clearing out task id:', id)
    const newToDoList = toDoList.filter(item => item.id !== id)
    setToDo(newToDoList);
    
  }
    console.log('To Do List State:',toDoList);
    return (
      <div className='wrapper'>
        <section>
        <div><h1>Add New Tasks</h1></div>
        <TodoForm emptyList ={emptyList} clearComplete={clearComplete} addToList={addToList} toDoList={toDoList}/>
        </section>
        <section className='listSection'>
          <TodoList clearTask={clearTask} toggleTask={toggleTask} toDoList={toDoList}/>
        </section>
      </div>
    );
}

export default App;
