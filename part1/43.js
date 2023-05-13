// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
    {userId: 4,firstName: 'abc', gender: 'female'},

]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName); //harshit
console.log(userId); //1


console.log(user3gender); //male

const [ ,{firstName:superStar, gender:superStarGender, ...rest}, ...remain ] = users;
console.log(superStar)  //mohit
console.log(superStarGender)  //male
console.log(rest) //{userId: 2}

console.log(remain) // [{userId: 3,firstName: 'nitish', gender: 'male'},{userId: 4,firstName: 'abc', gender: 'female'}]