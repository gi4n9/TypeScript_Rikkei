abstract class Rikkei {
    private _taxCode: string;
    private _stakeholders: any[];

    constructor(taxCode:string){
        this._taxCode = taxCode;
        this._stakeholders = [{name:"Minh Cường", share: "100%"}];
    }

    //phải chuyển method ở trong abstract class thành protected để có thể truy cập từ lớp con kế thừa
    protected showTaxCode(){
        console.log(`Rikkei Tax Code is ${this._taxCode}`);
    }

    abstract payTaxes(): void;
}

// Nhiệm vụ của lớp trừu tượng -> đưa ra chỉ dẫn danh cho các lớp con kế thừa
// Không thể khởi tạo instance từ lớp trừu tượng 

// Khi tiến hành kế thừa từ một lớp trừu tượng
class RikkeiEducation extends Rikkei {
    private _bod:string[];

    constructor(bod:string[]){
        //super gọi constructor của lớp cha
        super("0101010101");
        this._bod = bod;
    }

    //muốn lấy method ra thì phải override 
    override payTaxes(){
        console.log("Đi đóng thuế");
    };
}


// Khởi tạo ra các instance từ lớp con kế thừa từ lớp trừu tượng

let rikkeiEducation =  new RikkeiEducation(["Minh Cường", "Huỳnh Phúc"]);


class Animal {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
    introduce(){
        console.log(`Hello, I'm ${this._name}`);
    }
}

//Khởi tạo ra instance từ lớp Animal
// let animal01 = new Animal("Donal Duck");

//Tính trừu tượng trong lập trình hướng đối tượng
// animal01.introduce();


abstract class Human {
    private _gene:string;

    constructor(gene:string){
        this._gene = gene;
    }

    abstract reproduce(): void;

}

interface People {
    name:string;
    age:number;
}

type PeopleType = {
    name:string;
    age:number;
}

let people: People = {name:"Minh Cường", "age": 20};
let peopleType: PeopleType = {name:"Minh Cương", "age": 18};



abstract class Female extends Human {
    constructor(gene:string){
        super(gene);
    }
    
    abstract giveBirth(): void;
}

interface Sales {
    name: string;
    sale(): void;
}

interface Marketing {
    name: string;
    marketing(): void;
}

interface DigitalMarketing extends Marketing {
    doingDMarketing(): void;
}

class Student extends Female implements Sales, Marketing, DigitalMarketing {
    public name: string;
    private _age: number;

    constructor(gene:string, name:string, age:number){
        super(gene);
        this.name = name;
        this._age = age;
    }

    study(){
        console.log("I'm studying");
    }

    introduce(){
        console.log(`Hello, I'm ${this.name}`);
    }

    reproduce(): void {
        console.log("Reproduce");
    }

    giveBirth(): void {
        console.log("Give birth");
    }

    marketing(): void {
        console.log("Marketing");
    }

    sale(): void {
        console.log("Sale");
    }

    doingDMarketing(): void {
        console.log("Doing Digital Marketing");
    }
}



class RK implements Sales, Marketing{
    public name:string;

    constructor(name:string){
        this.name = name;
    }

    marketing(): void {
        console.log("Marketing");
    }

    sale(): void {
        console.log("Sale");
    }

}

class Phenikaa implements Sales, Marketing{
    public name:string;

    constructor(name:string){
        this.name = name;
    }

    marketing(): void {
        console.log("Marketing");
    }

    sale(): void {
        console.log("Sale");
    }

}