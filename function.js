function doubleMe(x) {
    // checking input parameter as a number or not
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    // checking input para as string or not
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name + " " + name); });
    }
}
doubleMe(2); // calling the function
doubleMe("John");
doubleMe(["Codemind", "Test"]);
console.warn("------rest params--------------------");
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var index = 0; index < nums.length; index++) {
        console.log(nums[index]);
        result *= nums[index];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
console.warn("==========arrow function==============");
var hello = function (name) {
    return "Hello" + name;
};
console.log(hello("AngularBatch4"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 7));
