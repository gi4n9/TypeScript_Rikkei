"use strict";
class CD {
    constructor(_id, _title, _artist, _year) {
        this._id = _id;
        this._title = _title;
        this._artist = _artist;
        this._year = _year;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get artist() {
        return this._artist;
    }
    get year() {
        return this._year;
    }
}
class CDStoreManager {
    constructor() {
        this.cds = [];
    }
    get cd() {
        return this.cds;
    }
    addCD(title, artist, year) {
        let cdId = Math.random();
        let newCD = new CD(cdId, title, artist, year);
        this.cds.push(newCD);
    }
    listCDs() {
        console.log(this.cds);
    }
    removeCD(id) {
        this.cds.splice(id, 1);
    }
    searchCD(title) {
        this.cds.forEach(function (element, index) {
            console.log(index + 1, title, element.artist, element.year);
        });
    }
}
class Main4 {
    constructor() {
        this._CDStoreManager = new CDStoreManager();
    }
    bootstrap() {
        let loop4 = true;
        while (loop4) {
            console.log("1.Thêm CD vào cửa hàng.");
            console.log("2.Hiển thị danh sách CD.");
            console.log("3.Xóa CD theo mã CD.");
            console.log("4.Tìm kiếm CD theo tên.");
            console.log("5.Dừng chương trình.");
            let choices4 = prompt("Nhập vào số từ (1-5):");
            switch (choices4) {
                case "1":
                    let inputCDTitle = prompt("Nhập vào title:");
                    let inputCDArtist = prompt("Nhập vào artist:");
                    let inputCDYear = Number(prompt("Nhập vào year:"));
                    if (!inputCDTitle || !inputCDArtist || !inputCDYear) {
                        console.log("Bạn chưa nhập CD's title/artist/year:");
                    }
                    else {
                        this._CDStoreManager.addCD(inputCDTitle, inputCDArtist, inputCDYear);
                        console.log("************");
                        console.log(`Đã thêm ${inputCDTitle}`);
                    }
                    break;
                case "2":
                    console.log("************");
                    this._CDStoreManager.listCDs();
                    break;
                case "3":
                    let inputCDTitleToRemove = prompt("Nhập vào CD's title to remove:");
                    if (!inputCDTitleToRemove) {
                        console.log("Bạn chưa nhập CD's title to remove!!!");
                    }
                    else {
                        let findIdCDtoRemove = this._CDStoreManager.cd.find((c) => c.title == inputCDTitleToRemove);
                        if (findIdCDtoRemove == undefined) {
                            console.log("CD's title của bạn không đúng");
                        }
                        else {
                            this._CDStoreManager.removeCD(findIdCDtoRemove.id);
                            console.log(`Đã xóa ${inputCDTitleToRemove}`);
                        }
                    }
                    break;
                case "4":
                    let inputCDTitleToSearch = prompt("Nhập vào CD's title to search");
                    if (!inputCDTitleToSearch) {
                        console.log("Bạn chưa nhập CD's title to search!!!");
                    }
                    else {
                        let findIdCDtoSearch = this._CDStoreManager.cd.find((c) => c.title == inputCDTitleToSearch);
                        if (findIdCDtoSearch == undefined) {
                            console.log("CD's title to search không có");
                        }
                        else {
                            this._CDStoreManager.searchCD(findIdCDtoSearch.title);
                            console.log(`${inputCDTitleToSearch}`);
                        }
                    }
                    break;
                case "5":
                    console.log("Cảm ơn bạn đã sử dụng chương trình");
                    loop4 = false;
                    break;
            }
        }
    }
}
const dev4 = new Main4();
dev4.bootstrap();
