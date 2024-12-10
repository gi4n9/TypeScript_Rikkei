"use strict";
let studentList = ["Nguyễn Văn A", "Nguyễn Văn B", "Trần Thị C", "Bùi Văn D"];
let phoneNum;
phoneNum = [2321321, 34];
let random = [213, true, false];
for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}
for (let student of studentList) {
    console.log(student);
}
for (let index in studentList) {
    console.log(parseInt(index) + 1, studentList[index]);
}
let car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
let person = {
    name: "Nguyen Van A",
    age: 18,
    hobby: ["Hanging out", "Playing Com Games"],
    gender: true,
};
let students = [
    {
        id: 1,
        name: "Nguyen van a",
        age: 18
    },
    {
        id: 2,
        name: "nguyen van b",
        age: 18
    }
];
let roles = ["admin", "moderator", "user"];
console.log(roles[1]);
for (let role of roles) {
    console.log(role);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["MODERATOR"] = 11] = "MODERATOR";
    Role[Role["USER"] = 12] = "USER";
})(Role || (Role = {}));
let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2
};
console.log(Role.ADMIN);
console.log(Role.MODERATOR);
console.log(Role.USER);
console.log(role.ADMIN);
console.log(role.MODERATOR);
console.log(role.USER);
let randomValue;
randomValue = "Hello World";
randomValue = 123;
randomValue = false;
function sum(number1, number2) {
    return number1 + number2;
}
let numbers = [10, 20, 30, 40, 50];
let newArr = numbers.map(function (element, index) {
    return element * element;
});
console.log(newArr);
function map(arr, fn) {
    let result = [];
    for (let i in arr) {
        let mapElement = fn(arr[i], +i);
        result.push(mapElement);
    }
    return result;
}
let resultArr = map([3, 5, 7, 9, 11], function (element, index) {
    return element * element;
});
console.log(resultArr);
