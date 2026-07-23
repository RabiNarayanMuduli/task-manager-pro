// Import createSlice which helps us easily create Redux state, actions, and reducers all at once
import { createSlice } from '@reduxjs/toolkit'

// Read from the browser's localStorage when the app first loads.
// This ensures that if the user refreshes the page, they don't lose their logged-in session.
const savedUser = localStorage.getItem('user')

// Define the starting state for our authentication slice
const initialState = {
    // If we found a saved user, parse the JSON string back into an object. Otherwise, set it to null.
    user: savedUser ? JSON.parse(savedUser) : null,
    // isLoggedIn is true if savedUser exists, otherwise false (the !! converts a truthy/falsy value to a strict boolean)
    isLoggedIn: !!savedUser
}

// Create the slice
export const authSlice = createSlice({
    // The name of this slice (used internally by Redux)
    name: 'auth',
    // Pass in the initialState we defined above
    initialState,
    // Reducers are functions that define how the state can be changed
    reducers: {
        // The login action: takes the current state and an action (which contains the user data in action.payload)
        login: (state, action) => {
            // Update the state with the new user data
            state.user = action.payload
            // Mark the user as logged in
            state.isLoggedIn = true
            // Save the user data to localStorage so it persists across page refreshes
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        // The logout action: takes the current state (no payload needed)
        logout: (state) => {
            // Clear the user data from state
            state.user = null
            // Mark the user as logged out
            state.isLoggedIn = false
            // Remove the user data from localStorage
            localStorage.removeItem('user')
        }
    }
})

// Export the automatically generated action creators (login, logout) so our components can dispatch them
export const { login, logout } = authSlice.actions
// Export the reducer function so we can add it to the global store in store.js
export default authSlice.reducer
