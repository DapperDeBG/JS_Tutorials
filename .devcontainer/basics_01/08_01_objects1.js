const myName = "DebD";

//object creation
const user1 = {
    firstName: "Debanjan",
    lastName: "Ghosh",
    age: 33,
    education: "B-tech",
    city: "Kolkata"
}

const user2 = {
    firstName: "Debanjan",
    lastName: "Ghosh",
    education: "B-tech",
    city: "Kolkata",
    DebD: "Novice"
}

//keys are actually strings.
//"last-name"-if you want to add any dash in the middle of any word,you have to put string in that case..

// key and value pairs of both of this objects are same but addresses of these objects are different..
// while comparing two objects , their values don't get compared but only their addresses get..



// const username1 = "";
// const username2 = "";


// the address of empty strings will always be same and it's 77.  unlike the object
//because string is a primitive type and we have created it in the same way

// when it comes to  reference type or non-primitive types, values are not compared , only
 //their addresses are compared.

 //value access

 console.log(user2.city);    //dot notation

 console.log(user1["city"]); //bracket notation // very powerful and mostly used..

 //variables , expressions all we can write using  this bracket or square notation.
console.log(user1["first" + "Name"]);  //expression  //Debanjan

//  console.log(user1["last-name"])  //dash in between // bracket notation must be used


console.log(user2.DebD); //undefined


// console.log(user2.myName); //undefined  //not directly in 
 console.log(user2[myName]); //Novice   //  bracket notation must be used


 //value add

user2.age = 33;
console.log(user2.age); 
// console.log(user2);

user2["is-student"] = true;
console.log(user2);  


//nested objects

const user3 = {
    firstName: "Debanjan",
    lastName: "Ghosh",
    age: 33,
    education: "B-tech",
    address: {
        city:"Kolkata",
        pinCode: 711101,
        state: "West Bengal",
        moreDetails: {
            population: "1cr",
            area: "7000 sq km"
        }
    }
}
console.log(user3.pinCode);
console.log(user3.address.city); 








// 0000000000 singleton 000000000 // object.create// through constructor method

//objects literals   //for object declaration

const mySym = Symbol("key1");


const JsUser = {
  name: "Debanjan",
  // "full name" : "Debanjan Ghosh",
  [mySym] : "mykey1", //it's a symbol key so it should be in a square bracket.When we 
  // refer a symbol, we should use square bracket.
  age: 32,
  location: "Kolkata",
  email: "debd6050@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday ","Saturday"]
}

console.log(JsUser.name);
// console.log(JsUser["full name"]);
console.log(JsUser["email"]);
// console.log(typeof JsUser.mySym);  //string but here we want symbol.

console.log(typeof JsUser[mySym]);



JsUser.email  = "debd1990@gmail.com";
console.log(JsUser.email);
// Object.freeze(JsUser); // freeze the object so that we can't change the object..
// JsUser.email  = "debonairdeb.com"; 

// console.log(JsUser.email); //will not propagate as object is already freezed here.


//when we refer any method in object, it will be called as a function.  
// console.log(JsUser.greeting()). use parenthisis is must when calling a function.
JsUser.greeting = function(){  
  console.log("Hello Js User!");
}

console.log(JsUser.greeting);//[Function (anonymous)] // here function don't get executed , 
// but only the reference of the function has come as output.

console.log(JsUser.greeting()); 
//use parenthisis is must when calling a function.

JsUser.greetingTwo = function(){
  console.log(`Hello Js User,${this.name}`);  //same object reference 
} // here this keyword refers the object itself.

console.log(JsUser.greetingTwo());

// **** very IMP **** we should always use dot notation for accessing the object properties
//  but some cases we use square bracket notation




//singleton


// const tinderUser = new Object; //singleton object

const tinderUser = {}; //non-singleton object

tinderUser.id = "123abc";
tinderUser.name= "DebD";
tinderUser.isLoggedIn = false; 

// console.log(tinderUser); //  

const regularUser = {
  email: "debd6050@gmail.com",
  fullname: {
     userfullname: {
       firstname: "Debanjan",
       lastname:  "Ghosh"
     }
  }
}

console.log(regularUser.fullname.userfullname.firstname);


//optional chaining    ?? 

// console.log(regularUser.fullname?.userfullname.firstname);




//objects merging/combining

const obj1 = {1: "a", 2: "b"}; //key:"value"
const obj2 = {3: "a", 4: "b"};

//const obj3 = {obj1,obj2};



const obj3 = Object.assign({}, obj1, obj2);

/* assign-  Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

@param target — The target object to copy to.

@param source — The source object from which to copy properties.*/


/*Syntax:
Object.assign(target, ...sources);

Parameters: 
target: It is the target object to which values and properties have to be copied.
sources: It is the source object from which values and properties have to be copied.


Return Value: 
****** Object.assign() returns the target object. */


/*Applications: 
Object.assign() is used for cloning an object, to merge objects with the same properties.

Errors and Exceptions:
A TypeError is raised if the property is non-writable.
The target object can be changed only if the properties are added before the error is raised.*/

console.log(obj3);




let obj_1 = {a:10, b:10,c:10};
let obj_2 = {b:20,c:20};
let obj_3 ={c:30};

let new_obj = Object.assign({},obj_1,obj_2,obj_3);
console.log(new_obj);


/*
// array of object
const users = [
  {
    id:1,
    email:"dg@gmail.com"
  },

  {
    id:1,
    email:"dg@gmail.com"
  },
  {
    id:1,
    email:"dg@gmail.com"
  },
  
]   

console.log(users[1].email ) //for value print   */




keys,values, entries


console.log(tinderUser);

console.log(Object.keys(tinderUser));  // datatype array
console.log(Object.values(tinderUser));//datatype array
console.log(Object.entries(tinderUser));//datatype array



// for finding properties of any object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

console.log(tinderUser.hasOwnProperty(' isLogged ')); //false




const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
      return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName);

// console.log( `hello ${this.firstName}`); //hello undefined

/* When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed. */










