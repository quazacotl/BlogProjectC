// import {classNames} from './classNames'

import {classNames} from 'shared/lib/classNames/classNames'

describe('1st param', () => {
	test('test', () => {
		expect(classNames('class')).toBe('class')
	})
	test('with additional', () => {
		expect(classNames('class', {}, ['additional'])).toBe('class additional')
	})
	test('with mods', () => {
		expect(classNames('class', {hovered: true, scrollable: true}, ['additional'])).toBe('class additional hovered scrollable')
	})
	test('with false mods', () => {
		expect(classNames('class', {hovered: true, scrollable: false}, ['additional'])).toBe('class additional hovered')
	})
	test('with undef mods', () => {
		expect(classNames('class', {hovered: true, scrollable: undefined}, ['additional'])).toBe('class additional hovered')
	})
})