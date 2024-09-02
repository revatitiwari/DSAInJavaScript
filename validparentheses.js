// Valid parentheses code
// Input {[()]} output - true

const isValid = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let char = arr[arr.length - 1];

    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      arr.push(str[i]);
    } else if (
      (char == "(" && str[i] == ")") ||
      (char == "{" && str[i] == "}") ||
      (char == "[" && str[i] == "]")
    ) {
      arr.pop();
    } else {
        return false;
    }
    
  }

  return arr.length? false: true;
};

console.log(isValid("(({[}))")); // false
console.log(isValid("(({[})")); //false
console.log(isValid("{[]}")); // true
