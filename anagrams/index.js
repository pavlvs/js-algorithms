// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
//  in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lowercase

function anagrams(stringA, stringB) {
    const charMapA = buildCharMap(stringA)
    const charMapB = buildCharMap(stringB)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false
    }

    for (const char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true

}

function buildCharMap(str) {
    const charMap = {}
    for (const char of str.toLowerCase().replace(/[^\w]/g, '')) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

console.log(anagrams('Rail! Safety!', 'Fairy Tales'))