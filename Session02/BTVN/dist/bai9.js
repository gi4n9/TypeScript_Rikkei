"use strict";
function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("raceacar"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("No lemon, no melon"));
console.log(isPalindrome("Hello"));
