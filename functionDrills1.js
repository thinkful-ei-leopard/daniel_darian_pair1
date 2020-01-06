function createGreeting (name, age) {
    const yearOfBirth = (2020-age);
    return `Hi, my name is ${name} and I am ${age}. I was born in ${yearOfBirth}`;
}
let greeting1 = createGreeting("Daniel", 27);
console.log(greeting1);

let subtraction =5;
const year = 2020-subtraction;
console.log(year);

function getYearOfBirth (age) {
if (age < 0){
    throw new Error('Age can not be negative');
}
    return (2020-age);
}
try {
    const greeting1 = createGreeting ("Zeus", 3456);
} catch (e){
    console.log (e.name);
}