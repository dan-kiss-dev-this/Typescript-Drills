// anonymous function
let StudentName2 = function (lName, fName) {
    return fName + '...' + lName;
};
console.log(StudentName2("Bob", "Job"));
class Students2 {
    // note you can remove the 2 values below and make constructor (private fname, private lName){} to get the same results you get below
    // code below replaces lines 13-20 below
    constructor(fname, lName) {
        this.fname = fname;
        this.lName = lName;
    }
    // private _fname: string;
    // private _lName: string;
    // // constructor is used when object is created
    // constructor(fName: string, lName: string) {
    //   // this allows you to access members of the class
    //   this._fname = fName;
    //   this._lName = lName;
    // }
    GetFullName() {
        return this.fname + ' ... ' + this.lName;
    }
}
let s2 = new Students2('Rick', 'James');
console.log(s2.GetFullName());
//# sourceMappingURL=level2.js.map