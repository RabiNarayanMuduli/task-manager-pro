import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'

// Three "building wrappers", outside in:
// 1. Provider    → gives the whole app access to the Redux store
// 2. BrowserRouter → gives the whole app access to routing
// 3. ThemeProvider → gives the whole app access to theme Context
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
