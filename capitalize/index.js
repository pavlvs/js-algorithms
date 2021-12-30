// --- Directions
// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalize(string) {
    const words = []
    for (let word of string.split(' ')) {
        words.push(word.replace(word[0], word[0].toUpperCase()))
    }
    return words.join(' ')
}

console.log(capitalize('the quick fox'))