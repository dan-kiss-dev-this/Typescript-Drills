// interface declaration
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Hindi"] = 1] = "Hindi";
    LanguagesKnown[LanguagesKnown["Tamil"] = 2] = "Tamil";
})(LanguagesKnown || (LanguagesKnown = {}));
console.log('Hello ExecuteAutomation');
var a = true;
var b = 'Karthik';
var k = 1234;
console.log('a :', a);
var studentsList = [
    { Name: "Prashanth", Age: 26, Phone: 2342342341, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Roberto", Age: 25, Phone: 2342342342, Language: LanguagesKnown[LanguagesKnown.Hindi] }
];
var newStudent = { Name: "Reddy", Age: 24, Phone: 2342342343, Language: LanguagesKnown[LanguagesKnown.Tamil] };
studentsList.push(newStudent);
function GetStudentList(students) {
    for (var index = 0; index < students.length; index++) {
        var element = students[index];
        console.log(element, 1);
    }
}
GetStudentList(studentsList);
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log('element :', element);
    });
}
GetNumbers(5, 4, 3, 6, 1);
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log('I feel ' + info);
}
GetInfo();
GetInfo('Energized');
// anonymous function
var StudentName = function (lName, fName) {
    return fName + '...' + lName;
};
console.log(StudentName("Bob", "Job"));
//# sourceMappingURL=app.js.map