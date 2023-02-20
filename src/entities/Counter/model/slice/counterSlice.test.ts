import {CounterReducer, CounterActions} from './counterSlice'
import {CounterSchema} from '../types/counterSchema'

describe('counterSlice', () => {
	test('increment', () => {
		const state: CounterSchema = {value: 10}
		expect(CounterReducer(state as CounterSchema, CounterActions.increment)).toEqual({value: 11})
	})
	test('decrement', () => {
		const state: CounterSchema = {value: 10}
		expect(CounterReducer(state as CounterSchema, CounterActions.decrement)).toEqual({value: 9})
	})
	test('work with empty state', () => {
		expect(CounterReducer(undefined, CounterActions.increment)).toEqual({value: 1})
	})
})