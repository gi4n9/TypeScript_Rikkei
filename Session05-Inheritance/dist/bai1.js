"use strict";
class Person1 {
    constructor(id1, name1) {
        this._id1 = id1;
        this._name1 = name1;
    }
    getName() {
        return this._name1;
    }
    get id() {
        return this._id1;
    }
    get name() {
        return this._name1;
    }
}
class Employee1 extends Person1 {
    constructor(id, name, role) {
        super(id, name);
        this._role = role;
    }
    getRole() {
        return this._role;
    }
}
class Manager1 extends Employee1 {
    constructor(id, name, role, department) {
        super(id, name, role);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
}
class Task {
    constructor(id, title, deadline, isCompleted = false) {
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
    complete() {
        this.isCompleted = true;
    }
    getDetails() {
        return `The task ${this.title} with ID ${this.id} is ${this.isCompleted ? "completed" : "not completed"} and deadline is ${this.deadline}`;
    }
    get idTask() {
        return this.id;
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
    getAssignmentDetails() {
        return `The task ${this.task.getDetails()} is assigned to ${this.employee.getRole()}`;
    }
}
class TaskManager {
    constructor() {
        this.employees = [];
        this.manager = [];
        this.tasks = [];
        this.assignments = [];
    }
    addEmployee(name, role) {
        let id = this.employees.length + 1;
        let employee = new Employee1(id, name, role);
        this.employees.push(employee);
    }
    addManager(name, role, department) {
        let id = this.manager.length + 1;
        let manager = new Manager1(id, name, role, department);
        this.manager.push(manager);
    }
    addTask(title, deadline) {
        let id = this.tasks.length + 1;
        let task = new Task(id, title, new Date(deadline));
        this.tasks.push(task);
    }
    assignTask(employeeId, taskId) {
        let employee = this.employees.find(e => e.id === employeeId);
        let task = this.tasks.find(t => t.idTask === taskId);
        if (employee && task) {
            let assignment = new Assignment(employee, task);
            this.assignments.push(assignment);
        }
    }
    completeTask(taskId) {
        let task = this.tasks.find(t => t.idTask === taskId);
        if (task) {
            task.complete();
        }
    }
    listAssignments() {
        this.assignments.forEach(a => console.log(a.getAssignmentDetails()));
    }
}
class Main1 {
    constructor() {
        this.taskManager = new TaskManager();
    }
    bootstrap() {
        let loop1 = true;
        while (loop1) {
            console.log("1. Thêm nhân viên");
            console.log("2. Thêm quản lý");
            console.log("3. Thêm nhiệm vụ");
            console.log("4. Phân công nhiệm vụ");
            console.log("5. Nhiệm vụ hoàn thành");
            console.log("6. Hiển thị danh sách phân công");
            console.log("7. Dừng chương trình");
            let choice1 = prompt("Điền lựa chọn của bạn(1-7): ");
            switch (choice1) {
                case "1":
                    let name = prompt("Điền tên nhân viên: ");
                    let role = prompt("Điền vai trò nhân viên: ");
                    if (!name || !role) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this.taskManager.addEmployee(name, role);
                        console.log("Nhân viên đã được thêm");
                    }
                    break;
                case "2":
                    let name2 = prompt("Điền tên quản lý: ");
                    let role2 = prompt("Điền vai trò quản lý: ");
                    let department = prompt("Điền bộ phận: ");
                    if (!name2 || !role2 || !department) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this.taskManager.addManager(name2, role2, department);
                        console.log("Quản lý đã được thêm");
                    }
                    break;
                case "3":
                    let title = prompt("Điền tiêu đề nhiệm vụ: ");
                    let deadline = prompt("Điền hạn cuối: ");
                    if (!title || !deadline) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this.taskManager.addTask(title, deadline);
                        console.log("Nhiệm vụ đã được thêm");
                    }
                    break;
                case "4":
                    let employeeId = Number(prompt("Điền ID nhân viên: "));
                    let taskId = Number(prompt("Điền ID nhiệm vụ: "));
                    if (!employeeId || !taskId) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this.taskManager.assignTask(employeeId, taskId);
                        console.log("Nhiệm vụ đã được phân công");
                    }
                    break;
                case "5":
                    let taskId2 = Number(prompt("Điền ID nhiệm vụ: "));
                    if (!taskId2) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this.taskManager.completeTask(taskId2);
                        console.log("Nhiệm vụ đã hoàn thành");
                    }
                    break;
                case "6":
                    console.log("**********");
                    console.log("Danh sách phân công: ");
                    this.taskManager.listAssignments();
                    break;
                case "7":
                    loop1 = false;
                    console.log("Cảm ơn đã sử dụng chương trình");
                    break;
                default:
                    console.log("Nhập không hợp lệ");
            }
        }
    }
}
const main1 = new Main1();
main1.bootstrap();
