const { copyAndPush } = require("./copyAndPush.js")
const numbers = [1, 2, 3]

describe('copyAndPush', () => {
    it('Function should take in an object andreturns a new array with all the items in the original array and a new item pushed to the end return the name property', () => {
        const copiedAndPushedArray = copyAndPush(numbers, 4) // 
        expect(copiedAndPushedArray).toEqual([1, 2, 3, 4])
    });
    it('The original array should not have been altered. This test should take it in and return [1,2,3]', () => {
        expect(numbers).toEqual([1, 2, 3])
    })
});