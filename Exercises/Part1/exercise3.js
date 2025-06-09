/** Exercise 3:
 * Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
 * For example, 'a' will be replaced by 'b', 'b' will be replaced by 'c', and so on.
 */

// String.fromCharCode
// charCodeAt

const replaceWithNextChar = (str) =>
     str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');

console.log(replaceWithNextChar("abc")); // bcd