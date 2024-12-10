let arrNum2: number[] = [10, 20, 12, 15, 16, 9, 8, 2, 7, 4];

function finMinMax(arr:number[]): { min: Number, minIndex: Number, max: Number, maxIndex: Number} {
    let min = arr[0], max = arr[0];
    let minIndex = 0, maxIndex = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max){
            max = arr[i];
            maxIndex = i;
        }
    }
    return {min, minIndex, max, maxIndex};
}

const {min, minIndex, max, maxIndex} = finMinMax(arrNum2);

console.log(`Giá trị lớn nhất ${max}  vị trí ${maxIndex}`);