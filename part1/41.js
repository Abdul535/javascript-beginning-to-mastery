// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName: myBand, famousSong, ...restProps } = band;
console.log(myBand); //led zepplin
console.log(famousSong); //stairway to heaven

console.log(restProps); 
//{ year: 1968,
//  anotherFamousSong: "kashmir"}


let marks = 10;
let obj = {
  marks
}
let obj = {
  marks : 10
}
console.log(obj)
/* {marks:10}

*/
