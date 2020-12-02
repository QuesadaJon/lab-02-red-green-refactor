const upperCase = array => {
    return array.map(word => {
        return word.toUpperCase();
    })
}

const capitalizeAndFilter = array => {
    const newArray = array.filter(word => word[0] !== 'f' && word[0] !== 'F')
    return upperCase(newArray)
}
module.exports = {
    capitalizeAndFilter
}