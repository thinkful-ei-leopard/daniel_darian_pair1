function jediName(firstName, lastName) {
    let jedi1 = lastName.slice(0, 3);
    let jedi2 = firstName.slice(0,2);
    return jedi1.concat(jedi2);
}
console.log(jediName("Daniel", "Fong"));