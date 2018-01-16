const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Deb';
        const latitude = 15;
        const longitude = 19;

        const url = 'https://www.google.com/maps?q=15,19';

        const message = generateLocationMessage(from, latitude, longitude);

        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    });
});