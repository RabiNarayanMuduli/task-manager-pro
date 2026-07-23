import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

// createAsyncThunk = "call the supplier" (an API), then dispatch normal
// actions automatically once the delivery (data) arrives.
// First argument 'tasks/fetchTasks' is just a label, used internally.
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
        const data = await response.json()
        // Reshape the API's fields into the shape our app actually uses
        return data.map((item) => ({
            id: item.id.toString(),
            text: item.title,
            completed: item.completed
        }))
    }
)

const initialState = {
    items: [],
    status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        removeTask: (state, action) => {
            state.items = state.items.filter((task) => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            const task = state.items.find((task) => task.id === action.payload)
            if (task) task.completed = !task.completed
        }
    },
    // extraReducers listens for actions this slice didn't create itself —
    // here, the 3 lifecycle actions that createAsyncThunk auto-generates.
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { addTask, removeTask, toggleTask } = tasksSlice.actions
export default tasksSlice.reducer
