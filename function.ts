function doubleMe(x:number); //declaration    //function overloading .
function doubleMe(y:string);
function doubleMe(arr:string[]);





function doubleMe(x:any) {         //implimentation
    // checking input parameter as a number or not
if ( x && typeof x==="number") {
    console.log(x*2);
    
}
// checking input para as string or not
else if (x && typeof x === "string"){
    console.log(x + " " + x);
    
}
else if ( Array.isArray(x)) {
    return x.map(name=>console.log(name+" "+name))
}
}

doubleMe(2) ;// calling the function
doubleMe("John");
doubleMe(["Codemind","Test"]);

console.warn("------rest params--------------------");
var product = function (...nums)
{
    var result =1 ;
    for (let index = 0; index < nums.length; index++) {
        console.log(nums[index]);
        result *=nums[index];

        
    }
    return result ;
}
console.log(product(2,3,4,5));
console.warn("==========arrow function==============");
var hello=(name:string):string=>{
    return "Hello"+name;
};
console.log(hello("AngularBatch4"));


var multiply = (num1:number,num2:number):number=>{
    return num1*num2;
}
console.log(multiply(2,7));

