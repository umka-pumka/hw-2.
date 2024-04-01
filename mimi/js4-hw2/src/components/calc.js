import React, { useState } from 'react'

function Calculator() {
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')
	const [result, setResult] = useState(0)

	const handleInputChange = (e, inputNumber) => {
		const value = e.target.value
		if (inputNumber === 1) {
			setInput1(value)
		} else {
			setInput2(value)
		}
	}

	const calculate = operator => {
		const num1 = parseFloat(input1)
		const num2 = parseFloat(input2)
		let calculatedResult

		switch (operator) {
			case '+':
				calculatedResult = num1 + num2
				break
			case '-':
				calculatedResult = num1 - num2
				break
			case '*':
				calculatedResult = num1 * num2
				break
			case '/':
				calculatedResult = num1 / num2
				break
			default:
				return
		}

		setResult(calculatedResult)
	}

	return (
		<div>
			<input
				type='number'
				value={input1}
				onChange={e => handleInputChange(e, 1)}
			/>
			<input
				type='number'
				value={input2}
				onChange={e => handleInputChange(e, 2)}
			/>
			<button onClick={() => calculate('+')}>+</button>
			<button onClick={() => calculate('-')}>-</button>
			<button onClick={() => calculate('*')}>*</button>
			<button onClick={() => calculate('/')}>/</button>
			<div>Result: {result}</div>
		</div>
	)
}

export default Calculator
