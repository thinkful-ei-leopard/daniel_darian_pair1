function jediName(firstName, lastName) {
    let jedi1 = lastName.slice(0, 3);
    let jedi2 = firstName.slice(0,2);
    return jedi1.concat(jedi2);
}
console.log(jediName("Daniel", "Fong"));

function beyond (num){
    if (num === Infinity){
    return 'And beyond';
    }
    else if (num > 0){
       return 'To Infinity'; 
    }
    else if (num < 0){
        return 'To negative infinity';
    }
    else if (num === 0){
        return 'Staying home';
    }
}
console.log (beyond (-6));

function decode(word) {
    if (word[0] === 'a') {
        return word[1];
    }
    else if (word[0] === 'b') {
        return word[2];
    }
    else if (word[0] === 'c') {
        return word[3];
    }
    else if (word[0] === 'd') {
        return word[4];
    }
    else {
        return " ";
    }
}
console.log(decode('craft'));
console.log(decode('block'));
console.log(decode('argon'));
console.log(decode('meter'));
console.log(decode('bells'));
console.log(decode('brown'));
console.log(decode('croon'));
console.log(decode('droop'));

function howManyDays (month, leapYear) {
    switch (month) {
    case 'January' :
    case 'March' : 
    case 'May' :
    case 'July' :
    case 'August' :
    case 'October' :
    case 'December' :   
        result = `${month} has 31 days`;
        break;
    }   
    switch (month) {
    case 'April' :
    case 'June' :
    case 'September' :
    case 'November' :
        result = `${month} has 30 days`
        break;
    }
    switch (month) {
    case 'February'
    if (leapYear === true){
        result = 'February has 29 days'
    }
    else {
         'February has 28 days'
        result = 'February has 28 days'
        break; 
    }  
}
}
console.log ( howManyDays('January'));                       