"use strict";
let array2D = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
];
function printArray2D(arr) {
    for (let i = 0; i < arr.length; i++) {
        let row = '';
        for (let j = 0; j < arr[i].length; j++) {
            row += arr[i][j] + ' ';
        }
        console.log(row.trim());
    }
}
printArray2D(array2D);
