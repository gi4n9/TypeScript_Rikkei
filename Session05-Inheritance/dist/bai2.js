"use strict";
class Person2 {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    getName() {
        return this._name;
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
}
class Member2 extends Person2 {
    constructor(id, name, membershipType) {
        super(id, name);
        this._membershipType = membershipType;
    }
    getMembershipType() {
        return this._membershipType;
    }
}
class Librarian2 extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this._position = position;
    }
    getPosition() {
        return this._position;
    }
}
class Book2 {
    constructor(id, title, author, isBorrowed = false) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._isBorrowed = Boolean(isBorrowed);
    }
    get title() {
        return this._title;
    }
    set id(id) {
        this._id = id;
    }
    borrow() {
        this._isBorrowed = true;
    }
    returnBook() {
        this._isBorrowed = false;
    }
    getDetails() {
        return `Book: ${this._title} - Author: ${this._author}`;
    }
}
class BorrowRecord2 {
    constructor(member, book) {
        this._member = member;
        this._book = book;
    }
    getRecordDetails() {
        return `${this._member.getName()} borrowed ${this._book.getDetails()}`;
    }
}
class LibraryManager2 {
    constructor() {
        this._members = [];
        this._librarians = [];
        this._books = [];
        this._borrowRecords = [];
    }
    get members() {
        return this._members;
    }
    get books() {
        return this._books;
    }
    addMember(name, membershipType) {
        const newMember = new Member2(this._members.length + 1, name, membershipType);
        this._members.push(newMember);
    }
    addLibrarian(name, position) {
        const newLibrarian = new Librarian2(this._librarians.length + 1, name, position);
        this._librarians.push(newLibrarian);
    }
    addBook(title, author) {
        const newBook = new Book2(this._books.length + 1, title, author);
        this._books.push(newBook);
    }
    borrowBook(memberId, bookId) {
        const member = this._members.find((m) => m.id === memberId);
        const book = this._books.find((b) => b.id === bookId);
        if (member === undefined || book === undefined) {
            return;
        }
        const newBorrowRecord = new BorrowRecord2(member, book);
        this._borrowRecords.push(newBorrowRecord);
        book.borrow();
    }
    returnBook(bookId) {
        const book = this._books.find((b) => b.id === bookId);
        if (book === undefined) {
            return;
        }
        const borrowRecord = this._borrowRecords.find((br) => br.getRecordDetails().includes(book.getDetails()));
        if (borrowRecord === undefined) {
            return;
        }
        this._borrowRecords = this._borrowRecords.filter((br) => br.getRecordDetails() !== borrowRecord.getRecordDetails());
        book.returnBook();
    }
    listBorrowRecords() {
        this._borrowRecords.forEach((br) => console.log(br.getRecordDetails()));
    }
}
class Main2 {
    constructor() {
        this._libraryManager = new LibraryManager2();
    }
    bootstrap() {
        let loop2 = true;
        while (loop2) {
            console.log("1.Thêm thành viên.");
            console.log("2.Thêm thủ thư.");
            console.log("3.Thêm sách.");
            console.log("4.Mượn sách.");
            console.log("5.Trả sách.");
            console.log("6.Hiển thị danh sách bản ghi mượn sách.");
            console.log("7.Dừng chương trình.");
            let choice2 = prompt("Điền vào giá trị (1-7):");
            switch (choice2) {
                case "1":
                    let inputName = prompt("Nhập tên thành viên:");
                    let inputMembershipType = prompt("Nhập loại thành viên:");
                    if (!inputName || !inputMembershipType) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this._libraryManager.addMember(inputName, inputMembershipType);
                        console.log(`Thành viên ${inputName} đã được thêm`);
                    }
                    break;
                case "2":
                    let inputLibrarian = prompt("Nhập tên thủ thư:");
                    let inputPosition = prompt("Nhập vị trí thủ thư:");
                    if (!inputLibrarian || !inputPosition) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this._libraryManager.addLibrarian(inputLibrarian, inputPosition);
                        console.log(`Thủ thư ${inputLibrarian} đã được thêm`);
                    }
                    break;
                case "3":
                    let inputBook = prompt("Nhập tên sách:");
                    let inputAuthor = prompt("Nhập tác giả:");
                    if (!inputBook || !inputAuthor) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        this._libraryManager.addBook(inputBook, inputAuthor);
                        console.log(`Sách ${inputBook} đã được thêm`);
                    }
                    break;
                case "4":
                    let inputMemberToBorrow = prompt("Nhập tên thành viên mượn sách:");
                    let inputBookToBorrow = prompt("Nhập tên sách mượn:");
                    if (!inputMemberToBorrow || !inputBookToBorrow) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        let mFind = this._libraryManager.members.find((member) => member.name === inputMemberToBorrow);
                        let bFind = this._libraryManager.books.find((book) => book.title === inputBookToBorrow);
                        if (mFind === undefined || bFind === undefined) {
                            console.log("Không tìm thấy thành viên hoặc sách");
                            break;
                        }
                        else {
                            this._libraryManager.borrowBook(mFind.id, bFind.id);
                            console.log(`Sách ${inputBookToBorrow} đã được ${inputMemberToBorrow} mượn`);
                        }
                    }
                    break;
                case "5":
                    let inputBookToReturn = prompt("Nhập tên sách muốn trả:");
                    if (!inputBookToReturn) {
                        console.log("Nhập không hợp lệ");
                    }
                    else {
                        let bFind = this._libraryManager.books.find((book) => book.title === inputBookToReturn);
                        if (bFind === undefined) {
                            console.log("Không tìm thấy sách");
                            break;
                        }
                        else {
                            this._libraryManager.returnBook(bFind.id);
                            console.log(`Sách ${inputBookToReturn} đã được trả`);
                        }
                    }
                    break;
                case "6":
                    this._libraryManager.listBorrowRecords();
                    break;
                case "7":
                    loop2 = false;
                    console.log("Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!");
                    break;
            }
        }
    }
}
const main2 = new Main2();
main2.bootstrap();
