"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    function Students(fname, lName) {
        this.fname = fname;
        this.lName = lName;
    }
    Students.prototype.GetFullName = function () {
        return this.fname + ' ... ' + this.lName;
    };
    return Students;
}());
exports.Students = Students;
//# sourceMappingURL=Student.js.map