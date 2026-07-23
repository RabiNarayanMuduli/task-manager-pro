import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'

// Receives a callback so the PARENT decides what to do with the
// debounced value — this component only cares about capturing input.
function SearchBar({ onSearch }) {
    const [text, setText] = useState('')
    const debouncedText = useDebounce(text, 400)

    // Runs only when debouncedText actually changes (i.e. after the
    // user pauses typing) — not on every keystroke.
    useEffect(() => {
        onSearch(debouncedText)
    }, [debouncedText, onSearch])

    return (
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search tasks..."
        />
    )
}

export default SearchBar
