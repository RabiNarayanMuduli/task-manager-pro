// Import configureStore which is the standard way to create a Redux store
import { configureStore } from '@reduxjs/toolkit'
// Import the reducers (state managers) from each of our feature slices
import authReducer from '../features/auth/authSlice'
import tasksReducer from '../features/tasks/tasksSlice'
import filterReducer from '../features/filter/filterSlice'

// Create and export the global Redux store
export const store = configureStore({
    // The 'reducer' object defines how the state is organized.
    // Each key becomes a slice of the global state (e.g., state.auth, state.tasks)
    reducer: {
        // The 'auth' key uses the authReducer to manage login data
        auth: authReducer,
        // The 'tasks' key uses the tasksReducer to manage the list of tasks
        tasks: tasksReducer,
        // The 'filter' key uses the filterReducer to manage search/filter criteria
        filter: filterReducer
    }
})
