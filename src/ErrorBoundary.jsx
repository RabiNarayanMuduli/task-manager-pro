import { Component } from 'react'

// Error boundaries MUST be class components — React has no Hook
// equivalent for this yet. It catches crashes in child components
// so one broken component doesn't blank out the entire app.
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    // React calls this automatically if a child throws during render
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <h2 style={{ padding: '2rem' }}>Something went wrong. Please refresh.</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary
