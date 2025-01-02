class Person {
    private _name: string;
    private _id: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._id = age;
    }
    getName(): string {
        return this._name;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
}

class Employee extends Person {
    private _role: string;
    constructor(name: string, age: number, role: string) {
        super(name, age);
        this._role = role;
    }

    getRole(): string {
        return this._role;
    }
}

class Manager extends Employee {
    private _department: string;
    constructor(name: string, age: number, role: string, department: string) {
        super(name, age, role);
        this._department = department;
    }
    getDepartment(): string {
        return this._department;
    }
}

class Task {
    private _id:number;
    private _title:string;
    private _deadline:string;
    private _isCompleted:boolean;

    constructor(id:number, title:string, deadline:string){
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = false;
    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(title:string){
        this._title = title;
    }

    completed(){
        this._isCompleted = true;
    }

    getDetails(){
        return `Task ${this._id}: ${this._title} deadline: ${this._deadline} is ${this._isCompleted ? "completed" : "incompleted"}`;
    }
}

class Assignment {
    private _employee: Employee;
    private _task: Task;

    constructor(employee: Employee, task: Task){
        this._employee = employee;
        this._task = task;
    }

    getAssignmentDetails(){
        return `${this._employee.getName()} is assigned to ${this._task.getDetails()}`;
    }
}

interface assignTask{
    employeeId: number;
    taskId: number;
    assignTask(employeeId:number,taskId:number):void;
}

interface completeTask{
    taskId: number;
    completeTask(taskId:number):void;
}

class TaskManager implements assignTask, completeTask{
    private _employees: Employee[];
    private _manager: Manager[];
    private _tasks: Task[];
    private _assignments: Assignment[];
    public employeeId: number;
    public taskId: number;


    constructor(employeeId: number, taskId: number){
        this._employees = [];
        this._manager = [];
        this._tasks = [];
        this._assignments = [];
        this.employeeId = employeeId;
        this.taskId = taskId;
    }

    get employees(){
        return this._employees;
    }
    
    get tasks(){
        return this._tasks;
    }

    addEmployee(name: string, role: string){
        let id = this._employees.length + 1;
        let employee = new Employee(name, id, role);
        this._employees.push(employee);
    }

    addManager(name: string, role: string, department: string){
        let id = this._manager.length + 1;
        let manager = new Manager(name, id, role, department);
        this._manager.push(manager);
    }

    addTask(title: string, deadline: string){
        let id = this._tasks.length + 1;
        let task = new Task(id, title, deadline);
        this._tasks.push(task);
    }

    assignTask(employeeId: number, taskId: number){
        let employee = this._employees.find((e:Employee) => e.id === employeeId);
        let task = this._tasks.find((t:Task) => t.id === taskId);
        if(!employee || !task){
            console.log("Error!!");
        } else {
            let assignment = new Assignment(employee, task);
            this._assignments.push(assignment);
        }
    }

    completeTask(taskId: number){
        let task = this._tasks.find((t:Task) => t.id === taskId);
        if(!task){
            console.log("Công việc không tồn tại!!");
        } else {
            task.completed();
        }
    }

    listAssignments(){
        this._assignments.forEach((a:Assignment) => {
            console.log(a.getAssignmentDetails());
        });
    }
}

class Main{
    private _taskManager: TaskManager;

    constructor(employeeId: number, taskId: number){
        this._taskManager = new TaskManager(employeeId, taskId);
    }

    bootstrap(){
        let loop = true;
        while(loop){
            console.log("1.Thêm nhân viên");
            console.log("2.Thêm quản lý");
            console.log("3.Thêm công việc");
            console.log("4.Phân công công việc cho nhân viên");
            console.log("5.Đánh dấu hoàn thành công việc");
            console.log("6.Hiển thị danh sách công việc đã phân công");
            console.log("7.Dừng chương trình");

            let choice = prompt("Nhập lựa chọn(1-7): ");
            switch(choice){
                case "1":
                    let inputName = prompt("Nhập vào tên nhân viên:");
                    let inputRole = prompt("Nhập vào vai trò:");
                    if(!inputName || !inputRole){
                        console.log("Nhập lại tên nhân viên và vai trò!!");
                    } else {
                        this._taskManager.addEmployee(inputName, inputRole);
                        console.log(`Nhân viên ${inputName} đã được thêm vào hệ thống!!`);
                    }
                    break;
                case "2":
                    let inputManagerName = prompt("Nhập vào tên quản lý:");
                    let inputManagerRole = prompt("Nhập vào vai trò:");
                    let inputDepartment = prompt("Nhập vào bộ phận:");
                    if(!inputManagerName || !inputManagerRole || !inputDepartment){
                        console.log("Nhập lại tên quản lý, vai trò và bộ phận!!");
                    } else {
                        this._taskManager.addManager(inputManagerName, inputManagerRole, inputDepartment);
                        console.log(`Quản lý ${inputManagerName} đã được thêm vào hệ thống!!`);
                    }
                    break;
                case "3":
                    let inputTitle = prompt("Nhập vào tiêu đề công việc:");
                    let inputDeadline = prompt("Nhập vào hạn cuối của công việc:");
                    if(!inputTitle || !inputDeadline){
                        console.log("Nhập lại tiêu đề và hạn cuối của công việc!!");
                    } else {
                        this._taskManager.addTask(inputTitle, inputDeadline);
                        console.log(`Công việc ${inputTitle} đã được thêm vào hệ thống!!`);
                    }
                    break;
                case "4":
                    let inputEmployee = prompt("Nhập vào tên của nhân viên:");
                    let inputTask = prompt("Nhập vào công việc:");
                    console.log(this._taskManager.employees);
                    console.log(this._taskManager.tasks);
                    if(!inputEmployee || !inputTask){
                        console.log("Nhập lại tên nhân viên và công việc!!");
                    } else {
                        let findIdEmployeeToBorrow = this._taskManager.employees.find((efind:Employee) => efind.name === inputEmployee);
                        console.log(findIdEmployeeToBorrow);
                        let findIdTaskToBorrow = this._taskManager.tasks.find((tfind:Task) => tfind.title === inputTask);
                        console.log(findIdTaskToBorrow);
                        if(findIdEmployeeToBorrow === undefined || findIdTaskToBorrow === undefined){
                            console.log("Nhân viên hoặc công việc không tồn tại!!");
                        } else {
                            this._taskManager.assignTask(findIdEmployeeToBorrow.id, findIdTaskToBorrow.id);
                            console.log(`Nhân viên ${inputEmployee} đã được phân công công việc ${inputTask}!!`);
                        }
                    }
                    break;
                case "5":
                    let inputTaskToComplete = prompt("Nhập vào công việc muốn hoàn thành:");
                    let findIdTaskToComplete = this._taskManager.tasks.find((tfind:Task) => tfind.title === inputTaskToComplete);
                    if(findIdTaskToComplete === undefined){
                        console.log("Công việc không tồn tại!!");
                    } else {
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