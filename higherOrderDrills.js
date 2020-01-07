function repeat(fn, n) {
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
avalancheWarning('Loveland Pass');

let turtleSpeed = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function onwards(arr) {
    return arr.filter((e) => {
      return e[0] < 0 || e[1] < 0;
    });
}

console.log(onwards(turtleSpeed));

function totalSteps(arr) {
    return arr.map((e) => {
        return Math.abs(e[0]) + Math.abs(e[1]);
    });
}
console.log(totalSteps(turtleSpeed));
let stepArray = totalSteps(turtleSpeed);
function stepsMovements(arr) {
    return arr.forEach(function (currentElement, currentIndex)  {
        return console.log(`Movement #${currentIndex}: ${currentElement} steps.`);
    });
}
console.log(stepsMovements(stepArray));

function reduceDecoder(str) {
    let array = str.split(" ");
    let initialValue= "";
    return array.reduce(myFunc, initialValue);
 }
 
 function myFunc(result, current) {
     if (current.length===3) {
         return result + " ";
     }
     else {
         return result + current[current.length-1].toUpperCase();
     }
 }
 
 console.log(reduceDecoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));