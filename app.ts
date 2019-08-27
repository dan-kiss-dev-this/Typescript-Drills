import { IStudentInfo } from './IStudentInfo';
import Students from './Student';
// import Stud from './Studnets'

// interface declaration
enum LanguagesKnown { English, Hindi, Tamil }


console.log('Hello ExecuteAutomation');

let a: boolean = true;

let b: string = 'Karthik';

let k: number = 1234;

console.log('a :', a);



let studentsList: IStudentInfo[] = [
  { Name: "Prashanth", Age: 26, Phone: 2342342341, Language: LanguagesKnown[LanguagesKnown.English] },
  { Name: "Roberto", Age: 25, Phone: 2342342342, Language: LanguagesKnown[LanguagesKnown.Hindi] }
]

let newStudent = { Name: "Reddy", Age: 24, Phone: 2342342343, Language: LanguagesKnown[LanguagesKnown.Tamil] };

studentsList.push(newStudent);


function GetStudentList(students: IStudentInfo[]) {
  students.forEach(element => {
    console.log("Age: " + element.Age + ' with Name ' + element.Name + " has Phone: " + element.Phone)
  });
}

GetStudentList(studentsList);

function GetNumbers(...nums: number[]) {
  nums.forEach(element => {
    console.log('element :', element);
  })
}

GetNumbers(5, 4, 3, 6, 1);

function GetInfo(info: string = "Happy") {
  console.log('I feel ' + info);
}

GetInfo();
GetInfo('Energized');

////// 

let StudentName = function (lName: string, fName: string) {
  return fName + '...' + lName
}
console.log(StudentName("Bob", "Job"));


let s = new Students('Rick', 'James');
console.log(s.GetFullName());

// Generics
let studentsListG: Array<IStudentInfo> = [
  { Name: "Prashanth", Age: 26, Phone: 2342342341, Language: LanguagesKnown[LanguagesKnown.English] },
  { Name: "Roberto", Age: 25, Phone: 2342342342, Language: LanguagesKnown[LanguagesKnown.Hindi] }
]

function GetStudentListGenerics(students: Array<IStudentInfo>) {
  students.forEach(element => {
    console.log("Age2: " + element.Age + ' with Name ' + element.Name + " has Phone: " + element.Phone)
  });
}

GetStudentListGenerics(studentsListG);

