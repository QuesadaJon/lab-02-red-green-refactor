const capitalizeAndFilter = array => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const word = array[i].toUpperCase();
        if (word[0] !== 'F')
            newArray.push(word);
    };
    return newArray;
}
module.exports = {
    capitalizeAndFilter
}