class Animal{
    protected _type: string;

    constructor(type:string){
        this._type = type;
    }

    get type(){
        return this._type;
    }

    set type(type:string){
        this._type = type;
    }

    sound(){
        console.log("This is this animal sound");
    }
    walk(){
        console.log("WAlk walk walk");
    }
}

class Dog extends Animal{
    private _name:string;
    private _gender:boolean;

    constructor(name:string, gender:boolean){
        super("carnivore");//dùng để gọi đến constructor của thằng cha(Animal)
        // do Dog kế thừa Animal nên có 3 properties(type, name, gender)
        this._name = name;
        this._gender = gender;
        console.log(this._type);
    }

    //Method overriding
    //Ghi đè phương thức
    override sound(): void {
        super.sound();// super giúp truy cập vào phương thức sound() ở Animal
        console.log("Wof Woff.....");
    }

    //Method overloading: thể hiện tính đa hình thái
    //thông qua việc tạo nhiều function signature cho phương thức

    introduce(input:string):void;
    introduce(input:boolean):void;
    introduce(input:string | boolean):void{
        if(typeof input === "string"){
            console.log(`Hi, my name is ${this._name}. I'm a ${input}`);
        } else if(typeof input === "boolean") {
            console.log(`Hi, my name is ${this._name}.I'm very 
                ${input ? "handsome" : "ugly"}`
            );
        } else {
            console.log(`Hi, my name is ${this._name}`);
        }
    }
}



let dog1 = new Dog("Dog1", true);
dog1.sound();
// console.log(dog1.sound());