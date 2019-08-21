console.log('Hello ExecuteAutomation');
var a = true;
var b = 'Karthik';
var k = 1234;
console.log('a :', a);
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Hindi"] = 1] = "Hindi";
    LanguagesKnown[LanguagesKnown["Tamil"] = 2] = "Tamil";
})(LanguagesKnown || (LanguagesKnown = {}));
var studentsList = [
    { Name: "Prashanth", Age: 26, Phone: 234 - 234 - 2341, Language: LanguagesKnown.English },
    { Name: "Roberto", Age: 25, Phone: 234 - 234 - 2342, Language: LanguagesKnown.Hindi }
];
var newStudent = { Name: "Reddy", Age: 24, Phone: 234 - 234 - 2343, Language: LanguagesKnown.Tamil };
studentsList.push(newStudent);
for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log(element);
}
//# sourceMappingURL=app.js.map