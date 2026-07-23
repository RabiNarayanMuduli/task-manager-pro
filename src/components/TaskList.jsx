import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask, toggleTask } from '../features/tasks/tasksSlice'

function TaskList({ searchTerm }) {
    const tasks = useSelector((state) => state.tasks.items)
    const status = useSelector((state) => state.tasks.status)
    const filter = useSelector((state) => state.filter.status)
    const dispatch = useDispatch()

    // useMemo: only recompute this filtered/searched list when tasks,
    // filter, or searchTerm actually change — not on every re-render
    // caused by unrelated state (like theme toggling).
    const visibleTasks = useMemo(() => {
        return tasks
            .filter((task) => {
                if (filter === 'active') return !task.completed
                if (filter === 'completed') return task.completed
                return true
            })
            .filter((task) =>
                task.text.toLowerCase().includes(searchTerm.toLowerCase())
            )
    }, [tasks, filter, searchTerm])

    if (status === 'loading') return <p>Loading tasks...</p>
    if (status === 'failed') return <p>Failed to load tasks.</p>

    return (
        <ul>
            {visibleTasks.map((task) => (
                <li key={task.id}>
                    <span
                        onClick={() => dispatch(toggleTask(task.id))}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                    >
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList
