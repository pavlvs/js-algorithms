// --- Directions
// Given a string, return a new string with the reversed
// order of characters

function reverse(string) {
    let reversed = ''

    for (const character of string) {
        reversed = character + reversed
    }

    return reversed
}

console.log(reverse('Hello World'))