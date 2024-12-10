let studentList: Array<string> = ["Nguyễn Văn A","Nguyễn Văn B","Trần Thị C","Bùi Văn D"];

let phoneNum: number[];
phoneNum = [2321321, 34];

let random: Array<any> = [213, true, false];




for(let i:number = 0; i < studentList.length; i++){
    console.log(studentList[i]);
}

for(let student of studentList){
    console.log(student);
}

for (let index in studentList){
    console.log(parseInt(index) + 1, studentList[index]);
}

// Create -- Thêm mới 
// - Thêm phần tử vào đầu mảng(.unshift)
// - Thêm phần tử vào cuối mảng(.push)
// - Thêm phẩn tử vào vị trí bất kì của mảng(.splice)

// Update - Cập nhật

// Object - Đối tượng 
let car: {type: string, model:string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

//Type alias (type)
type Person = {
    name: string,
    age: number,
    hobby: String[],
    gender: boolean
}

let person:Person = {
    name: "Nguyen Van A",
    age: 18,
    hobby: ["Hanging out", "Playing Com Games"],
    gender: true,
}

// Danh sách những đối tượng
// Danh sách sinh viên(id, name, age)



let students: { id: number; name: string; age: number; }[] = [
    {
        id:1,
        name: "Nguyen van a",
        age: 18
    },
    {
        id: 2,
        name: "nguyen van b",
        age:  18
    }
]

// Tuple - Mảng cố định độ dài và kiểu dữ liệu của từng phẩn tử
let roles: [string, string, string] = ["admin", "moderator", "user"];

console.log(roles[1]);

for(let role of roles){
    console.log(role);
}

// Tránh sử dụng thao tác thêm hoặc xóa phần tử trong tuples


// enum - Kiểu dữ liệu gần giống đối tượng 
enum Role{
    ADMIN = 10, //0
    MODERATOR, //1
    USER //2
}

let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2
}

console.log(Role.ADMIN);
console.log(Role.MODERATOR);
console.log(Role.USER);


console.log(role.ADMIN);
console.log(role.MODERATOR);
console.log(role.USER);


type randomValueType = string | number | boolean;
// UNION TYPE 
// Biến randomValue --> Nhận các giá trị là string, number, boolean 
let randomValue: randomValueType;

randomValue = "Hello World";
randomValue = 123;
randomValue = false;

// Function Type
function sum(number1: number, number2: number): number {
    return number1 + number2;
}

//JS + TS ---> Tinhs chaast First-class function 
// - Một function trong JS có thể nhận 1 function khác làm tham số

// VD: phương thức map của mảng
// - Ánh xạ các phần tử trong mảng theo 1 công thức nào đó
let numbers: number[] = [10,20,30,40,50];

let newArr: number[] = numbers.map(function(element, index){
    return element * element;
});

console.log(newArr);

// Mô phỏng lại phương thức map trong Javascript

function map(
    arr: number[],
    fn: (element: number, index: number) => number
  ): number[] {
    let result: number[] = [];
    for (let i in arr) {
      let mapElement: number = fn(arr[i], +i);
      result.push(mapElement);
    }
    return result;
  }
  
  let resultArr = map([3, 5, 7, 9, 11], function (element, index) {
    return element * element;
  });
  
  console.log(resultArr);