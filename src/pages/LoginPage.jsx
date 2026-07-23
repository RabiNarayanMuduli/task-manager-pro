import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'

function LoginPage() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) return
        // No real backend here — this is a mock login just to practice
        // the auth + protected route pattern.
        dispatch(login({ name }))
        navigate('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button type="submit">Log in</button>
        </form>
    )
}

export default LoginPage
