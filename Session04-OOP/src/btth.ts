// class ToDo {
//     private _id:number;
//     content: string;
//     status: string;

//     constructor(_id:number, content:string, status:string = "false"){
//         this._id = _id;
//         this.content = content;
//         this.status = status;
//     }

//     get id(){
//         return this._id;
//     }

//     set id(_id:number){
//         this._id = this.id;
//     }
// }

// class ToDoListManager {
//     private toDoList:ToDo[] = [];

//     addToDo(content:string){
//         let newId = Number(prompt("Nhập id"));
//         let newContent = content;
//         if(isNaN(newId)){
//             console.error("Id không hợp lệ");
//             return;
//         }
//         if(!newContent || newContent.trim() === ""){
//             console.error("Chưa nhập điều phải làm mới");
//             return;
//         }
//         let newToDo = new ToDo(newId, newContent);
//         this.toDoList.push(newToDo);

//         console.log(`Đã thêm ${newToDo.content} vào danh sách`);
//     }

//     removeToDo(index:number){
//         if(index >= 0 && index < this.toDoList.length){
//             let removed = this.toDoList.splice(index, 1);
//             console.log(`Đã xóa ${removed}`);
//         } else {
//             console.log("Index không hợp lệ");
//         }
//     }

//     updateToDo(index: number, content: string, status: string) {
//       if (index <= 0 || index > this.toDoList.length) {
//           console.error("Index không hợp lệ. Vui lòng nhập lại.");
//           return;
//       }

//       while (!content) {
//           content = prompt("Nội dung không được để trống. Vui lòng nhập nội dung mới:") || "";
//       }

//       while (!status) {
//           status = prompt("Trạng thái không được để trống. Vui lòng nhập trạng thái mới(done or false):") || "";
//       }

//       let todo = this.toDoList[index - 1];
//       todo.content = content;
//       todo.status = status;
  
//       console.log(`Đã cập nhật ToDo tại index ${index}:`, todo);
//     }
  

//     sortToDo(){
//         this.toDoList.sort((a,b) => a.id - b.id);
//         console.log("Danh sách sau khi sắp xếp:", this.toDoList);
//     }

//     findToDo(content:string){
//         let found = this.toDoList.filter((todo) => todo.content.toLowerCase().includes(content.toLowerCase()));
//         console.log("Kết quả tìm kiếm:", found);
//     }

//     listToDo(){
//         console.log("Danh sách ToDo:");
//         this.toDoList.forEach((todo, index) =>
//             console.log(`${index}: [${todo.id}] ${todo.content} - ${todo.status}`)
//         );
//     }
// }



// class Main {
//     static start() {
//       let manager = new ToDoListManager();
//       let input: string | null;
//       let isRunning = true; // Biến kiểm soát vòng lặp
  
//       while (isRunning) {
//         input = prompt(
//           "Chọn thao tác: (A) Thêm ToDo, (R) Xóa ToDo, (U) Cập nhật, (S) Sắp xếp, (F) Tìm kiếm, (L) Liệt kê, (E) Thoát"
//         );
  
//         switch (input?.toUpperCase()) {
//           case "A":
//             let content = prompt("Nhập nội dung:");
//             if (content) manager.addToDo(content);
//             break;
//           case "R":
//             let removeIndex = Number(prompt("Nhập id cần xóa:"));
//             manager.removeToDo(removeIndex);
//             break;
//           case "U":
//             let updateIndex = Number(prompt("Nhập id cần cập nhật:"));
//             let newContent = prompt("Nhập nội dung mới:");

//             while(!newContent){
//               newContent = prompt("Nội dung không được để trống.");
//             }

//             let newStatus = prompt("Nhập trạng thái mới:");
//             while(!newStatus){
//               newStatus = prompt("Trạng thái mới không được để trống.");
//             }
//             if (newContent) manager.updateToDo(updateIndex, newContent, newStatus);
//             break;
//           case "S":
//             manager.sortToDo();
//             break;
//           case "F":
//             let searchContent = prompt("Nhập nội dung cần tìm:");
//             if (searchContent) manager.findToDo(searchContent);
//             break;
//           case "L":
//             manager.listToDo();
//             break;
//           case "E":
//             console.log("Kết thúc chương trình.");
//             isRunning = false; // Dừng vòng lặp
//             break;
//           default:
//             console.error("Lựa chọn không hợp lệ.");
//         }
//       }
//     }
// }

// Main.start();