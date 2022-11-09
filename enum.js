var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[1]);
console.log(Gender[0]);
var weekEnds;
(function (weekEnds) {
    weekEnds[weekEnds["Saturday"] = 6] = "Saturday";
    weekEnds[weekEnds["Sunday"] = 7] = "Sunday";
})(weekEnds || (weekEnds = {}));
console.log(weekEnds[6]);
console.log(weekEnds[7]);
