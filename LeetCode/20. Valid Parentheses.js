// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let stack = [];
    
    const open = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    const close = [")", "}", "]"];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] in open) {
            stack.push(open[s[i]]);   
        } else if(close.includes(s[i])) {
            if(s[i] === stack[stack.length-1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};