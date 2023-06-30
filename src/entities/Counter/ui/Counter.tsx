import React from 'react'
import {Button} from '@/shared/ui/Button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {CounterActions} from '../model/slice/counterSlice'
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)
	const increment = () => {
		dispatch(CounterActions.increment())
	}

	const decrement = () => {
		dispatch(CounterActions.decrement())
	}


	return (
		<div>
			<h1 data-testid={'value-title'}>{counterValue}</h1>
			<Button data-testid={'increment-btn'} onClick={increment}>{'>'}</Button>
			<Button data-testid={'decrement-btn'} onClick={decrement}>{'<'}</Button>
		</div>
	)
}
