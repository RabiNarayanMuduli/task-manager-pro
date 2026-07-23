import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorBoundary from './ErrorBoundary'
import LoginPage from './pages/LoginPage'

// React.lazy: Dashboard's code isn't downloaded until the user actually
// navigates there — keeps the initial bundle smaller.
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
    return (
        <ErrorBoundary>
            {/* Suspense shows a fallback while the lazy chunk downloads */}
            <Suspense fallback={<p>Loading page...</p>}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
