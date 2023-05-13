// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index
[{},{}]

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"],
    class : "THS"
}
console.log(person);

// 1. dot notation
// 2. square brackets notations
// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["class"] = "THS";
person.class = "THS";
console.log(person.hobbies[1]);