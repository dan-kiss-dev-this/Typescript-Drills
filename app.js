// anonymous function
var StudentName = function (lName, fName) {
    return fName + '...' + lName;
};
console.log(StudentName("Bob", "Job"));
var Students = /** @class */ (function () {
    // note you can remove the 2 values below and make constructor (private fname, private lName){} to get the same results you get below
    // code below replaces lines 13-20 below
    function Students(fname, lName) {
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
    Students.prototype.GetFullName = function () {
        return this.fname + ' ... ' + this.lName;
    };
    return Students;
}());
var s = new Students('Rick', 'James');
console.log(s.GetFullName());
//# sourceMappingURL=app.js.map