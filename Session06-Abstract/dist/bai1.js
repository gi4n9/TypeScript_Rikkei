"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._id = age;
    }
    getName() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this._role = role;
    }
    getRole() {
        return this._role;
    }
}
class Manager extends Employee {
    constructor(name, age, role, department) {
        super(name, age, role);
        this._department = department;
    }
    getDepartment() {
        return this._department;
    }
}
class Task {
    constructor(id, title, deadline) {
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = false;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    completed() {
        this._isCompleted = true;
    }
    getDetails() {
        return `Task ${this._id}: ${this._title} deadline: ${this._deadline} is ${this._isCompleted ? "completed" : "incompleted"}`;
    }
}
class Assignment {
    constructor(employee, task) {
        this._employee = employee;
        this._task = task;
    }
    getAssignmentDetails() {
        return `${this._employee.getName()} is assigned to ${this._task.getDetails()}`;
    }
}
class TaskManager {
    constructor(employeeId, taskId) {
        this._employees = [];
        this._manager = [];
        this._tasks = [];
        this._assignments = [];
        this.employeeId = employeeId;
        this.taskId = taskId;
    }
    get employees() {
        return this._employees;
    }
    get tasks() {
        return this._tasks;
    }
    addEmployee(name, role) {
        let id = this._employees.length + 1;
        let employee = new Employee(name, id, role);
        this._employees.push(employee);
    }
    addManager(name, role, department) {
        let id = this._manager.length + 1;
        let manager = new Manager(name, id, role, department);
        this._manager.push(manager);
    }
    addTask(title, deadline) {
        let id = this._tasks.length + 1;
        let task = new Task(id, title, deadline);
        this._tasks.push(task);
    }
    assignTask(employeeId, taskId) {
        let employee = this._employees.find((e) => e.id === employeeId);
        let task = this._tasks.find((t) => t.id === taskId);
        if (!employee || !task) {
            console.log("Error!!");
        }
        else {
            let assignment = new Assignment(employee, task);
            this._assignments.push(assignment);
        }
    }
    completeTask(taskId) {
        let task = this._tasks.find((t) => t.id === taskId);
        if (!task) {
            console.log("Công việc không tồn tại!!");
        }
        else {
            task.completed();
        }
    }
    listAssignments() {
        this._assignments.forEach((a) => {
            console.log(a.getAssignmentDetails());
        });
    }
}
class Main {
    constructor(employeeId, taskId) {
        this._taskManager = new TaskManager(employeeId, taskId);
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("1.Thêm nhân viên");
            console.log("2.Thêm quản lý");
            console.log("3.Thêm công việc");
            console.log("4.Phân công công việc cho nhân viên");
            console.log("5.Đánh dấu hoàn thành công việc");
            console.log("6.Hiển thị danh sách công việc đã phân công");
            console.log("7.Dừng chương trình");
            let choice = prompt("Nhập lựa chọn(1-7): ");
            switch (choice) {
                case "1":
                    let inputName = prompt("Nhập vào tên nhân viên:");
                    let inputRole = prompt("Nhập vào vai trò:");
                    if (!inputName || !inputRole) {
                        console.log("Nhập lại tên nhân viên và vai trò!!");
                    }
                    else {
                        this._taskManager.addEmployee(inputName, inputRole);
                        console.log(`Nhân viên ${inputName} đã được thêm vào hệ thống!!`);
                    }
                    break;
                case "2":
                    let inputManagerName = prompt("Nhập vào tên quản lý:");
                    let inputManagerRole = prompt("Nhập vào vai trò:");
                    let inputDepartment = prompt("Nhập vào bộ phận:");
                    if (!inputManagerName || !inputManagerRole || !inputDepartment) {
                        console.log("Nhập lại tên quản lý, vai trò và bộ phận!!");
                    }
                    else {
                        this._taskManager.addManager(inputManagerName, inputManagerRole, inputDepartment);
                        console.log(`Quản lý ${inputManagerName} đã được thêm vào hệ thống!!`);
                    }
                    break;
                case "3":
                    let inputTitle = prompt("Nhập vào tiêu đề công việc:");
                    let inputDeadline = prompt("Nhập vào hạn cuối của công việc:");
                    if (!inputTitle || !inputDeadline) {
                        console.log("Nhập lại tiêu đề và hạn cuối của công việc!!");
                    }
                    else {
                        this._taskManager.addTask(inputTitle, inputDeadline);
                        console.log(`Công việc ${inputTitle} đã được thêm vào hệ thống!!`);
                    }
                    break;
                case "4":
                    let inputEmployee = prompt("Nhập vào tên của nhân viên:");
                    let inputTask = prompt("Nhập vào công việc:");
                    console.log(this._taskManager.employees);
                    console.log(this._taskManager.tasks);
                    if (!inputEmployee || !inputTask) {
                        console.log("Nhập lại tên nhân viên và công việc!!");
                    }
                    else {
                        let findIdEmployeeToBorrow = this._taskManager.employees.find((efind) => efind.name === inputEmployee);
                        console.log(findIdEmployeeToBorrow);
                        let findIdTaskToBorrow = this._taskManager.tasks.find((tfind) => tfind.title === inputTask);
                        console.log(findIdTaskToBorrow);
                        if (findIdEmployeeToBorrow === undefined || findIdTaskToBorrow === undefined) {
                            console.log("Nhân viên hoặc công việc không tồn tại!!");
                        }
                        else {
                            this._taskManager.assignTask(findIdEmployeeToBorrow.id, findIdTaskToBorrow.id);
                            console.log(`Nhân viên ${inputEmployee} đã được phân công công việc ${inputTask}!!`);
                        }
                    }
                    break;
                case "5":
                    let inputTaskToComplete = prompt("Nhập vào công việc muốn hoàn thành:");
                    let findIdTaskToComplete = this._taskManager.tasks.find((tfind) => tfind.title === inputTaskToComplete);
                    if (findIdTaskToComplete === undefined) {
                        console.log("Công việc không tồn tại!!");
                    }
                    else {
                        this._taskManager.completeTask(findIdTaskToComplete.id);
                        console.log(`Công việc ${inputTaskToComplete} đã được hoàn thành!!`);
                    }
                    break;
                case "6":
                    this._taskManager.listAssignments();
                    break;
                case "7":
                    console.log("Cảm ơn bạn đã sử dụng chương trình");
                    loop = false;
                    break;
            }
        }
    }
}
const main = new Main(1, 1);
main.bootstrap();
