function isPalindrome(word) {
  // Reverse the string and compare it to the original
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Take the input string (word).
  2. Split the string into an array of characters.
  3. Reverse the array of characters.
  4. Join the reversed array back into a string.
  5. Compare the original string with the reversed string.
  6. Return true if they are the same, otherwise return false.
*/

/*
  Explanation:
  - The function takes a string and transforms it into an array of characters.
  - It then reverses the array and joins the characters back into a string.
  - Finally, it checks if the original string is the same as the reversed string.
  - If they are the same, the function returns true, indicating that the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
