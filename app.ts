// anonymous function
let StudentName = function (lName: string, fName: string) {
  return fName + '...' + lName
}
console.log(StudentName("Bob", "Job"));

class Students {
  // note you can remove the 2 values below and make constructor (private fname, private lName){} to get the same results you get below

  // code below replaces lines 13-20 below
  constructor(private fname, private lName) { }

  // private _fname: string;
  // private _lName: string;
  // // constructor is used when object is created
  // constructor(fName: string, lName: string) {
  //   // this allows you to access members of the class
  //   this._fname = fName;
  //   this._lName = lName;
  // }

  GetFullName(): string {
    return this.fname + ' ... ' + this.lName;
  }
}

let s = new Students('Rick', 'James');
console.log(s.GetFullName());