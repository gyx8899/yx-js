import {consoleLog} from '../Tool';

describe('Util Tool', () => {
	beforeEach(() => {
		global.console = {
			warn: jest.fn(),
			log: jest.fn(),
			groupEnd: jest.fn(),
			group: jest.fn(),
			table: jest.fn(),
		};
	});
	afterEach(() => {

	});

	// API test unit
	test('consoleLog', () => {
		function testLog(a, b, c, d) {
			return consoleLog(a, b, c, d);
		}
		const args = [1, '2', [3, '3'], {4: 44}];
		expect(testLog(...args)).toBe('testLog');
		expect(global.console.log).toHaveBeenCalledWith(expect.any(String), expect.any(String), 'testLog:', ...args);
	});
});
