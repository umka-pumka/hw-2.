import { useState } from 'react'

function Counter() {
	const [state, setState] = useState(1)
	console.log(state)

	function handleAdd() {
			setState(state + 1)
	}

	function handleRemuver() {
			setState(state - 1)
	}

	return (
		<div>
			<h1>{state}</h1>
			<button onClick={handleAdd}>+</button>
			<button onClick={handleRemuver}>-</button>
		</div>
	)
}

export default Counter
