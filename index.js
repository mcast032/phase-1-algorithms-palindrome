function isPalindrome(word) {
  const wordBackwords = word.split('').reverse().join('');
  return word === wordBackwords;
  // Write your algorithm here
}


/* 
  Add your pseudocode here

initialize a backwords string called wordBackords.
split the word up into individual letters in an array. then revers the order of the arry. then join the new reversed array and make it into a string.
finally return the original word and compare it to the reversed word.
*/

// Test cases


/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mario"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
