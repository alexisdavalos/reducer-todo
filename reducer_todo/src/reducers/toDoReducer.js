export const initialState = [{
    task: 'Help',
    id: 9879879870987098,
    completed: false
  }]
  
  export const toDoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_NEW_TASK':
            return [...state, {
                task: action.payload,
                id: Date.now(),
                completed: false
            }];

        case 'TOGGLE_TASK':
          console.log('New Reducer Payload After Toggle:',action.payload)
          const toggledList = state.map(item =>{ //maps through reducer state
            if(item.id === action.payload){ //if an id on the list matches the id passed in as payload spreads in the item key value pairs and toggles the completed value
              return{
                ...item,
                completed: !item.completed
              };
            }else{
              return item;
            }
          })
            return toggledList;

        case 'CLEAR_COMPLETE':
            //payload is filtered array from state
            const newToDoList = state.filter(item => !item.completed)
            return newToDoList;
        
        case 'EMPTY_LIST':
            return state = [];

        case 'CLEAR_TASK':
            const clearedTaskList = state.filter(item => item.id !== action.payload)
            return clearedTaskList;

      default:
        return state;
    }
  };
  