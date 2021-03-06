/*Test solutions in this script are combinations of mine and others. Keeping record assists in  review
*/
/*TEST 1
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
 #Examples: ``` a = "xyaabbbccccdefww" 
 b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
*/
function longest(s1, s2) {
  s3 = s1 + s2;
  s3 = s3.split("");
  s3 = s3.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s3.join("");
}

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

/*TEST 2
Encryption
*/
function encrypt(word, n){
  word = word.repeat(n)
  let newWord = word.filter(
    function(element, index, array){return element ===array[index + 1]})
  return newWord;
}

/* TEST 3
Convert a decimal number to a binary value
Solution one*/
function addBinary(a,b) {
  let sum = a + b;
  let bin = "";
  while(sum >0){
  if(sum % 2 == 0){
  bin = "0" + bin;}else{
  bin = "1" + bin}
  sum = Math.floor(sum / 2);}
  return bin}

  /*solution 2 */
  function addBinary(a,b){
    return Number(a + b).toString(2);
  }

  /*solution 3 */
  function addBinary(a,b){
    if (a.isIntiger&& b.isIntiger){ //if all argument is integer digits
      return (a+b).toString(2); //ok , return a string
      } else {
      return (parseInt(a,10)+parseInt(b,10)).toString(2); //if some of argument send as a string - parse values to 10 digits int. values and return as a binary 
       }
    }

  /*solution 3 */
  function addBinary(a,b){
    var sum = a + b, binary = '';
  
    while (sum > 0) {
      binary = (sum % 2) + binary;
      sum = Math.floor(sum / 2);
    }
    
    return binary;
  }

  /* TEST 4
Count duplicate letters and return the number of duplicates*/
  
/* TEST 4 - SOLUTION 1
Count duplicate letters and return the number of duplicates*/
function duplicateCount(text){
  count = 0;
  items = {};
  newText = [];
  text = text.toLowerCase().split("");
   for (let letter of text){
   if (newText.includes(letter)){
  items[letter]=count++;
  } else {
  newText.push(letter);}
  };
   return Object.keys(items).length; }

/* TEST 4 - SOLUTION 2
Count duplicate letters and return the number of duplicates*/
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

/* TEST 4 - SOLUTION 3
Count duplicate letters and return the number of duplicates*/
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

/* TEST 5 - SOLUTION 1
expand numbers eg. 7030 = 700 + 30*/
function expandedForm(num) {
return num.toString().split("").map((n,i,a) => n*Math.pow(10, a.length-i-1)).filter(n => n>0).join(" + ")
}
/* TEST 6 - SOLUTION 1
Reverse strings*/
function reverseWord(str){
return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
/* TEST 7 - SOLUTION 1
format nested hash into a list of names separated by commas. 
The last two names should be separated by ampersand*/
function list(arr) {
  return arr.map(function(person) { return person.name; }) // Use only .name
  .join(", ") // Join with ", "
  .replace(/, (?!.*, )/, " & "); // Replace last ", " with " & "
}

/* TEST 8 - SOLUTION 1
convert to title case*/
function charCase(str){
  str = str.toLowerCase();
  str = str.split(" ");
  result = [];
  for (letter of str){result.push(letter[0].toUpperCase() + letter.slice(1))} return result.join(" ");
  }

  /*TEST 9
  fIND THE MISSING LETTER */
  /* TEST 9 - SOLUTION 1
*/
function findMissingLetter(array){
  let arrays = array.toString("").toLowerCase().split(",");
  //create a variable of alphabets caled alph
  //convert to array
  //Take the beginning and end elements of the test array slice alph using the test arrays beginning and end
  //compare both to identify the missing element.
  let alph = "abcdefghijklmnopqrstuvwxyz".split("");
  let firstLett = arrays[0]; 
  let lastLett = arrays[arrays.length -1];
  let newArray =alph.slice(alph.indexOf(firstLett), alph.indexOf(lastLett) +1);
  let missingLett = "";
  for (let x = 0; x < newArray.length; x++){
  if (!(arrays.includes(newArray[x]))){ missingLett += newArray[x]}}
  if (array[0] == array[0].toUpperCase()){
  return missingLett.toUpperCase();} else return missingLett;
  }
  /* TEST 9 - SOLUTION 2
*/
function findMissingLetter(array) {
  var string = array.join("");
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}

/* TEST 10 
Are they the same. Compare two arrays such that array2 is the square of array1 
*/
/* TEST 10 - SOLUTION 1
*/
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
/* TEST 11 - Dubstep
Remove words in a string and replace excessive white spaces
*/
/* TEST 11 - SOLUTION 1
*/   
function songDecoder(song){
  song = song.replace(/WUB/g," ").trim().replace(/\s+/g,' ');
return song
}

/* TEST 11 - SOLUTION 2
*/
const songDecoder = song => song.replace(/(WUB)+/g, ' ').trim();
