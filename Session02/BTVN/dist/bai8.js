"use strict";
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));
console.log(isValid("([)]"));
