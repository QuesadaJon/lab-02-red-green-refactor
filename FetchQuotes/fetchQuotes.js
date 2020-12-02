const request = require('superagent')
const superagent = require('superagent')

const fetchQuotes = async () => {
    const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes')
    const { character: name, quote: text, image } = body[0]
    return {
        name,
        text,
        image
    };
}

module.exports = {
    fetchQuotes
}