class Person3 {
    private _id:number;
    private _name:string;
    private _email:string;
    private _phone:string;

    constructor(id:number, name:string, email:string, phone:string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    getDetails():string {
        return `Customer ID:${this._id} - name:${this._name} - email:${this._email} - Phone number:${this._phone}`;
    }

    get id(): number {
        return this._id;
    }
}

abstract class Room {
    private _roomId:number;
    private _type:string;
    private _pricePerNight:number;
    private _isAvailable:boolean;

    constructor(roomId:number, type:string, pricePerNight:number, isAvailable:boolean) {
        this._roomId = roomId;
        this._type = type;
        this._pricePerNight = pricePerNight;
        this._isAvailable = isAvailable = true;
    }

    get pricePerNight(): number {
        return this._pricePerNight;
    }

    get roomId(): number {
        return this._roomId;
    }

    get type(): string {
        return this._type;
    }

    get isAvailable(): boolean {
        return this._isAvailable;
    }

    bookRoom(){
        this._isAvailable = false;
    }

    releaseRoom(){
        this._isAvailable = true;
    }

    abstract calculateCost(nights: number): number;

    abstract getAdditionalServices(): string;

    abstract applyDiscount(discountRate: number): number;

    abstract getCancellationPolicy(): string;
}

class StandardRoom extends Room {
    private _additionalServices:string = "None";

    constructor(roomId:number, type:string, pricePerNight:number, isAvailable:boolean, additionalServices:string) {
        super(roomId, type, pricePerNight, isAvailable);
        this._additionalServices = additionalServices;
    }

    calculateCost(nights: number): number {
        return nights * this.pricePerNight;
    }

    getAdditionalServices(): string {
        return this._additionalServices;
    }

    applyDiscount(discountRate: number): number {
        return this.pricePerNight - (this.pricePerNight * discountRate/100);
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 100% nếu hủy trước 1 ngày.";
    }
}

class DeluxeRoom extends Room {
    private _additionalServices:string = "Free breakfast";

    constructor(roomId:number, type:string, pricePerNight:number, isAvailable:boolean, additionalServices:string) {
        super(roomId, type, pricePerNight, isAvailable);
        this._additionalServices = additionalServices;
    }

    calculateCost(nights: number): number {
        return nights * this.pricePerNight;
    }

    getAdditionalServices(): string {
        return this._additionalServices;
    }

    applyDiscount(discountRate: number): number {
        return this.pricePerNight - (this.pricePerNight * discountRate/100);
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 50% nếu hủy trước 2 ngày.";
    }
}

class SuiteRoom extends Room {
    private _additionalServices:string = "Free spa, free minibar";

    constructor(roomId:number, type:string, pricePerNight:number, isAvailable:boolean, additionalServices:string) {
        super(roomId, type, pricePerNight, isAvailable);
        this._additionalServices = additionalServices;
    }

    calculateCost(nights: number): number {
        return nights * this.pricePerNight;
    }

    getAdditionalServices(): string {
        return this._additionalServices;
    }

    applyDiscount(discountRate: number): number {
        return this.pricePerNight - (this.pricePerNight * discountRate/100);
    }

    getCancellationPolicy(): string {
        return "Không hoàn lại tiền nếu hủy";
    }
}

class Booking {
    private _bookingId:number;
    private _customer:Person3;
    private _room:Room;
    private _night:number;
    private _totalCost:number;

    constructor(bookingId:number, customer:Person3, room:Room, night:number) {
        this._bookingId = bookingId;
        this._customer = customer;
        this._room = room;
        this._night = night;
        this._totalCost = room.calculateCost(night);
    }

    getDetails():string {
        return `Booking ID:${this._bookingId} - Room:${this._room.type} - ${this._customer.getDetails()} - Price per Night${this._room.pricePerNight} - Night:${this._night} - Total Cost:${this._totalCost}`;
    }

    get customer(): Person3 {
        return this._customer;
    }

    get totalCost(): number {
        return this._totalCost;
    }
}

class HotelManager{
    private _rooms:Room[] = [];
    private _bookings:Booking[] = [];
    private _customers:Person3[] = [];
    
    get rooms(): Room[] {
        return this._rooms;
    }

    get bookings(): Booking[] {
        return this._bookings;
    }

    get customers(): Person3[] {
        return this._customers;
    }

    addRoom(type: string, pricePerNight: number): void{
        let roomId = this._rooms.length + 1;
        if(type === "Standard"){
            this._rooms.push(new StandardRoom(roomId, type, pricePerNight, true, "None"));
        } else if(type === "Deluxe"){
            this._rooms.push(new DeluxeRoom(roomId, type, pricePerNight, true, "Free breakfast"));
        } else if(type === "Suite"){
            this._rooms.push(new SuiteRoom(roomId, type, pricePerNight, true, "Free spa, free minibar"));
        } else {
            console.log("Loại phòng không hợp lệ!");
        }
        console.log(this.rooms);
    }

    addCustomer(name: string, email: string, phone: string): Person3 {
        let customerId = this._customers.length + 1;
        let customer = new Person3(customerId, name, email, phone);
        this._customers.push(customer);
        console.log(this.customers);
        return customer;
    }

    bookRoom(customerId: number, roomId: number, nights: number): Booking | undefined{
        let customer = this._customers.find((customer:Person3) => customer.id === customerId);
        let room = this._rooms.find((room:Room) => room.roomId === roomId);
        let nightCount = nights;

        if(customer && room){
            let bookingId = this._bookings.length + 1;
            let booking = new Booking(bookingId, customer, room, nightCount);
            this._bookings.push(booking);
            room.bookRoom();
            console.log(this.bookings);
            return booking;
        } else {
            console.log("Không tìm thấy khách hàng hoặc phòng!");
            return undefined;
        }
    }

    releaseRoom(roomId: number): void{
        let room = this._rooms.find((room:Room) => room.roomId === roomId);
        if(room){
            room.releaseRoom();
            console.log("Trả phòng thành công!");
        } else {
            console.log("Không tìm thấy phòng!");
        }
    }

    listAvailableRooms(): void{
        let availableRooms = this._rooms.filter((room:Room) => room.isAvailable === true);
        if(availableRooms.length === 0){
            console.log("Không còn phòng trống!");
            return;
        } else {
            availableRooms.forEach((room:Room) => {
                console.log(room);
            });
        }
    }

    listBookingsByCustomer(customerId: number): void{
        let customer = this._customers.find((customer:Person3) => customer.id === customerId);
        let bookings = this._bookings.filter((booking:Booking) => booking.customer === customer);
        bookings.forEach((booking:Booking) => {
            console.log(booking.getDetails());
        });
    }

    calculateTotalRevenue(): number{
        let totalRevenue = 0;
        totalRevenue += this._bookings.reduce((total:number, booking:Booking) => {
            return total + booking.totalCost;
        }, 0);
        return totalRevenue;
    }

    getRoomTypesCount(): void{
        let totalStandardRoom = 0;
        totalStandardRoom += this.rooms.reduce((total:number, room:Room) => {
            return total + (room.type === "Standard" ? 1 : 0);
        }, 0);
        let totalDeluxeRoom = 0;
        totalDeluxeRoom += this.rooms.reduce((total:number, room:Room) => {
            return total + (room.type === "Deluxe" ? 1 : 0);
        }, 0);
        let totalSuiteRoom = 0;
        totalSuiteRoom += this.rooms.reduce((total:number, room:Room) => {
            return total + (room.type === "Suite" ? 1 : 0);
        }, 0);
        console.log(`Tổng số phòng Standard: ${totalStandardRoom}`);
        console.log(`Tổng số phòng Deluxe: ${totalDeluxeRoom}`);
        console.log(`Tổng số phòng Suite: ${totalSuiteRoom}`);
    }

    applyDiscountToRoom(roomId: number, discountRate: number): void{
        let room = this._rooms.find((room:Room) => room.roomId === roomId);
        if(room){
            room.applyDiscount(discountRate);
            console.log(room.applyDiscount(discountRate));
            console.log("Áp dụng giảm giá thành công!");
        } else {
            console.log("Không tìm thấy phòng!");
        }
    }

    getRoomServices(roomId: number): void{
        let room = this._rooms.find((room:Room) => room.roomId === roomId);
        if(room){
            console.log(room.getAdditionalServices());
        } else {
            console.log("Không tìm thấy phòng!");
        }
    }

    getCancellationPolicy(roomId: number): void{
        let room = this._rooms.find((room:Room) => room.roomId === roomId);
        if(room){
            console.log(room.getCancellationPolicy());
        } else {
            console.log("Không tìm thấy phòng!");
        }
    }
}

class Main4{
    private _hotelManager:HotelManager = new HotelManager();

    constructor(){
        this._hotelManager = new HotelManager();
    }

    bootstrap():void{
        let loop3 = true;
        while(loop3){
            console.log("1. Thêm khách hàng.");
            console.log("2. Thêm phòng.");
            console.log("3. Đặt phòng");
            console.log("4. Trả phòng");
            console.log("5. Hiển thị danh sách phòng còn trống");
            console.log("6. Hiển thị danh sách đặt phòng của khách hàng");
            console.log("7. Tính tổng doanh thu từ các đặt phòng");
            console.log("8. Đếm số lượng từng loại phòng");
            console.log("9. Áp dụng giảm giá cho phòng");
            console.log("10. Hiển thị các dịch vụ bổ sung của phòng");
            console.log("11. Hiển thị chính sách hủy phòng");
            console.log("12. Thoát chương trình");

            let choices = prompt("Chọn chức năng (1-12): ");
            switch(choices){
                case "1":
                    let name = prompt("Nhập tên khách hàng: ");
                    let email = prompt("Nhập email khách hàng: ");
                    let phone = prompt("Nhập số điện thoại khách hàng: ");
                    if(name && email && phone){
                        this._hotelManager.addCustomer(name, email, phone);
                        console.log(`Thêm khách hàng ${name} thành công!`);
                    } else {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                    }
                    break;
                case "2":
                    let type = prompt("Nhập loại phòng (Standard, Deluxe, Suite): ");
                    let pricePerNight = Number(prompt("Nhập giá phòng: "));
                    if(type && pricePerNight){
                        this._hotelManager.addRoom(type, pricePerNight);
                    } else {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                    }
                    break;
                case "3":
                    let customerId = Number(prompt("Nhập mã khách hàng: "));
                    let roomId = Number(prompt("Nhập mã phòng: "));
                    let nights = Number(prompt("Nhập số đêm: "));
                    let booking = this._hotelManager.bookRoom(customerId, roomId, nights);
                    if(booking){
                        console.log("Đặt phòng thành công!");
                    } else {
                        console.log("Đặt phòng thất bại!");
                    }
                    break;
                case "4":
                    let roomIdToRelease = Number(prompt("Nhập mã phòng cần trả: "));
                    if(roomIdToRelease){
                        this._hotelManager.releaseRoom(roomIdToRelease);
                    } else {
                        console.log("Nhập lại mã phòng cần trả!");
                    }
                    break;
                case "5":
                    this._hotelManager.listAvailableRooms();
                    break;
                case "6":
                    let customerIdToDisplay = Number(prompt("Nhập mã khách hàng: "));
                    this._hotelManager.listBookingsByCustomer(customerIdToDisplay);
                    break;
                case "7":
                    let totalRevenue = this._hotelManager.calculateTotalRevenue();
                    console.log(`Tổng doanh thu: ${totalRevenue}`);
                    break;
                case "8":
                    this._hotelManager.getRoomTypesCount();
                    break;
                case "9":
                    let roomIdToApplyDiscount = Number(prompt("Nhập mã phòng cần giảm giá: "));
                    let discountRate = Number(prompt("Nhập tỷ lệ giảm giá: "));
                    if(roomIdToApplyDiscount && discountRate){
                        this._hotelManager.applyDiscountToRoom(roomIdToApplyDiscount, discountRate);
                    } else {
                        console.log("Nhập lại thông tin!");
                    }
                    break;
                case "10":
                    let roomIdToDisplayServices = Number(prompt("Nhập mã phòng cần xem dịch vụ: "));
                    if(roomIdToDisplayServices){
                        this._hotelManager.getRoomServices(roomIdToDisplayServices);
                    } else {
                        console.log("Nhập lại mã phòng!");
                    }
                    break;
                case "11":
                    let roomIdToDisplayPolicy = Number(prompt("Nhập mã phòng cần xem chính sách hủy: "));
                    if(roomIdToDisplayPolicy){
                        this._hotelManager.getCancellationPolicy(roomIdToDisplayPolicy);
                    } else {
                        console.log("Nhập lại mã phòng!");
                    }
                    break;
                case "12":
                    console.log("Cảm ơn bạn đã sử dụng chương trình!");
                    loop3 = false;
                    break;
            }
        }
    }
}

const main4 = new Main4();
main4.bootstrap();