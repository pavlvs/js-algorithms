// --- Directions
// Given a string, return true if it is a palindrome
// or false if it is not.


function palindrome(string) {
    let reversed = ''
    for (const character of string) {
        reversed = character + reversed
    }
    return string === reversed
}

console.log(palindrome('racecar'))
console.log(palindrome('bananas'))