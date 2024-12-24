// class ToDo {
//     private _id: number;
//     private _content: string;
//     private _status: boolean;

//     constructor(_id:number, _content:string, _status:boolean = false){
//         this._id = _id;
//         this._content = _content;
//         this._status = _status;
//     }

//     get id(){
//         return this._id;
//     }

//     get content(){
//         return this._content;
//     }

//     get status(){
//         return this._status;
//     }
// }

// class ToDoListManager{
//     private _todos: ToDo[];

//     constructor(){
//         this._todos = [];
//     }

//     addToDo(content: string):void{
//         let id = Math.random()
//         let newToDo = new ToDo(id, content);
//         this._todos.push(newToDo);
//         this.listToDo();
//     }

//     removeToDo(index:number):void{
//         this._todos.splice(index, 1);
//     }

//     updateToDo(index:number, content:string): void {

//     }

//     sortToDo():void{
//         //Hiển thị ra danh sách công việc đẫ được sắp xếp theo tên
//     }

//     findToDo(content:string): number{
//         return -1;
//     }

//     listToDo():void{
//         console.log("****************");
//         if(this._todos.length === 0){
//             console.log("Chưa có bất kì công việc nào cả");
//         } else {
//             this._todos.forEach(function(element: ToDo, index:number){
//                 console.log(`${index + 1}. ${element.content} - ${element.status ? "Hoàn thành" : "Chưa hoàn thành"}`);
//             });
//         }
//         console.log("****************");
//     }

//     getToDoLength():number{
//         return this._todos.length;
//     }
// }

// class Main {
//     private _toDoManager: ToDoListManager;

//     constructor(){
//         this._toDoManager = new ToDoListManager();
//     }

//     bootstrap():void {
//         let loop:boolean = true;
//         while(loop){
//             console.log("Chương trình bắt đầu....");
//             console.log("Menu chức năng:");
//             console.log("1.In ra danh sách công việc.");
//             console.log("2.Thêm công việc vào cuối danh sách.");
//             console.log("3.Xóa công việc tại vị trí bất kỳ.");
//             console.log("4.Sửa nội dung công việc tại vị trí bất kỳ.");
//             console.log("5.Sắp xếp và in ra nội dung công việc.");
//             console.log("6.Tìm kiếm todo.");
//             console.log("7.Dừng chương trình.");

//             let choices = prompt("Nhập vào lựa chọn(1-7)");

//             switch (choices){
//                 case "1":
//                     this._toDoManager.listToDo();
//                     break;
//                 case "2":
//                     let content = prompt("Mời bạn nhập vào công việc");
//                     if(!content){
//                         console.log("Công việc thêm mới không hợp lệ")
//                     } else {
//                         this._toDoManager.addToDo(content);
//                     }
//                     break;
//                 case "3":
//                     let input = prompt("Mời bạn nhập vào vị trí muốn xóa");
//                     if(!input){
//                         console.log("Vị trí cần xóa không hợp lệ");
//                     } else {
//                         let deleteIndex = +input;
//                         if(Number.isNaN(deleteIndex) || deleteIndex < 0 || deleteIndex > this._toDoManager.getToDoLength()){
//                             console.log("Vị trí không hợp lệ")
//                         } else {
//                             this._toDoManager.removeToDo(deleteIndex);
//                             this._toDoManager.listToDo();
//                         }
//                     }
//                     break;
//                 case "4":
//                     break;
//                 case "5":
//                     break;
//                 case "6":
//                     break;
//                 case "7":
//                     console.log("Cảm ơn đã sử dụng.")
//                     loop = false;
//                     break;
//                 default:
//                     console.log("Xin mời nhập lại.");
//                     break;
//             }
//         }
//     }
// }

// const app = new Main();
// app.bootstrap();