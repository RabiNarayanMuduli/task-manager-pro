import { useState, useEffect } from 'react'

// Custom hook: delays updating a value until the user STOPS typing
// for `delay` ms. Prevents filtering/searching on every single keystroke.
export function useDebounce(value, delay = 400) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        // Every time `value` changes, wait `delay` ms before committing it
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        // Cleanup: if `value` changes again before the timer finishes,
        // cancel the old timer so it doesn't overwrite the newer typing
        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}
