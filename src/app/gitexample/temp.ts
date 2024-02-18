let a: number = 10;
let b: number = 15;
let sum: number;
sum = a + b;
console.log(sum);

let item: Array<string> = ["oranges", "banana", "apple", "strawberrys"];
console.log(item.length);
//item.sort();

//let temp:Array<string>=[]

//let previous;

//for( let i=0; i<item.length; i++){ 
//console.log(item[i].slice(0,2));
//item.sort((a,b)=>{ return a.localeCompare(b)});
//console.log(item);
let temp1: Array<string> = []
for (let i = 0; i < item.length; i++) {

    if (item[i] == 'strawberrys') {
        console.log("yes");
        break;
    }
}



//}

