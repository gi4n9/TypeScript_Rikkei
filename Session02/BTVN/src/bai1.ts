let arrNum: number[] = [10, 20, 12, 15, 16, 9, 8, 2, 7, 4];

let finalNum:number[] = [];

for (let index in arrNum){
    if(arrNum[index] >= 10){
        finalNum.push(arrNum[index]);
    }
}

console.log(finalNum);
