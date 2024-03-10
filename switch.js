function switchFirstAndLastLetter(word) {
    if (word.length < 2) {
        // Words with less than 2 characters remain unchanged
        return word;
    }

    // Get the first and last letters
    const firstLetter = word[0];
    const lastLetter = word[word.length - 1];

    // Create the switched word
    const switchedWord = lastLetter + word.substring(1, word.length - 1) + firstLetter;

    return switchedWord;
}

// Example usage:
const inputWord = "example";
const switchedWord = switchFirstAndLastLetter(inputWord);

console.log(`Original word: ${inputWord}`);
console.log(`Switched word: ${switchedWord}`);
