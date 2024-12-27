"use strict";
class Person {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    getName() {
        return this._name;
    }
}
class Member extends Person {
    constructor(id, name, membershipType) {
        super(id, name);
        this._membershipType = membershipType;
    }
    getMembershipType() {
        return this._membershipType;
    }
}
class Librarian extends Person {
    constructor(id, name, position) {
        super(id, name);
        this._position = position;
    }
    getPosition() {
        return this._position;
    }
}
class CD {
    constructor(cdId, cdTitle, cdArtist, isBorrowed = false) {
        this._cdId = cdId;
        this._cdTitle = cdTitle;
        this._cdArtist = cdArtist;
        this._isBorrowed = isBorrowed;
    }
    get title() {
        return this._cdTitle;
    }
    get cdId() {
        return this._cdId;
    }
    borrow() {
        if (this._isBorrowed) {
            return false;
        }
        this._isBorrowed = true;
        return true;
    }
    return() {
        this._isBorrowed = false;
    }
    getDetails() {
        return `CD ID: ${this._cdId}, Title: ${this._cdTitle}, Artist: ${this._cdArtist}, Borrowed: ${this._isBorrowed}`;
    }
}
class BorrowRecord {
    constructor(member, cd) {
        this._member = member;
        this._cd = cd;
    }
    getRecordDetails() {
        return `Member: ${this._member.getName()}, CD: ${this._cd.getDetails()}`;
    }
}
class LibraryManager {
    constructor() {
        this._nextId = 1;
        this._members = [];
        this._librarians = [];
        this._cds = [];
        this._borrowRecords = [];
    }
    get members() {
        return this._members;
    }
    get cds() {
        return this._cds;
    }
    addMember(name, membershipType) {
        let newMember = new Member(this._nextId++, name, membershipType);
        this._members.push(newMember);
        console.log(`Đã thêm mới nhân viên ${newMember.name}!!`);
    }
    addLibrarian(name, position) {
        let newLibrarian = new Librarian(this._nextId++, name, position);
        this._librarians.push(newLibrarian);
        console.log(`Đã thêm mới thủ thư ${newLibrarian.name}!!`);
    }
    addCD(title, artist) {
        let newCD = new CD(this._nextId++, title, artist);
        this._cds.push(newCD);
        console.log(`Đã thêm mới cd ${newCD.title}!!!`);
    }
    borrowCD(memberId, cdId) {
        let findMember = this._members.find((m) => m.id == memberId);
        let findCD = this._cds.find((c) => c.cdId == cdId);
        if (findMember == undefined || findCD == undefined) {
            console.log("Không tìm thấy thành viên hoặc cd!!!");
        }
        else {
            if (findCD.borrow()) {
                let newBorrowRecord = new BorrowRecord(findMember, findCD);
                this._borrowRecords.push(newBorrowRecord);
                console.log(`${findMember.name} đã mượn ${findCD.title}!!!`);
            }
            else {
                console.log("CD đã được mượn!!!");
            }
        }
    }
    returnCD(cdId) {
        let findCD = this._cds.find((c) => c.cdId == cdId);
        if (findCD == undefined) {
            console.log("Không tìm thấy cd!!!");
        }
        else {
            findCD.return();
            console.log(`${findCD.title} đã được trả lại!!!`);
        }
    }
    listBorrowRecords() {
        this._borrowRecords.forEach((record) => {
            console.log(record.getRecordDetails());
        });
    }
}
class Main3 {
    constructor() {
        this._libraryManager = new LibraryManager();
    }
    bootstrap() {
        let loop2 = true;
        while (loop2) {
            console.log("1.Thêm thành viên.");
            console.log("2.Thêm thủ thư.");
            console.log("3.Thêm CD.");
            console.log("4.Mượn CD.");
            console.log("5.Trả CD.");
            console.log("6.Hiển thị danh sách bản ghi mượn CD.");
            console.log("7.Dừng chương trình.");
            let choices = prompt("Nhập vào từ (1-7):");
            switch (choices) {
                case "1":
                    let inputMember = prompt("Nhập vào tên thành viên:");
                    let inputMembershipType = prompt("Nhập vào loại thẻ nhân viên:");
                    if (!inputMember || !inputMembershipType) {
                        console.log("Nhập lại tên nhân viên!!");
                    }
                    else {
                        this._libraryManager.addMember(inputMember, inputMembershipType);
                    }
                    break;
                case "2":
                    let inputLibrarian = prompt("Nhập vào tên thủ thư:");
                    let inputPosition = prompt("Nhập vào vị trí:");
                    if (!inputLibrarian || !inputPosition) {
                        console.log("Nhập lại tên thủ thư và vị trí!!");
                    }
                    else {
                        this._libraryManager.addLibrarian(inputLibrarian, inputPosition);
                    }
                    break;
                case "3":
                    let inputTitle = prompt("Nhập vào title của CD mới:");
                    let inputArtist = prompt("Nhập vào tên tác giả:");
                    if (!inputTitle || !inputArtist) {
                        console.log("Nhập lại tên cd và tên tác giả !!!");
                    }
                    else {
                        this._libraryManager.addCD(inputTitle, inputArtist);
                    }
                    break;
                case "4":
                    let inputMemberToBorrow = prompt("Nhập vào tên của thành viên:");
                    let inputCDToBorrow = prompt("Nhập vào tên của CD:");
                    let findIdMemberToBorrow = this._libraryManager.members.find((m) => m.name == inputMemberToBorrow);
                    let findIdCDToBorrow = this._libraryManager.cds.find((c) => c.title == inputCDToBorrow);
                    if (findIdMemberToBorrow === undefined || findIdCDToBorrow === undefined) {
                        console.log("Tên thành viên của bạn không đúng");
                    }
                    else {
                        this._libraryManager.borrowCD(findIdMemberToBorrow.id, findIdCDToBorrow.cdId);
                    }
                    break;
                case "5":
                    let inputCDToReturn = prompt("Nhập vào tên của CD muốn trả:");
                    let findIdCDToReturn = this._libraryManager.cds.find((c) => c.title == inputCDToReturn);
                    if (findIdCDToReturn === undefined) {
                        console.log("Tên CD của bạn không đúng");
                    }
                    else {
                        this._libraryManager.returnCD(findIdCDToReturn.cdId);
                    }
                    break;
                case "6":
                    this._libraryManager.listBorrowRecords();
                    break;
                case "7":
                    console.log("Cảm ơn đã sử dụng chương trình");
                    loop2 = false;
                    break;
            }
        }
    }
}
const dev3 = new Main3();
dev3.bootstrap();
