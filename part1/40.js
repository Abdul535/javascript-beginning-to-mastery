// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// const newArray = [...["apple","mango"]];
// console.log(newArray); //[apple, mango]

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };

newObject = {
  key1: "value1",
  key3: "value3",
  key4: "value4",
  key2: "value2",
  key69: "value69"
}


// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);

// can we convert array to object? //Yes
// can we convert object to array? //No
