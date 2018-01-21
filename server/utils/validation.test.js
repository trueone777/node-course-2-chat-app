const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation');

// isRealString
describe('isRealString', () => {
    // should reject non-string values
    it('should reject non-string values', () => {
        const res = isRealString(98);

        expect(res).toBe(false);
    });
    // should reject strings with only spaces
    it('should reject strings with only spaces', () => {
        const res = isRealString('     ');

        expect(res).toBe(false);
    });
    // should allow strings with non-space characters
    it('should allow strings with non-space characters', () => {
        const res = isRealString('  Andrew  ');

        expect(res).toBe(true);
    });
});
