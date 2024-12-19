//B1: Khởi tạo Class - Tên class viết hoa
class Department{

    //B2: Liệt kê các thuộc tính(properties)
    // tính chất của đối tượng cần mô tả
    // access_modifier + property_name:type
    public id: string;
    public name: string;
    private _manager:string;

    //B3: Tạo 1 phượng thức đặc biệt
    // Phương thức khởi tạo - Constructor function
    // Phương thức dùng để khởi tạo giá trị dành cho các thuộc tính
    // của một đối tượng (instance) khi được khởi tạo từ 1 lớp
    // constructor function
    constructor(id:string, name:string, manager:string){
        // Từ khóa this --> dùng để tham chiếu tới chính class đang sử dụng 
        // this.id === Department.id
        // this.name === Department.name
        this.id = id;
        this.name = name;
        this._manager = manager;
    }

    //B4: mô phỏng các hành động của đối tượng trong thực thế thông qua các phương thức(hàm)
    // hàm === method(phương thức)
    // method
    public describe(){
        console.log(`This is ${this.name} Department with id: ${this.id}`);
    }

    //manager getter
    get manager(){
        // Cung cấp thêm các phương thức để validate (Kiểm tra tính hợp lệ)
        // của dữ liệu đầu vào
        // Bổ sung logic để validate dữ liệu đầu vào
        return this._manager;
    }

    //manager setter
    set manager(manager:string){
        this._manager = manager;
    }
}

// Khởi tạo ra các instance(đối tượng con) từ một bản nguyên mẫu 

let educationDepartment = new Department("1", "Education", "Nguyen Van A");
console.log(educationDepartment.manager);
educationDepartment.manager = "Nguyen Thi C";
console.log(educationDepartment.manager);


let marketingDepartment = new Department("3", "Marketing", "Tran Van B");
console.log(marketingDepartment);


// - Liên quan đến ngữ cảnh (context) sử dụng từ khoá `this`
// - Bàn về chủ đề này sau ???? (time-comsuming)
//clone
let accounting = {
    describe: educationDepartment.describe.bind({id: "2", name:"Accounting"}),
};
accounting.describe();

// ACCESS MODIFIER(public, private)