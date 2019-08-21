
console.log('Hello ExecuteAutomation');

let a: boolean = true;

let b: string = 'Karthik';

let k: number = 1234;

console.log('a :', a);

enum LanguagesKnown { English, Hindi, Tamil }

let studentsList = [
  { Name: "Prashanth", Age: 26, Phone: 234 - 234 - 2341, Language: LanguagesKnown.English },
  { Name: "Roberto", Age: 25, Phone: 234 - 234 - 2342, Language: LanguagesKnown.Hindi }
]

let newStudent = { Name: "Reddy", Age: 24, Phone: 234 - 234 - 2343, Language: LanguagesKnown.Tamil };

studentsList.push(newStudent);

for (let index = 0; index < studentsList.length; index++) {
  const element = studentsList[index];
  console.log(element)
}