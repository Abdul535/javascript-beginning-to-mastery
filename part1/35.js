// array destructuring 

//1st way
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//2nd way
let [myvar1, myvar2, ...myNewArray] = myArray;


const myArray = ["value1", "value2", "value3","value4","value5"];
//Array Destructuring
let [ele1,...newArray] = myArray;
console.log(ele1) //value1
console.log(newArray) //[value2, value3, value4, value5]

//Object Destructuring
const obj = {name:"abc", age:32, city: "hyd"}
let {name, city} = obj;
console.log(name) //abc
console.log(city) //hyd

let {data} = response;






console.log("value of myvar1", myvar1); //value1
console.log("value of myvar2", myvar2); //value2
console.log(myNewArray);