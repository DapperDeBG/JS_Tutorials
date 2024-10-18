let score = 33;


console.log(typeof score);
//console.log(typeof(score));

let score1 = "33";
console.log(typeof score1);
//console.log(typeof(score1));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);



let score2 = "33abc";

let valueInNumber1 = Number(score2);
console.log(typeof valueInNumber1);

console.log(valueInNumber1); 
/*//NaN //also a type of data // conversion done but
it's not a pure number (33abc here) */


let score3 = null;

let valueInNumber2 = Number(score3);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2); //0 or (NaN in some cases)


let score4 = undefined;

let valueInNumber3 = Number(score4);  
console.log(typeof(valueInNumber3)); 
console.log(valueInNumber3); //NaN

let score5 = "DebD";

let valueInNumber4 = Number(score5);  
// console.log(typeof(valueInNumber4)); 
console.log(valueInNumber4);  // string to number conversion //NaN



// "33" => 33
//"33abc"=> NaN
//true => 1; false =>0

let isloggedIn = 1;

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn); //true

let isloggedIn1 = "DebD";

let booleanIsLoggedIn1 = Boolean(isloggedIn1);
console.log(booleanIsLoggedIn1);  //true

let isloggedIn2 = "";

let booleanIsLoggedIn2 = Boolean(isloggedIn2);
console.log(booleanIsLoggedIn2);  //false

//1 => True;  0 => False
// "" => false
// "DebD" => true




let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); //33
console.log( typeof stringNumber); //string

