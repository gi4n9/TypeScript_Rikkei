let input1: string = "banana"
let input2: string = "hello world"

input1 = Array.from(new Set(input1.split(''))).toString();

console.log(input1);

// var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
// x = Array.from(new Set(x.split(','))).toString();
// document.write(x);