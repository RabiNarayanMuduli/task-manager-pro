import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'all' // 'all' | 'active' | 'completed'
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
