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
