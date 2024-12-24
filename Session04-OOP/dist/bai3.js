"use strict";
class Book {
    constructor(_id, _title, _author, _year) {
        this._id = _id;
        this._title = _title;
        this._author = _author;
        this._year = _year;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
}
class LibraryManager {
    constructor() {
        this._book = [];
    }
    get book() {
        return this._book;
    }
    addBook(title, author, year) {
        let newIdAdded = Math.random();
        let newBook = new Book(newIdAdded, title, author, year);
        this._book.push(newBook);
    }
    listBook() {
        console.log(this._book);
    }
    removeBook(id) {
        this._book.splice(id, 1);
    }
    searchBook(title) {
        this._book.forEach(function (element, index) {
            console.log(index + 1, title, element.author, element.year);
        });
    }
}
class Main3 {
    constructor() {
        this._LibraryManager = new LibraryManager();
    }
    bootstrap() {
        let loop3 = true;
        while (loop3) {
            console.log("1.Thêm sách vào thư viện");
            console.log("2.Hiển thị danh sách sách");
            console.log("3.Xóa sách theo mã sách");
            console.log("4.Tìm kiếm sách theo tên");
            console.log("5.Dừng chương trình");
            let choices3 = prompt("Mời bạn nhập vào (1-5):");
            switch (choices3) {
                case "1":
                    let inputTitle = prompt("Nhập title:");
                    let inputAuthor = prompt("Nhập author:");
                    let inputYear = Number(prompt("Nhập year"));
                    if (!inputTitle || !inputAuthor || !inputYear) {
                        console.log("Mời nhập lại:");
                    }
                    else {
                        this._LibraryManager.addBook(inputTitle, inputAuthor, inputYear);
                        console.log(`Đã thêm ${inputTitle} vào thư viện`);
                    }
                    break;
                case "2":
                    this._LibraryManager.listBook();
                    break;
                case "3":
                    let inputTitletoRemove = prompt("Nhập title sách muốn xóa:");
                    if (!inputTitletoRemove) {
                        console.error("Mời nhập lại!!");
                    }
                    else {
                        let idToRemove = this._LibraryManager.book.find((b) => b.title == inputTitletoRemove);
                        if (idToRemove == undefined) {
                            console.log("Không tìm thấy sách để xóa");
                            break;
                        }
                        else {
                            this._LibraryManager.removeBook(idToRemove.id);
                            console.log(`Đã xóa ${idToRemove.title}`);
                        }
                    }
                    break;
                case "4":
                    let inputTitleToSearch = prompt("Nhập sách muốn tìm kiếm:");
                    if (!inputTitleToSearch) {
                        console.error("Bạn chưa nhập sách cần tìm!!!");
                    }
                    else {
                        let titleToSearch = this._LibraryManager.book.find((b) => b.title == inputTitleToSearch);
                        if (titleToSearch == undefined) {
                            console.log("Không tìm thấy sách bạn cần");
                        }
                        else {
                            this._LibraryManager.searchBook(titleToSearch.title);
                        }
                    }
                    break;
                case "5":
                    loop3 = false;
                    console.log("Cảm ơn bạn đã sử dụng");
                    break;
            }
        }
        console.log("Bắt đầu chương trình");
    }
}
const dev3 = new Main3();
dev3.bootstrap();
