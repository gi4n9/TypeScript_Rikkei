class Person2 {
    private _id:number;
    private _name:string;

    constructor(id:number, name:string){
        this._id = id;
        this._name = name;
    }

    getName(){
        return this._name;
    }

    get name(){
        return this._name;
    }

    get id(){
        return this._id;
    }
}

class Member2 extends Person2 {
    private _membershipType:string;

    constructor(id:number, name:string, membershipType:string){
        super(id,name);
        this._membershipType = membershipType;
    }

    getMembershipType():string{
        return this._membershipType;
    }
    
}

class Librarian2 extends Person2 {
    private _position:string;

    constructor(id:number, name:string, position:string){
        super(id,name);
        this._position = position;
    }

    getPosition():string{
        return this._position;
    }
}

class Book2 {
    private _id:number;
    private _title:string;
    private _author:string;
    private _isBorrowed:boolean;

    constructor(id:number, title:string, author:string, isBorrowed:boolean = false){
        this._id = id;
        this._title = title;
        this._author = author;
        this._isBorrowed = Boolean(isBorrowed);
    }

    get title():string{
        return this._title;
    }

    set id(id:number){
        this._id = id;
    }

    borrow():void{
        this._isBorrowed = true;
    }

    returnBook():void{
        this._isBorrowed = false;
    }

    getDetails():string{
        return `Book: ${this._title} - Author: ${this._author}`;
    }
}

class BorrowRecord2{
    private _member:Member2;
    private _book:Book2;

    constructor(member:Member2, book:Book2){
        this._member = member;
        this._book = book;
    }

    getRecordDetails():string{
        return `${this._member.getName()} borrowed ${this._book.getDetails()}`;
    }

}

class LibraryManager2 {
    private _members:Member2[];
    private _librarians:Librarian2[];
    private _books:Book2[];
    private _borrowRecords:BorrowRecord2[];

    constructor(){
        this._members = [];
        this._librarians = [];
        this._books = [];
        this._borrowRecords = [];
    }

    get members():Member2[]{
        return this._members;
    }

    get books():Book2[]{
        return this._books;
    }

    addMember(name: string, membershipType: string): void {
        const newMember = new Member2(this._members.length + 1, name, membershipType);
        this._members.push(newMember);
    }

    addLibrarian(name: string, position: string): void{
        const newLibrarian = new Librarian2(this._librarians.length + 1, name, position);
        this._librarians.push(newLibrarian);
    }

    addBook(title: string, author: string): void{
        const newBook = new Book2(this._books.length + 1, title, author);
        this._books.push(newBook);
    }

    borrowBook(memberId: number, bookId: number): void{
        const member = this._members.find((m:Member2) => m.id === memberId);
        const book = this._books.find((b:Book2) => b.id === bookId);
        if(member === undefined || book === undefined){
            return;
        }
        const newBorrowRecord = new BorrowRecord2(member, book);
        this._borrowRecords.push(newBorrowRecord);
        book.borrow();
    }

    returnBook(bookId: number): void{
        const book = this._books.find((b:Book2) => b.id === bookId);
        if(book === undefined){
            return;
        }
        const borrowRecord = this._borrowRecords.find((br:BorrowRecord2) => br.getRecordDetails().includes(book.getDetails()));
        if(borrowRecord === undefined){
            return;
        }
        this._borrowRecords = this._borrowRecords.filter((br:BorrowRecord2) => br.getRecordDetails() !== borrowRecord.getRecordDetails());
        book.returnBook();
    }

    listBorrowRecords(): void{
        this._borrowRecords.forEach((br:BorrowRecord2) => console.log(br.getRecordDetails()));
    }
}

class Main2{
    private _libraryManager:LibraryManager2;

    constructor(){
        this._libraryManager = new LibraryManager2();
    }

    bootstrap():void{
        let loop2:boolean = true;
        while(loop2){
            console.log("1.Thêm thành viên.");
            console.log("2.Thêm thủ thư.");
            console.log("3.Thêm sách.");
            console.log("4.Mượn sách.");
            console.log("5.Trả sách.");
            console.log("6.Hiển thị danh sách bản ghi mượn sách.");
            console.log("7.Dừng chương trình.");

            let choice2 = prompt("Điền vào giá trị (1-7):");
            switch(choice2){
                case "1":
                    let inputName = prompt("Nhập tên thành viên:");
                    let inputMembershipType = prompt("Nhập loại thành viên:");
                    if(!inputName || !inputMembershipType){
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._libraryManager.addMember(inputName,inputMembershipType);
                        console.log(`Thành viên ${inputName} đã được thêm`);
                    }
                    break;
                case "2":
                    let inputLibrarian = prompt("Nhập tên thủ thư:");
                    let inputPosition = prompt("Nhập vị trí thủ thư:");
                    if(!inputLibrarian || !inputPosition){
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._libraryManager.addLibrarian(inputLibrarian,inputPosition);
                        console.log(`Thủ thư ${inputLibrarian} đã được thêm`);
                    }
                    break;
                case "3":
                    let inputBook = prompt("Nhập tên sách:");
                    let inputAuthor = prompt("Nhập tác giả:");
                    if(!inputBook || !inputAuthor){
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._libraryManager.addBook(inputBook,inputAuthor);
                        console.log(`Sách ${inputBook} đã được thêm`);
                    }
                    break;
                case "4":
                    let inputMemberToBorrow = prompt("Nhập tên thành viên mượn sách:");
                    let inputBookToBorrow = prompt("Nhập tên sách mượn:");
                    if(!inputMemberToBorrow || !inputBookToBorrow){
                        console.log("Nhập không hợp lệ");
                    } else {
                        let mFind = this._libraryManager.members.find((member:Member2) => member.name === inputMemberToBorrow);
                        let bFind = this._libraryManager.books.find((book:Book2) => book.title === inputBookToBorrow);
                        if(mFind === undefined || bFind === undefined){
                            console.log("Không tìm thấy thành viên hoặc sách");
                            break;
                        } else {
                            this._libraryManager.borrowBook(mFind.id,bFind.id);
                            console.log(`Sách ${inputBookToBorrow} đã được ${inputMemberToBorrow} mượn`);
                        }
                    }
                    break;
                case "5":
                    let inputBookToReturn = prompt("Nhập tên sách muốn trả:");
                    if(!inputBookToReturn){
                        console.log("Nhập không hợp lệ");
                    } else {
                        let bFind = this._libraryManager.books.find((book:Book2) => book.title === inputBookToReturn);
                        if(bFind === undefined){
                            console.log("Không tìm thấy sách");
                            break;
                        } else {
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