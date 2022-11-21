var Passenger = /** @class */ (function () {
    function Passenger(fistName, lastName, frequentFlyerNo) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("Daiva", "Dhepe", 143);
passenger.display();
var passenger2 = new Passenger("Madhav", "Kanole", 456);
passenger2.display();
// for (let item in passenger) {
//       if ( item!=="display") {
//         console.log(item);
//         console.log(passenger[item]);
//       }
// }
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
