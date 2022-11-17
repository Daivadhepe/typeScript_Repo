class Passenger{
    firstName:string;
    lastName:string;
    frequentFlyerNo:number;
    constructor(fistName:string,lastName:string,frequentFlyerNo:number){
        this.firstName=fistName;
        this.lastName=lastName;
        this.frequentFlyerNo=frequentFlyerNo;
    }
}
var passenger= new Passenger("Daiva","Dhepe",143);
console.log(passenger.firstName+" "+ passenger.lastName+" "+ passenger.frequentFlyerNo);