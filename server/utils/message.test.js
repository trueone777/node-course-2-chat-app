const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        //store res in variable
        const from = 'Jen';
        const text = 'Some message';
        const message = generateMessage(from, text);

        expect(message).toInclude({from, text});

        //assert createdAt is number
        expect(message.createdAt).toBeA('number');
    });
});