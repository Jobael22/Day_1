let inputString = "Robin Singh";

let words = [];

let currentWord = "";

for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    // Check if the character is an alphanumeric character or an apostrophe
    if (/[a-zA-Z0-9']/.test(char)) {
        currentWord += char;
        
    } else if (currentWord !== "") {
        // Add the current word to the array when a non-alphanumeric character is encountered
        words.push(currentWord);
        currentWord = "";
    }
}

// Add the last word if the string doesn't end with a non-alphanumeric character
if (currentWord !== "") {
    words.push(currentWord);
}

console.log(words);
