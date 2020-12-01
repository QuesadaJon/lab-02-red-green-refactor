const { getName } = require("./getName.js")
const spot = { name: 'spot', age: 5, weight: '20 lbs' }

describe('getName', () => {
    it('should take in an object and return the name property', () => {
        const name = getName(spot)
        expect(name).toEqual('spot')
    });
});