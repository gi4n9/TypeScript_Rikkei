"use strict";
class Department {
    constructor(id, name, manager) {
        this.id = id;
        this.name = name;
        this._manager = manager;
    }
    describe() {
        console.log(`This is ${this.name} Department with id: ${this.id}`);
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
}
let educationDepartment = new Department("1", "Education", "Nguyen Van A");
console.log(educationDepartment.manager);
educationDepartment.manager = "Nguyen Thi C";
console.log(educationDepartment.manager);
let marketingDepartment = new Department("3", "Marketing", "Tran Van B");
console.log(marketingDepartment);
let accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" }),
};
accounting.describe();
