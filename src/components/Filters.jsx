import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/filter/filterSlice'

function Filters() {
    // Note the double label: state.filter (which slice) .status (which field)
    const currentFilter = useSelector((state) => state.filter.status)
    const dispatch = useDispatch()

    const options = ['all', 'active', 'completed']

    return (
        <div>
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => dispatch(setFilter(option))}
                    style={{ fontWeight: currentFilter === option ? 'bold' : 'normal' }}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default Filters
