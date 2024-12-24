"use strict";
class GeometryCalculator {
    circleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
    circlePerimeter(radius) {
        return 2 * Math.PI * radius;
    }
    triangleArea(base, height) {
        return 0.5 * base * height;
    }
    trianglePerimeter(a, b, c) {
        return a + b + c;
    }
    rectangleArea(width, height) {
        return width * height;
    }
    rectanglePerimeter(width, height) {
        return 2 * (width + height);
    }
    parallelogramArea(base, height) {
        return base * height;
    }
    parallelogramPerimeter(a, b) {
        return 2 * (a + b);
    }
    rhombusArea(d1, d2) {
        return 0.5 * d1 * d2;
    }
    rhombusPerimeter(side) {
        return 4 * side;
    }
}
class Main2 {
    static start() {
        const calculator = new GeometryCalculator();
        let isRunning = true;
        while (isRunning) {
            const input = prompt("Chọn thao tác:\n1. Tính diện tích và chu vi hình tròn\n2. Tính diện tích và chu vi hình tam giác\n3. Tính diện tích và chu vi hình chữ nhật\n4. Tính diện tích và chu vi hình bình hành\n5. Tính diện tích và chu vi hình thoi\n6. Dừng chương trình");
            switch (input) {
                case "1": {
                    const radius = Number(prompt("Nhập bán kính hình tròn:"));
                    if (isNaN(radius) || radius <= 0) {
                        console.error("Vui lòng nhập bán kính hợp lệ.");
                        break;
                    }
                    const area = calculator.circleArea(radius);
                    const perimeter = calculator.circlePerimeter(radius);
                    console.log(`Diện tích hình tròn: ${area}\nChu vi hình tròn: ${perimeter}`);
                    break;
                }
                case "2": {
                    const base = Number(prompt("Nhập độ dài đáy tam giác:"));
                    const height = Number(prompt("Nhập chiều cao tam giác:"));
                    const a = Number(prompt("Nhập độ dài cạnh a:"));
                    const b = Number(prompt("Nhập độ dài cạnh b:"));
                    const c = Number(prompt("Nhập độ dài cạnh c:"));
                    if (isNaN(base) || isNaN(height) || isNaN(a) || isNaN(b) || isNaN(c)) {
                        console.error("Vui lòng nhập thông tin hợp lệ.");
                        break;
                    }
                    const area = calculator.triangleArea(base, height);
                    const perimeter = calculator.trianglePerimeter(a, b, c);
                    console.log(`Diện tích tam giác: ${area}\nChu vi tam giác: ${perimeter}`);
                    break;
                }
                case "3": {
                    const width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
                    const height = Number(prompt("Nhập chiều cao hình chữ nhật:"));
                    if (isNaN(width) || isNaN(height)) {
                        console.error("Vui lòng nhập chiều rộng và chiều cao hợp lệ.");
                        break;
                    }
                    const area = calculator.rectangleArea(width, height);
                    const perimeter = calculator.rectanglePerimeter(width, height);
                    console.log(`Diện tích hình chữ nhật: ${area}\nChu vi hình chữ nhật: ${perimeter}`);
                    break;
                }
                case "4": {
                    const base = Number(prompt("Nhập độ dài đáy hình bình hành:"));
                    const height = Number(prompt("Nhập chiều cao hình bình hành:"));
                    const a = Number(prompt("Nhập độ dài cạnh a:"));
                    const b = Number(prompt("Nhập độ dài cạnh b:"));
                    if (isNaN(base) || isNaN(height) || isNaN(a) || isNaN(b)) {
                        console.error("Vui lòng nhập thông tin hợp lệ.");
                        break;
                    }
                    const area = calculator.parallelogramArea(base, height);
                    const perimeter = calculator.parallelogramPerimeter(a, b);
                    console.log(`Diện tích hình bình hành: ${area}\nChu vi hình bình hành: ${perimeter}`);
                    break;
                }
                case "5": {
                    const d1 = Number(prompt("Nhập đường chéo thứ nhất của hình thoi:"));
                    const d2 = Number(prompt("Nhập đường chéo thứ hai của hình thoi:"));
                    const side = Number(prompt("Nhập độ dài cạnh hình thoi:"));
                    if (isNaN(d1) || isNaN(d2) || isNaN(side)) {
                        console.error("Vui lòng nhập thông tin hợp lệ.");
                        break;
                    }
                    const area = calculator.rhombusArea(d1, d2);
                    const perimeter = calculator.rhombusPerimeter(side);
                    console.log(`Diện tích hình thoi: ${area}\nChu vi hình thoi: ${perimeter}`);
                    break;
                }
                case "6":
                    console.log("Kết thúc chương trình.");
                    isRunning = false;
                    break;
                default:
                    console.error("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            }
        }
    }
}
Main2.start();
