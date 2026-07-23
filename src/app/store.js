import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tasksReducer from '../features/tasks/tasksSlice'
import filterReducer from '../features/filter/filterSlice'

// 3 slices this time, so each one MUST get a label (unlike Hitesh's
// single-slice shortcut). Every useSelector will read state.auth.*,
// state.tasks.*, or state.filter.* — the label is required now.
export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
        filter: filterReducer
    }
})
