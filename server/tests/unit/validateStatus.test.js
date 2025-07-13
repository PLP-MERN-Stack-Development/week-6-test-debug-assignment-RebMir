const { isValidStatus } = require('../../src/utils/validateStatus');


describe('isValidStatus', () => {
    test('returns true for valid status', () => {
        expect(isValidStatus('open')).toBe(true);
        expect(isValidStatus('in-progress')).toBe(true);
        expect(isValidStatus('resolved')).toBe(true);
    });

    test('returns false for invalid status', () => {
        expect(isValidStatus('done')).toBe(false);
        expect(isValidStatus('waiting')).toBe(false);
    });

});