function add(x:number,y:number):number {
return x+y;
}

function sub( x:number,y:number):number {
    return x-y;
    
}

export{add,sub}
console.warn("=====================");
export class Calculator {

    add(x:number, y: number) : number {
       return x + y;
   }
   
    sub(x: number, y: number) : number {
       return x - y ;
   }
   
}
