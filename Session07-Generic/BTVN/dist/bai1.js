"use strict";
function swap(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
}
let intArray = [1, 2];
console.log(`Before swap:${intArray[0]}, ${intArray[1]}`);
swap(intArray);
console.log(`After swap: ${intArray[0]}, ${intArray[1]}`);
