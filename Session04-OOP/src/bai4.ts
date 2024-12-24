class CD {
    private _id:number;
    private _title:string;
    private _artist:string;
    private _year:number;

    constructor(_id:number, _title:string, _artist:string, _year:number){
        this._id = _id;
        this._title = _title;
        this._artist = _artist;
        this._year = _year;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    get artist(){
        return this._artist;
    }

    get year(){
        return this._year;
    }
}

class CDStoreManager{
    private cds: CD[];

    constructor(){
        this.cds = [];
    }

    get cd(){
        return this.cds;
    }

    addCD(title:string, artist:string, year:number):void{
        let cdId = Math.random();
        let newCD = new CD(cdId, title, artist, year);
        this.cds.push(newCD);
    }
    listCDs():void{
        console.log(this.cds);
    }
    removeCD(id:number):void{
        this.cds.splice(id,1);
    }
    searchCD(title:string):void{
        this.cds.forEach(function(element:CD, index:number){
            console.log(index + 1, title, element.artist, element.year);
        })
    }
}

class Main4{
    private _CDStoreManager:CDStoreManager;

    constructor(){
        this._CDStoreManager = new CDStoreManager();
    }

    
    bootstrap():void{
        let loop4:boolean = true;
        while(loop4){
            console.log("1.Thêm CD vào cửa hàng.");
            console.log("2.Hiển thị danh sách CD.");
            console.log("3.Xóa CD theo mã CD.");
            console.log("4.Tìm kiếm CD theo tên.");
            console.log("5.Dừng chương trình.");

            let choices4 = prompt("Nhập vào số từ (1-5):");

            switch(choices4){
                case "1":
                    let inputCDTitle = prompt("Nhập vào title:");
                    let inputCDArtist = prompt("Nhập vào artist:");
                    let inputCDYear = Number(prompt("Nhập vào year:"));
                    if(!inputCDTitle || !inputCDArtist || !inputCDYear){
                        console.log("Bạn chưa nhập CD's title/artist/year:");
                    } else {
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
                    if(!inputCDTitleToRemove){
                        console.log("Bạn chưa nhập CD's title to remove!!!");
                    } else {
                        let findIdCDtoRemove = this._CDStoreManager.cd.find((c:CD) => c.title == inputCDTitleToRemove)
                        if(findIdCDtoRemove == undefined){
                            console.log("CD's title của bạn không đúng");
                        } else {
                            this._CDStoreManager.removeCD(findIdCDtoRemove.id);
                            console.log(`Đã xóa ${inputCDTitleToRemove}`);
                        }
                    }
                    break;
                case "4":
                    let inputCDTitleToSearch = prompt("Nhập vào CD's title to search");
                    if(!inputCDTitleToSearch){
                        console.log("Bạn chưa nhập CD's title to search!!!");
                    } else {
                        let findIdCDtoSearch = this._CDStoreManager.cd.find((c:CD) => c.title == inputCDTitleToSearch)
                        if(findIdCDtoSearch == undefined){
                            console.log("CD's title to search không có");
                        } else {
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