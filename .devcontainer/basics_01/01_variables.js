const accountID = 144553;
let accountEmail = "debdghosh90@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";

// accountID = 2; //not allowed

accountEmil = "debd6050@gmail.com";
accountPassword = "23456";
accountCity =  "Odisha";

let accountState;


/* 
Prefer not to use var.
because of issue in block scope and functional scope
*/
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);