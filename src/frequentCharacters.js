/* 
    Input:  string s
    most repeatedc character in that string

    Example: 
    s = hjibbbko
    result: b
*/

function checkFreqChar(s) {
  if (typeof s !== "string") return;
  if (s.length === 1) return s;
  let repeatedChar = {};
  let max = 0;
  let maxChar = "";
  const regex = /^[A-Za-z]+$/;
  for (let char of s) {
    if (regex.test(char) && !repeatedChar[char]) {
      repeatedChar[char] = 1;
    } else {
      repeatedChar[char] += 1;
      if (repeatedChar[char] > max) {
        max = repeatedChar[char];
        maxChar = char;
      }
    }
  }

  return maxChar;
}

console.log(checkFreqChar("abcsdaaaa111111bbbbbbbb22222222222"));
