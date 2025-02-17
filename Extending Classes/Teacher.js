class Teacher {
    constructor(students) {
        this.students = students;
    }
    grade() {
        console.log("Everyone gets an A")
    }
}
class ScienceTeacher extends Teacher {
    doLab() {
        console.log("Don't burn the school down");
    }
}
class GymTeacher extends Teacher {
    train() {
        console.log("Time to run laps");
    }
    
}
const teacher = new GymTeacher("8");
teacher.train();
