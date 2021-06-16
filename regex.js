// MATCHING A WORD

// let myString = "Venceslas is a software engineer";
// const regex = /engineer/;

// let result = regex.test(myString);
// console.log(result);


//MATCHING MULTIPLE WORDS

// let myString = "internation fellowship from east africa to west";
// let regex = /east|west|north|south/
// const result = regex.test(myString);
// console.log(result);


// MATCHING BY IGNORING CASE

// let myString = "Venceslas";
// let regex = /venceslas/i;

// let result = regex.test(myString);
// console.log(regex.test(result));


// EXTRACT FOUND REGEX

// let myString = "Le reveil du Saint-Esprit est proche";
// let regex = /proche/;

// let result = myString.match(regex);
// console.log(result);


// FIND MORE THAN THE FIRST REGEX

// let myString = "Petro, Abwe, Sangya, Sangya, Sangya";
// let regex = /Sangya/g;

// let result = myString.match(regex);
// console.log(result);


// FIND MORE THAN THE FIRST REGEX

// let myString = "Petro, Abwe, Sangya, sangya, sangya";
// let regex = /sangya/ig;

// let result = myString.match(regex);
// console.log(result);


// FIND A WORD WITH A PERIOD

// let myString1 = "The love is unlimitted";
// let myString2 = "The loan is available";
// let regex = /lo./;

// let result1 = myString1.match(regex);
// let result2 = myString2.match(regex);
// console.log(result1);
// console.log(result2);