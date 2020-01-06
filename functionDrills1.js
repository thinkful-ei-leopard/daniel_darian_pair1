function createGreeting (name, age) {
    if (name === undefined || age === undefined) {
        throw new Error('Arguments not valid');
    }
    else if (typeof name !== "string") {
        throw new TypeError('Name must be a string');
    }
    else if (typeof age !== "number") {
        throw new TypeError('Age must be a number');
    }
    return `Hi, my name is ${name} and I am ${age}. I was born in ${getYearofBirth()}`;
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