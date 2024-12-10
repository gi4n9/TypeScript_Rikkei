"use strict";
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 },
];
let carts = [];
function displayStoresAndCarts() {
    console.log("Stores:", stores);
    console.log("Carts:", carts);
}
function main() {
    var _a;
    while (true) {
        const action = (_a = prompt("Nhập C/R/U/D/E:")) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (!action)
            continue;
        switch (action) {
            case "C": {
                const productName = prompt("Nhập tên sản phẩm muốn mua:");
                if (!productName)
                    break;
                const storeProduct = stores.find((item) => item.name === productName);
                if (storeProduct && storeProduct.count > 0) {
                    storeProduct.count--;
                    const cartProduct = carts.find((item) => item.name === productName);
                    if (cartProduct) {
                        cartProduct.quantity++;
                    }
                    else {
                        carts.push({ name: productName, quantity: 1 });
                    }
                    console.log(`${productName} đã được thêm vào giỏ hàng.`);
                }
                else {
                    console.log("Sản phẩm không tồn tại hoặc đã hết hàng.");
                }
                break;
            }
            case "R": {
                displayStoresAndCarts();
                break;
            }
            case "U": {
                const position = parseInt(prompt("Nhập vị trí muốn update trong carts:") || "", 10);
                if (isNaN(position) || position < 1 || position > carts.length) {
                    console.log("Vị trí không hợp lệ.");
                    break;
                }
                const cartItem = carts[position - 1];
                const newQuantity = parseInt(prompt(`Nhập số lượng mới cho ${cartItem.name}:`) || "", 10);
                if (isNaN(newQuantity) || newQuantity < 0) {
                    console.log("Số lượng không hợp lệ.");
                    break;
                }
                const storeProduct = stores.find((item) => item.name === cartItem.name);
                if (storeProduct) {
                    storeProduct.count += cartItem.quantity - newQuantity;
                    cartItem.quantity = newQuantity;
                    if (cartItem.quantity === 0) {
                        carts.splice(position - 1, 1);
                        console.log(`${cartItem.name} đã bị xóa khỏi giỏ hàng do số lượng là 0.`);
                    }
                }
                console.log("Cập nhật thành công.");
                displayStoresAndCarts();
                break;
            }
            case "D": {
                const position = parseInt(prompt("Nhập vị trí muốn xóa trong carts:") || "", 10);
                if (isNaN(position) || position < 1 || position > carts.length) {
                    console.log("Vị trí không hợp lệ.");
                    break;
                }
                const cartItem = carts.splice(position - 1, 1)[0];
                const storeProduct = stores.find((item) => item.name === cartItem.name);
                if (storeProduct) {
                    storeProduct.count += cartItem.quantity;
                }
                console.log(`${cartItem.name} đã bị xóa khỏi giỏ hàng.`);
                displayStoresAndCarts();
                break;
            }
            case "E": {
                console.log("Cảm ơn bạn đã đến với Rikkei Stores.");
                return;
            }
            default: {
                console.log("Hành động không hợp lệ. Vui lòng nhập lại.");
                break;
            }
        }
    }
}
main();
