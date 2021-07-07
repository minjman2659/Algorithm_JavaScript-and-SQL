// https://urclass.codestates.com/codeproblem/ecff6b4c-be78-4cc6-9005-920976f1e826

const balancedBrackets = function (str) {
    let stack = [];
    const open = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    };
    const close = [")", "}", "]"];
  
    for(let el of str) {
      if(el in open) {
        stack.push(open[el]);
      } else if(close.includes(el)) {
        if(stack[stack.length-1] === el) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
  