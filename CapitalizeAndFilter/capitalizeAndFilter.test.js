const { capitalizeAndFilter } = require("./capitalizeAndFilter.js")
const names = ['spot', 'rover', 'bingo', 'fred']

describe('capitalizeAndFilter', () => {
    it('Function takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
        const capitalizedAndFiltered = capitalizeAndFilter(names);
        expect(capitalizedAndFiltered).toEqual(['SPOT', 'ROVER', 'BINGO'])
    })
});