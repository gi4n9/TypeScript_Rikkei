"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0!");
        }
        return a / b;
    }
}
class Main1 {
    static start() {
        const calculator = new Calculator();
        let isRunning = true;
        while (isRunning) {
            const input = prompt("Chọn thao tác:\n1. Cộng hai số\n2. Trừ hai số\n3. Nhân hai số\n4. Chia hai số\n5. Dừng chương trình");
            switch (input) {
                case "1":
                case "2":
                case "3":
                case "4": {
                    const firstNum = Number(prompt("Nhập số thứ nhất:"));
                    const secondNum = Number(prompt("Nhập số thứ hai:"));
                    if (isNaN(firstNum) || isNaN(secondNum)) {
                        console.error("Vui lòng nhập số hợp lệ.");
                        break;
                    }
                    try {
                        let result;
                        switch (input) {
                            case "1":
                                result = calculator.add(firstNum, secondNum);
                                console.log(`Kết quả: ${firstNum} + ${secondNum} = ${result}`);
                                break;
                            case "2":
                                result = calculator.subtract(firstNum, secondNum);
                                console.log(`Kết quả: ${firstNum} - ${secondNum} = ${result}`);
                                break;
                            case "3":
                                result = calculator.multiply(firstNum, secondNum);
                                console.log(`Kết quả: ${firstNum} * ${secondNum} = ${result}`);
                                break;
                            case "4":
                                result = calculator.divide(firstNum, secondNum);
                                console.log(`Kết quả: ${firstNum} / ${secondNum} = ${result}`);
                                break;
                        }
                    }
                    catch (error) {
                        if (error instanceof Error) {
                            console.error(error.message);
                        }
                        else {
                            console.error("An unknown error occurred");
                        }
                    }
                }
                case "5":
                    console.log("Kết thúc chương trình.");
                    isRunning = false;
                    break;
                default:
                    console.error("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            }
        }
    }
}
Main1.start();
