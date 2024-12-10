"use strict";
let arrNum4 = [10, 20, 12, 15, 16, 9, 8, 2, 7, 4];
for (let i = 0; i <= arrNum4.length; i++) {
    for (let j = i + 1; j <= arrNum4.length; j++) {
        if (arrNum4[i] < arrNum4[j]) {
            let temp = arrNum4[j];
            arrNum4[j] = arrNum4[i];
            arrNum4[i] = temp;
        }
    }
}
console.log(arrNum4);
