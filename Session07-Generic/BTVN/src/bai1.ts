function swap<T>(arr:[T,T]):void{
    [arr[0],arr[1]] = [arr[1],arr[0]];
}

let intArray: [number,number] = [1,2];
console.log(`Before swap:${intArray[0]}, ${intArray[1]}`);
swap(intArray);
console.log(`After swap: ${intArray[0]}, ${intArray[1]}`);