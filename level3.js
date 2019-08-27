"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
// import Stud from './Studnets'
// import Students = require('./Student');
// interface declaration
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Hindi"] = 1] = "Hindi";
    LanguagesKnown[LanguagesKnown["Tamil"] = 2] = "Tamil";
})(LanguagesKnown || (LanguagesKnown = {}));
console.log('Hello ExecuteAutomation');
let a = true;
let b = 'Karthik';
let k = 1234;
console.log('a :', a);
let studentsList = [
    { Name: "Prashanth", Age: 26, Phone: 2342342341, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Roberto", Age: 25, Phone: 2342342342, Language: LanguagesKnown[LanguagesKnown.Hindi] }
];
let newStudent = { Name: "Reddy", Age: 24, Phone: 2342342343, Language: LanguagesKnown[LanguagesKnown.Tamil] };
studentsList.push(newStudent);
function GetStudentList(students) {
    students.forEach(element => {
        console.log("Age: " + element.Age + ' with Name ' + element.Name + " has Phone: " + element.Phone);
    });
}
GetStudentList(studentsList);
function GetNumbers(...nums) {
    nums.forEach(element => {
        console.log('element :', element);
    });
}
GetNumbers(5, 4, 3, 6, 1);
function GetInfo(info = "Happy") {
    console.log('I feel ' + info);
}
GetInfo();
GetInfo('Energized');
////// 
let StudentName = function (lName, fName) {
    return fName + '...' + lName;
};
console.log(StudentName("Bob", "Job"));
let s = new Student_1.default('Rick', 'James');
console.log(s.GetFullName());
// Generics
let studentsListG = [
    { Name: "Prashanth", Age: 26, Phone: 2342342341, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Roberto", Age: 25, Phone: 2342342342, Language: LanguagesKnown[LanguagesKnown.Hindi] }
];
function GetStudentListGenerics(students) {
    students.forEach(element => {
        console.log("Age2: " + element.Age + ' with Name ' + element.Name + " has Phone: " + element.Phone);
    });
}
GetStudentListGenerics(studentsListG);
//# sourceMappingURL=level3.js.map