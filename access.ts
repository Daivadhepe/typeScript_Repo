class Student{
   private _userName:string;

   get name():string{
    return this._userName;
   }
   set name(name:string){
    if ( name=="Daiva") {
        this._userName=name;
    }
   
   }
 display(){
    console.log(this._userName);
    
 }
}
var objstudent = new Student();
objstudent.name="Daiva";
console.log(objstudent.name);
