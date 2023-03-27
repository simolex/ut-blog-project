import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('test with multi params', () => {
        const params = getQueryParams({
            test1: 'value1',
            test2: 'value2',
            test3: '3',
        });
        expect(params).toBe('?test1=value1&test2=value2&test3=3');
    });

    test('test without params', () => {
        const params = getQueryParams({
            test: undefined,
        });
        expect(params).toBe('?');
    });
});
