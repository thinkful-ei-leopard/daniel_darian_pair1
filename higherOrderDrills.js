/*function repeat(fn, n) {
    for (let i=0; i<n; i++) {
       return fn;
    }
}
function hello() {
    console.log('Hello World');
}
function goodbye() {
    console.log('Goodbye world');
}

repeat(hello(), 5);
repeat(goodbye(), 5);

function filter(arr, fn) {
let newArray = [];
for (let i=0; i<arr.length; i++) {
    if (fn(arr[i])===true) {
        newArray.push(arr[i]);
    }

}
return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

function hazardWarningCreator(typeOfWarning) {
 let warningCounter =0;
 return function(location) {
     increment = 1;
     warningCounter += increment;
     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
     console.log (`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
 }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const avalancheWarning = hazardWarningCreator('Avalanche Danger');
const mudSlideWarning = hazardWarningCreator('Mud Everywhere');

rocksWarning('Boulder Canyon');
avalancheWarning('I70');
mudSlideWarning('Everywhere');
rocksWarning('IDK');
avalancheWarning('Steamboat');
avalancheWarning('Vail');
avalancheWarning('Loveland Pass');*/

let turtleSpeed = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function onwards(arr) {
    for (let i=0; i<arr.length; i++) {
        let movement = arr[i];
        newArray = arr.filter(arr => (movement[0] > 0));
    }
    return newArray;
}
console.log(onwards(turtleSpeed));

function totalSteps(arr) {
 let newArr = [];
 newArr = arr.map(absoluteValue(arr));
 return newArr;
}
function absoluteValue(arr) {
    let value = Math.abs(arr[0]) + Math.abs(arr[1]);
    return value;
}
console.log(totalSteps([0, 1, 2]));