
console.log('Hello ExecuteAutomation');

let a: boolean = true;

let b: string = 'Karthik';

let k: number = 1234;

console.log('a :', a);

enum LanguagesKnown { English, Hindi, Tamil }

let studentsList = [
  { Name: "Prashanth", Age: 26, Phone: 234 - 234 - 2341, Language: LanguagesKnown[LanguagesKnown.English] },
  { Name: "Roberto", Age: 25, Phone: 234 - 234 - 2342, Language: LanguagesKnown.Hindi }
]

let newStudent = { Name: "Reddy", Age: 24, Phone: 234 - 234 - 2343, Language: LanguagesKnown.Tamil };

studentsList.push(newStudent);


function GetStudentList(students: Array<any>) {
  for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element, 1)
  }
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