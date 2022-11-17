var n1:number = 10;
console.log(n1);  //compile with js because browser understand only js.
console.warn("-----------------------------------------");

var s1 : string = "You are the creator of your destiny";
var s2: string= " Powerful people come from powerful places";
console.log(s1);
console.log(s2);
console.warn("---------------------------------------------");
var b1 : any = {
    productId:1,
    productName:"iPhone",
    productPrice:250000,

}
console.log(b1);
console.warn("---------------------------");
//homodenous array , same datatype 
var arr1:Array<string>=[`Angular`,`NodeJs`,` React`];
arr1.push(`.NetCore`);

console.log(arr1);

// //hetrogenous array , 
// var arr2:Array<any>= [ `Angular`,123456,true];

// console.log(arr2);
console.warn("-----------------Object--------------------------");
var student ={
    name:"Codemind",
    score:200,

}
console.log(student.name);
console.log(student.score);







