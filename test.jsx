/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
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