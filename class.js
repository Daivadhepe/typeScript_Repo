var Passenger = /** @class */ (function () {
    function Passenger(fistName, lastName, frequentFlyerNo) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    return Passenger;
}());
var passenger = new Passenger("Daiva", "Dhepe", 143);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerNo);
