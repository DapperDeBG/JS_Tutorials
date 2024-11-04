//Method (Without Argument)

const message = "Hello World!";

// Very Imp - "any space considered as an index in string"

// const capitalMessage = message.length;  //12   //length - string property

// const capitalMessage = message.toUpperCase();
// const capitalMessage = message.toLowerCase();
// console.log(capitalMessage);

const sampleStatement = "                 Hi! I am Debanjan Ghosh.              "
console.log(sampleStatement);

const finalMessage = sampleStatement.trim();

const finalMessageUpperCase = sampleStatement.trim().toLocaleUpperCase();
console.log(finalMessageUpperCase);

//trimStart //trimEnd



//Methods(with argument)

//includes

console.log(finalMessage.includes("am"));//true
console.log(finalMessage.includes("Am"));//false

//indexOf

console.log(finalMessage.indexOf(["m"])); //7

console.log(finalMessage.indexOf(["u"])); //-1  
/* indexOf-- In any big string,if there is an small string or not. if there is string then 
  it will give the string index of the starting CharacterData, if there is no string then it 
  will give negative one. */




  //replace

// console.log(finalMessage.replace("Hello", " Hi"));

const replacedMessage = finalMessage.replace("Hi", "Hello");
console.log(replacedMessage);

/*If I replace the a to A,then just the first one has changed. So the replace only changes one.
 Inthe whole string, it will change the first one. but if i want to replace all the matching
strings/characters, the replaceAll comes in handy.. */

//replaceAll

console.log(finalMessage.replaceAll("a", "A"));

//concat

//console.log(message + " " + finalMessage);

console.log(message.concat(" ",finalMessage));  //same as above 
//template literals - mostly used


//padStart 

const lastFourDigits = "4545";
// console.log("********" + lastFourDigits );  

console.log(lastFourDigits.padStart(12,"*")); //padStart

//padEnd

console.log(lastFourDigits.padEnd(12,"*")); //padEnd

//charAt

const anotherStatement = "Hey This is SAHEB!"

// console.log(anotherStatement[7]);

console.log(anotherStatement.charAt(13)); //same as above 

//charCodeAt

console.log(anotherStatement.charCodeAt(13));  //65 //  give ASCII Code as output // A = 65

//split

console.log(anotherStatement.split(" ")); //splits the whole string //non primitive data type //array related

// console.log(anotherStatement.split("i"));  //splits through i

// console.log(anotherStatement.split(""));  //spliting the total string here


//template literals

const concatenatedString = `Last four digits of my account number is`.concat(' ',lastFourDigits);
console.log(concatenatedString);


const templateString = `Last four digits of my account number is ${lastFourDigits.padEnd(12,"*")} `
console.log(templateString);


const bankBalance = 100000;
const templateString2 = `I have only ${bankBalance} Rs/- in my account.`;
console.log(templateString2);

















