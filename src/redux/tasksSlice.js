const initialState = {
    tasks: {
	    items: [
	    { id: 0, text: "Learn HTML and CSS", completed: true },
	    { id: 1, text: "Get good at JavaScript", completed: true },
	    { id: 2, text: "Master React", completed: false },
	    { id: 3, text: "Discover Redux", completed: false },
	    { id: 4, text: "Build amazing apps", completed: false },
	  ],
    }
};

export default function tasksReducer (state = initialState.tasks, action) {
  switch (action.type) {
    case 'tasks/addTask':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'tasks/deleteTask':
      return {
        ...state,
        items: state.items.filter(task => task.id !== action.payload)
      }
    case 'tasks/toggleTask':
      return {
        ...state,
          items: state.items.map(task => {
            if (task.id === action.payload) {
              return {
                ...task,
              completed: !task.completed,
            };
          }
          return task;
       
        })
    }
    default:
    return state;
  }
}