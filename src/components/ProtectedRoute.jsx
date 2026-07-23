import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// Wraps any page that requires login. If not logged in, redirect to /login
// instead of rendering the children at all.
function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
