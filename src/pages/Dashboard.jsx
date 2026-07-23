import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../features/tasks/tasksSlice'
import { logout } from '../features/auth/authSlice'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import ThemeToggle from '../components/ThemeToggle'

function Dashboard() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const status = useSelector((state) => state.tasks.status)
    const [searchTerm, setSearchTerm] = useState('')

    // useEffect: runs once when this component first mounts (empty
    // dependency array). Only fetch if we haven't already ('idle'),
    // so navigating away and back doesn't re-fetch every time.
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks())
        }
    }, [status, dispatch])

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <ThemeToggle />
            <button onClick={() => dispatch(logout())}>Log out</button>

            <TaskForm />
            <SearchBar onSearch={setSearchTerm} />
            <Filters />
            <TaskList searchTerm={searchTerm} />
        </div>
    )
}

export default Dashboard
