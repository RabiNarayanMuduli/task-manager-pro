import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/tasksSlice'

function TaskForm() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(addTask(text))
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a task..."
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm
