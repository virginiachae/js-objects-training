/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

var letterCount = function(word) {
  var obj = {};
  var arr = word.split('') // ['a','p','p','l','e']
  var nonRepeats = [];
  for (var i = 0; i < word.length; i++) {
    if(nonRepeats.indexOf(word[i]) === -1) {
     nonRepeats.push(word[i]);
     obj[word[i]] = 1
   }

 }
  for(i=0; i<nonRepeats.length; i++){
    obj[word[i]] = 1;
   }
  return obj;
}



// much simpler

var letterCount = function(word) {
  var obj = {};
  var arr = word.split('') // ['a','p','p','l','e']
  for (var i = 0; i < arr.length; i++) {
   obj[arr[i]] = num;
   }
   return obj;
   }

//not done yet

var letterCount = function(word) {
  var obj = {};
  var arr = word.split('') // ['a','p','p','l','e']
  for (var i = 0; i < arr.length; i++) {
     obj[arr[i]] = 0
    for (var j =0; j<Object.keys(obj).length; j++){
      if(word[i] === Object.keys(obj)[j]) {
        obj[arr[i]] = obj[arr[i]] + 1;
      }
    }

    }
     return obj;
   }
