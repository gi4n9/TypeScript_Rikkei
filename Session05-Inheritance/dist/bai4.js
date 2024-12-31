"use strict";
class Person4 {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    getName() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
class Customer4 extends Person4 {
    constructor(id, name, email, phone) {
        super(id, name);
        this._email = email;
        this._phone = phone;
    }
    getContactDetails() {
        return `${this._email}, ${this._phone}`;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
}
class Employee4 extends Person4 {
    constructor(id, name, position) {
        super(id, name);
        this._position = position;
    }
    getPosition() {
        return this._position;
    }
}
class Product4 {
    constructor(id, name, price, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    sell(quantity) {
        if (quantity > this._quantity) {
            console.log("Not enough quantity");
        }
        else {
            this._quantity -= quantity;
        }
    }
    restock(quantity) {
        this._quantity += quantity;
    }
    getDetails() {
        return `${this._name}, ${this._price}, ${this._quantity}`;
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
}
class Invoice {
    constructor(customer, employee, product, totalAmount) {
        this._customer = customer;
        this._employee = employee;
        this._product = product;
        this._totalAmount = totalAmount;
    }
    calculateTotal() {
        return this._totalAmount;
    }
    getInvoiceDetails() {
        return `${this._customer.getName()}, ${this._employee.getName()}, ${this._product.getDetails()}, ${this._totalAmount}`;
    }
}
class StoreManager {
    constructor() {
        this._customers = [];
        this._employees = [];
        this._products = [];
        this._invoices = [];
    }
    addCustomer(name, email, phone) {
        let id = this._customers.length + 1;
        let customer = new Customer4(id, name, email, phone);
        this._customers.push(customer);
    }
    addEmployee(name, position) {
        let id = this._employees.length + 1;
        let employee = new Employee4(id, name, position);
        this._employees.push(employee);
    }
    addProduct(name, price, quantity) {
        let id = this._products.length + 1;
        let product = new Product4(id, name, price, quantity);
        this._products.push(product);
    }
    sellProduct(customerId, employeeId, productId, quantity) {
        let customer = this._customers.find(customer => customer.id === customerId);
        let employee = this._employees.find(employee => employee.id === employeeId);
        let product = this._products.find(product => product.id === productId);
        if (!customer || !employee || !product) {
            return;
        }
        let totalAmount = product.price * quantity;
        let invoice = new Invoice(customer, employee, product, totalAmount);
        this._invoices.push(invoice);
        product.sell(quantity);
    }
    restockProduct(productId, quantity) {
        let product = this._products.find(product => product.id === productId);
        if (!product) {
            return;
        }
        product.restock(quantity);
    }
    listInvoices() {
        this._invoices.forEach(invoice => console.log(invoice.getInvoiceDetails()));
    }
}
class Main4 {
    constructor() {
        this._storeManager = new StoreManager();
    }
    bootstrap() {
        let loop4 = true;
        console.log("1. Thêm khách hàng");
        console.log("2. Thêm nhân viên");
        console.log("3. Thêm sản phẩm");
        console.log("4. Bán hàng(Tạo hóa đơn)");
        console.log("5. Nhập hàng bổ sung");
        console.log("6. Hiển thị danh sách hóa đơn");
        console.log("7. Dừng chương trình");
        while (loop4) {
            let choice4 = prompt("Nhập vào từ (1-7):");
            switch (choice4) {
                case "1":
                    let inputName = prompt("Nhập tên khách hàng:");
                    let inputEmail = prompt("Nhập email:");
                    let inputPhone = prompt("Nhập số điện thoại:");
                    if (!inputName || !inputEmail || !inputPhone) {
                        console.log("Nhập vào không hợp lệ!!!");
                        break;
                    }
                    else {
                        this._storeManager.addCustomer(inputName, inputEmail, inputPhone);
                    }
                    break;
                case "2":
                    let inputName2 = prompt("Nhập tên nhân viên:");
                    let inputPosition = prompt("Nhập vị trí:");
                    if (!inputName2 || !inputPosition) {
                        console.log("Nhập vào không hợp lệ!!!");
                        break;
                    }
                    else {
                        this._storeManager.addEmployee(inputName2, inputPosition);
                    }
                    break;
                case "3":
                    let inputName3 = prompt("Nhập tên sản phẩm:");
                    let inputPrice = Number(prompt("Nhập giá:"));
                    let inputQuantity = Number(prompt("Nhập số lượng:"));
                    if (!inputName3 || !inputPrice || !inputQuantity) {
                        console.log("Nhập vào không hợp lệ!!!");
                        break;
                    }
                    else {
                        this._storeManager.addProduct(inputName3, inputPrice, inputQuantity);
                    }
                    break;
                case "4":
                    let inputCustomerId = Number(prompt("Nhập ID khách hàng:"));
                    let inputEmployeeId = Number(prompt("Nhập ID nhân viên:"));
                    let inputProductId = Number(prompt("Nhập ID sản phẩm:"));
                    let inputQuantity2 = Number(prompt("Nhập số lượng:"));
                    this._storeManager.sellProduct(inputCustomerId, inputEmployeeId, inputProductId, inputQuantity2);
                    break;
                case "5":
                    let inputProductId2 = Number(prompt("Nhập ID sản phẩm:"));
                    let inputQuantity3 = Number(prompt("Nhập số lượng:"));
                    if (!inputProductId2 || !inputQuantity3) {
                        console.log("Nhập vào không hợp lệ!!!");
                        break;
                    }
                    else {
                        this._storeManager.restockProduct(inputProductId2, inputQuantity3);
                    }
                    break;
                case "6":
                    this._storeManager.listInvoices();
                    break;
                case "7":
                    loop4 = false;
                    console.log("Cảm ơn quý khách đã sử dụng chương trình");
                    break;
            }
        }
    }
}
const main4 = new Main4();
main4.bootstrap();
