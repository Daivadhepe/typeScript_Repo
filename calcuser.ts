import{add,sub} from './calc';
console.log(add(2,3));
console.log(sub(10,5));

console.warn("======================================");
import { Calculator} from './calc';

var objCalc = new Calculator();
console.log(objCalc.add(2,3));
console.log(objCalc.sub(10, 5));
