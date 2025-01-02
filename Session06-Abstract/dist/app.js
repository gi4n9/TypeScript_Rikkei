"use strict";
class Rikkei {
    constructor(taxCode) {
        this._taxCode = taxCode;
        this._stakeholders = [{ name: "Minh Cường", share: "100%" }];
    }
    //phải chuyển method ở trong abstract class thành protected để có thể truy cập từ lớp con kế thừa
    showTaxCode() {
        console.log(`Rikkei Tax Code is ${this._taxCode}`);
    }
}
// Nhiệm vụ của lớp trừu tượng -> đưa ra chỉ dẫn danh cho các lớp con kế thừa
// Không thể khởi tạo instance từ lớp trừu tượng 
// Khi tiến hành kế thừa từ một lớp trừu tượng
class RikkeiEducation extends Rikkei {
    constructor(bod) {
        //super gọi constructor của lớp cha
        super("0101010101");
        this._bod = bod;
    }
    //muốn lấy method ra thì phải override 
    payTaxes() {
        console.log("Đi đóng thuế");
    }
    ;
}
// Khởi tạo ra các instance từ lớp con kế thừa từ lớp trừu tượng
let rikkeiEducation = new RikkeiEducation(["Minh Cường", "Huỳnh Phúc"]);
class Animal {
    constructor(name) {
        this._name = name;
    }
    introduce() {
        console.log(`Hello, I'm ${this._name}`);
    }
}
//Khởi tạo ra instance từ lớp Animal
// let animal01 = new Animal("Donal Duck");
//Tính trừu tượng trong lập trình hướng đối tượng
// animal01.introduce();
class Human {
    constructor(gene) {
        this._gene = gene;
    }
}
let people = { name: "Minh Cường", "age": 20 };
let peopleType = { name: "Minh Cương", "age": 18 };
class Female extends Human {
    constructor(gene) {
        super(gene);
    }
}
class Student extends Female {
    constructor(gene, name, age) {
        super(gene);
        this.name = name;
        this._age = age;
    }
    study() {
        console.log("I'm studying");
    }
    introduce() {
        console.log(`Hello, I'm ${this.name}`);
    }
    reproduce() {
        console.log("Reproduce");
    }
    giveBirth() {
        console.log("Give birth");
    }
    marketing() {
        console.log("Marketing");
    }
    sale() {
        console.log("Sale");
    }
    doingDMarketing() {
        console.log("Doing Digital Marketing");
    }
}
class RK {
    constructor(name) {
        this.name = name;
    }
    marketing() {
        console.log("Marketing");
    }
    sale() {
        console.log("Sale");
    }
}
class Phenikaa {
    constructor(name) {
        this.name = name;
    }
    marketing() {
        console.log("Marketing");
    }
    sale() {
        console.log("Sale");
    }
}
