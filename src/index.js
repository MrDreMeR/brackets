module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  let configArr = [];
  let stack = [];

  bracketsConfig.map(item => {
    configArr = configArr.concat(item)}
  );
  
  for (let i = 0; i < str.length; i += 1) {
    const bracket = str[i];
    const indexOne = configArr.indexOf(bracket);
    const indexTwo = configArr.lastIndexOf(bracket);

    if (indexOne < indexTwo) {  
      if (stack.length === 0) {
        stack.push(bracket);
        continue;
      }

      if (stack[stack.length - 1] === bracket) {
        stack.pop();
        continue;
      }

      stack.push(bracket);
      continue;
    }

    if (!(indexOne % 2)) { 
      stack.push(bracket);
      continue;
    }

    const pairBracket = configArr[indexOne - 1];

    if (stack[stack.length - 1] === pairBracket) {
      stack.pop();
      continue;
    }

    return false;
  }

  return (stack.length === 0)
}
