var emp={
    name:"Daiva",
    score:250,
}
for(var e in emp)
{
console.log(e);
console.log(emp[e]);

}
// for(var em in emp){
// console.log(em);


// }




// const str= "Opportunites does not happen you creat them";
// for(var op of str)
// {
//     console.log(op);
    
// }
console.warn("--------Array--------------");



var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

// for(var i = 0; i < courses.length; i++)
// {
//     console.log(courses[i]);
// }
// console.warn("=======De-structuring array================");
// var x=courses[0];
// var y = courses[1];

var [a,b,c]=courses;
console.log(a);
console.log(b);
console.log(c);

console.warn("========destructuring objects==============");
var std ={
    firstName:"Jack",
    lastName:"sparrow",
}
var { firstName:userFirstName,lastName:userLastName }=std;
console.log(userFirstName);
console.log(userLastName);

console.warn("-------Array function----------");
var arr:number[]=[20,30,12,100,20];
arr.splice(2,3,88,99);
console.log(arr.toString());

console.warn("======function============");
// function addsss(num1:number,num2:number){
//     return num1+num2;
// }
//  console.log(addsss(10));//you pass only one value thats vi no return 
 
 console.warn("=======optinal nparameter=====================");
 
 function display(id:number, name:string, role:string="Guest user") //by defult value 
 {
     console.log("Id", id);
     console.log("Name", name);
     console.log("role",role);
     
     
 }
 
//  display(1, "Dnyanesh", "Admin");
 display(1, "Daiva","Admin");
 
