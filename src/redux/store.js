import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
	    items: [
	    { id: 0, text: "Learn HTML and CSS", completed: true },
	    { id: 1, text: "Get good at JavaScript", completed: true },
	    { id: 2, text: "Master React", completed: false },
	    { id: 3, text: "Discover Redux", completed: false },
	    { id: 4, text: "Build amazing apps", completed: false },
	  ],
    },
    filters: {
        status: "all",
  },
};



const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,  
      }
    
    default:
    return state;
  }
  


}

const rootReducer = (state = initialState, action) => {
}

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    }
});