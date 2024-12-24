"use strict";
class Employee {
    constructor(_eId, _eName) {
        this._eId = _eId;
        this._eName = _eName;
    }
    get eId() {
        return this._eId;
    }
    get eName() {
        return this._eName;
    }
}
class Task {
    constructor(_taskId, _taskTitle, _taskDeadline, _taskIsCompleted = false) {
        this._taskId = _taskId;
        this._taskTitle = _taskTitle;
        this._taskDeadline = _taskDeadline;
        this._taskIsCompleted = _taskIsCompleted;
    }
    get taskId() {
        return this._taskId;
    }
    get taskTitle() {
        return this._taskTitle;
    }
    get taskDeadline() {
        return this._taskDeadline;
    }
    get taskIsCompleted() {
        return this._taskIsCompleted;
    }
    set taskIsCompleted(_taskIsCompleted) {
        this._taskIsCompleted = _taskIsCompleted;
    }
}
class Assignment {
    constructor(_employee, _task) {
        this._employee = _employee;
        this._task = _task;
    }
}
class TaskManager {
    constructor() {
        this._employees = [];
        this._tasks = [];
        this._assignments = [];
    }
    get employee() {
        return this._employees;
    }
    get task() {
        return this._tasks;
    }
    addEmployee(_eName) {
        let id = Math.random();
        let newEmployee = new Employee(id, _eName);
        this._employees.push(newEmployee);
    }
    addTask(_taskTitle, _taskDeadline) {
        let taskId = Math.random();
        let newTask = new Task(taskId, _taskTitle, _taskDeadline);
        this._tasks.push(newTask);
        console.log(`${newTask} đã được thêm vào`);
    }
    assignTask(_eId, _taskId) {
        const employee = this._employees.find(e => e.eId === _eId);
        const task = this._tasks.find(t => t.taskId === _taskId);
        if (!employee) {
            console.log("Không tìm thấy nhân viên");
            return;
        }
        if (!task) {
            console.log("Không tìm thấy task");
            return;
        }
        let assignment = new Assignment(employee, task);
        this._assignments.push(assignment);
        console.log(`Việc ${task.taskTitle} đã được giao cho ${employee.eName}`);
    }
    completeTask(_taskId) {
        const task = this._tasks.find((t => t.taskId === _taskId));
        if (!task) {
            console.error("Không tìm thấy nhiệm vụ");
            return;
        }
        task.taskIsCompleted = true;
        console.log(`Nhiệm vụ ${task.taskTitle} đã hoàn thành`);
        console.log("test");
    }
    listTasks() {
        console.log(this._tasks);
    }
    listEmployee() {
        console.log(this._employees);
    }
}
class Main6 {
    constructor() {
        this._taskManagers = new TaskManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Chương trình bắt đầu....");
            console.log("Menu chức năng:");
            console.log("1.Thêm nhân viên mới.");
            console.log("2.Thêm task mới.");
            console.log("3.Gán task cho nhân viên");
            console.log("4.Đánh dấu task hoàn thành");
            console.log("5.Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có)");
            console.log("6.Dừng chương trình.");
            let choices = prompt("Nhập vào lựa chọn(1-6)");
            switch (choices) {
                case "1":
                    let newName = prompt("Mời nhập tên muốn thêm mới");
                    if (!newName) {
                        console.log("Chưa nhập tên, vui lòng nhập lại");
                    }
                    else {
                        this._taskManagers.addEmployee(newName);
                        console.log("**********");
                        console.log(this._taskManagers.listEmployee());
                    }
                    break;
                case "2":
                    let newTask = prompt("Mời nhập task muốn thêm mới");
                    let newTaskDl = prompt("Mời nhập deadline");
                    if (!newTask || !newTaskDl) {
                        console.log("Chưa nhập task hoặc sai task deadline, vui lòng nhập lại");
                    }
                    else {
                        this._taskManagers.addTask(newTask, newTaskDl);
                        console.log("**********");
                        console.log(this._taskManagers.listTasks());
                    }
                    break;
                case "3":
                    let findEmployee = prompt("Nhập tên nhân viên");
                    let findTask = prompt("Nhập task:");
                    if (!findEmployee) {
                        console.log("Tên nhân viên không hợp lệ");
                    }
                    else if (!findTask) {
                        console.log("Task không hợp lệ");
                    }
                    else {
                        let eFind = this._taskManagers.employee.find((e) => e.eName == findEmployee);
                        let tFind = this._taskManagers.task.find((t) => t.taskTitle == findTask);
                        if (eFind === undefined || tFind === undefined) {
                            console.error("Sai tên nhân viên hoặc task rồi nhập lại đi!!!");
                            break;
                        }
                        this._taskManagers.assignTask(eFind.eId, tFind.taskId);
                    }
                    break;
                case "4":
                    let changeStatus = prompt("Nhập task muốn hoàn thành");
                    let statusId = this._taskManagers.task.find((t) => t.taskTitle == changeStatus);
                    if (!changeStatus) {
                        console.error("Bạn chưa nhập task đúng định dạng, vui lòng nhập lại");
                    }
                    else {
                        if (statusId === undefined) {
                            console.error("Bạn chưa nhập task");
                        }
                        else {
                            this._taskManagers.completeTask(statusId.taskId);
                        }
                    }
                    break;
                case "5":
                    this._taskManagers.listTasks();
                    break;
                case "6":
                    console.log("Cảm ơn đã sử dụng");
                    loop = false;
                    break;
                default:
                    console.log("Xin mời nhập lại.");
                    break;
            }
        }
    }
}
const dev6 = new Main6();
dev6.bootstrap();
