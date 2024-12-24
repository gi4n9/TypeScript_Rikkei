"use strict";
class Student {
    constructor(_studentId, _studentName) {
        this._studentId = _studentId;
        this._studentName = _studentName;
    }
    get studentId() {
        return this._studentId;
    }
    get studentName() {
        return this._studentName;
    }
}
class Course {
    constructor(_courseId, _courseTitle) {
        this._courseId = _courseId;
        this._courseTitle = _courseTitle;
    }
    get courseId() {
        return this._courseId;
    }
    get courseName() {
        return this._courseTitle;
    }
}
class Enrollment {
    constructor(_student, _course, _scheduleTime) {
        this._student = _student;
        this._course = _course;
        this._scheduleTime = _scheduleTime;
    }
    get student() {
        return this._student;
    }
    get course() {
        return this._course;
    }
    get scheduleTime() {
        return this._scheduleTime;
    }
}
class StudyManager {
    constructor() {
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }
    addStudent(name) {
        const newId = this.students.length + 1;
        const newStudent = new Student(newId, name);
        this.students.push(newStudent);
        console.log(`Student added: [ID: ${newId}, Name: ${name}]`);
    }
    addCourse(title) {
        const newId = this.courses.length + 1;
        const newCourse = new Course(newId, title);
        this.courses.push(newCourse);
        console.log(`Course added: [ID: ${newId}, Title: ${title}]`);
    }
    enrollStudent(studentId, courseId, scheduleTime) {
        const student = this.students.find(s => s.studentId === studentId);
        const course = this.courses.find(c => c.courseId === courseId);
        if (!student) {
            console.log(`Error: Student with ID ${studentId} not found.`);
            return;
        }
        if (!course) {
            console.log(`Error: Course with ID ${courseId} not found.`);
            return;
        }
        const newEnrollment = new Enrollment(student, course, scheduleTime);
        this.enrollments.push(newEnrollment);
        console.log(`Enrollment added: [Student: ${student.studentName}, Course: ${course.courseName}, Time: ${scheduleTime}]`);
    }
    listEnrollments() {
        if (this.enrollments.length === 0) {
            console.log("No enrollments found.");
            return;
        }
        console.log("Enrollments:");
        for (const enrollment of this.enrollments) {
            console.log(`Student: ${enrollment.student.studentName}, Course: ${enrollment.course.courseName}, Time: ${enrollment.scheduleTime}`);
        }
    }
}
class Main5 {
    constructor() {
        this._studyManager = new StudyManager();
    }
    bootstrap() {
        let running = true;
        while (running) {
            console.log("\nMenu:");
            console.log("1. Add Student");
            console.log("2. Add Course");
            console.log("3. Enroll Student");
            console.log("4. List Enrollments");
            console.log("5. Exit");
            const choice = prompt("Choose an option: ");
            switch (choice) {
                case "1":
                    const studentName = prompt("Enter student name: ");
                    if (studentName)
                        this._studyManager.addStudent(studentName);
                    break;
                case "2":
                    const courseTitle = prompt("Enter course title: ");
                    if (courseTitle)
                        this._studyManager.addCourse(courseTitle);
                    break;
                case "3":
                    const studentId = Number(prompt("Enter student ID: "));
                    const courseId = Number(prompt("Enter course ID: "));
                    const scheduleTime = prompt("Enter schedule time: ");
                    if (scheduleTime)
                        this._studyManager.enrollStudent(studentId, courseId, scheduleTime);
                    break;
                case "4":
                    this._studyManager.listEnrollments();
                    break;
                case "5":
                    running = false;
                    console.log("Exiting program.");
                    break;
                default:
                    console.log("Invalid option. Please try again.");
            }
        }
    }
}
const dev5 = new Main5();
dev5.bootstrap();
