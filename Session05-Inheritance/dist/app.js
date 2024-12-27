"use strict";
class Animal {
    constructor(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    sound() {
        console.log("This is this animal sound");
    }
    walk() {
        console.log("WAlk walk walk");
    }
}
class Dog extends Animal {
    constructor(name, gender) {
        super("carnivore");
        this._name = name;
        this._gender = gender;
        console.log(this._type);
    }
    sound() {
        super.sound();
        console.log("Wof Woff.....");
    }
    introduce(input) {
        if (typeof input === "string") {
            console.log(`Hi, my name is ${this._name}. I'm a ${input}`);
        }
        else if (typeof input === "boolean") {
            console.log(`Hi, my name is ${this._name}.I'm very 
                ${input ? "handsome" : "ugly"}`);
        }
        else {
            console.log(`Hi, my name is ${this._name}`);
        }
    }
}
let dog1 = new Dog("Dog1", true);
dog1.sound();
