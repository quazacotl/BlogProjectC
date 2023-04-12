import {getQueryParams} from './addQueryParams'

describe('shared/url/addQueryParams', function () {
	test('test one param', () => {
		const params = getQueryParams({
			test: 'test'
		})
		expect(params).toBe('?test=test')
	})
	test('test with multiple param', () => {
		const params = getQueryParams({
			test: 'some',
			second: 'more',
		})
		expect(params).toBe('?test=some&second=more')
	})
	test('test undefined', () => {
		const params = getQueryParams({
			test: 'test',
			second: undefined
		})
		expect(params).toBe('?test=test')
	})
})