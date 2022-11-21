class Passenger{
    firstName:string;
    lastName:string;
    frequentFlyerNo:number;
    constructor(fistName:string,lastName:string,frequentFlyerNo:number){
        this.firstName=fistName;
        this.lastName=lastName;
        this.frequentFlyerNo=frequentFlyerNo;
    }
    display(){
        console.log(this.firstName+" "+ this.lastName+" "+ this.frequentFlyerNo);
    }
}
var passenger= new Passenger("Daiva","Dhepe",143);
passenger.display();
var passenger2=new Passenger("Madhav","Kanole",456);
passenger2.display();


// for (let item in passenger) {
//       if ( item!=="display") {
//         console.log(item);
//         console.log(passenger[item]);
        
        
//       }
     
     
// }
for (let item in passenger) {
     if ( passenger[item] instanceof Function) {
        continue;
     }
     else{
        console.log(item);
        console.log(passenger[item]);
        
        
     }
}