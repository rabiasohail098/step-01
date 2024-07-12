// step01_strong_typing
var myName = "Rabia";
var num = 4567;
var enroll = true;
var fruits = [];
var Student = /** @class */ (function () {
    function Student(name, last) {
        this.name = name;
        this.last = last;
    }
    return Student;
}());
var student = {
    name: "Rabia",
    last: "Sohail"
};
var color = {
    first: "Red",
    second: "Green",
    third: "Yellow"
};
// Implicitly typed
var vegetable;
vegetable = "Tomato";
vegetable = 45;
vegetable = true;
vegetable = [];
vegetable = {};
vegetable = function name(params) {
};
//type inference
var num1 = 5;
num1 += num1++;
console.log(num1);
console.log(num1);
var child = "Yashal";
child = "Kiswah";
//compile or run time error
child = 1235;
