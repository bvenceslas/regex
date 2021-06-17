// MATCHING A WORD

// let myString = "Venceslas is a software engineer";
// const regex = /engineer/;

// let result = regex.test(myString);
// console.log(result);

// ===============================================================================

//MATCHING MULTIPLE WORDS

// let myString = "internation fellowship from east africa to west";
// let regex = /east|west|north|south/

// const result = regex.test(myString);
// console.log(result);

// ===============================================================================

// MATCHING BY IGNORING CASE (Not working)

// let myString = "Venceslas";
// let regex = /venceslas/i;

// let result = regex.test(myString);
// console.log(regex.test(result));

// ===============================================================================

// EXTRACT FOUND WORD

// let myString = "Le reveil du Saint-Esprit est proche";
// let regex = /proche/;

// let result = myString.match(regex);
// console.log(result);

// ===============================================================================

// FIND MORE THAN THE FIRST REGEX

// let myString = "Petro, Abwe, Sangya, Sangya, Sangya";
// let regex = /Sangya/g;

// let result = myString.match(regex);
// console.log(result);

// ===============================================================================

// FIND MORE THAN THE FIRST REGEX BY IGNORING CASE

// let myString = "Petro, Abwe, Sangya, sangya, sangya";
// let regex = /sangya/ig;

// let result = myString.match(regex);
// console.log(result);

// ===============================================================================

// MATCHIND ANYTHING WITH A WILCARD PERIOD (Matches at least anything according to the condition)

// let myString1 = "The love is unlimitted";
// let myString2 = "The loan is available";
// let regex = /lo./; // here . is the wilcard period

// let loveResult = myString1.match(regex);
// let loanResult = myString2.match(regex);
// console.log(loveResult);
// console.log(loanResult);

// MATCHIND ANYTHING WITH A WILCARD PERIOD AT THE BEGINING OF A WORD

// let myString = "i am getting fun with regular expressions !";
// let regex = /.un/; 

// let result = myString.match(regex);
// console.log(result);

// ===============================================================================

//  MATCHING A WORD WITH A SPECIFIC CARACTER INSIDE

// let myString = "watch out there is a bug in your system bag";
// let regex = /b[au]g/ig; // Starting by 'b' and ending by 'g' 

// let result = myString.match(regex);
// console.log(result);

// FINDING A SINGLE CARACTER WITH MULTIPLE POSSIBILITIES

// let myString = "watch out there is a bug in your system bag";
// let vowelRegex = /[aeiou]/ig; 

// let result = myString.match(vowelRegex);
// console.log(result);

// ===============================================================================

// MATCH LETTERS OF THE ALPHABET

// let myString = "Will you stay with me tonight and pretend it's alright";
// let alphabetRegex = /[a-z]/ig; 

// let result = myString.match(alphabetRegex);
// console.log(result);

// ===============================================================================

// MATCH NUMBERS && LETTERS OF THE ALPHABET

// let myString = "Blueberry 2.141592653s are delicious.";
// let myRegex = /[2-6h-s]/ig; // from '2' to '6' and from 'h' to's'

// let result = myString.match(myRegex);
// console.log(result);

// ===============================================================================

// MATCH SINGLE CHARACTER NOT SPECIFIED

// let myString = "3 blind mice.";
// let regex = /[^0-9aeiou]/ig; // print everything except numbers and vowels

// let result = myString.match(regex);
// console.log(result);

// ===============================================================================

// MATCH A CHARACTER THAT OCCUR ONE OR MORE TIMES

// let myString = "Mississipi";
// let regex = /s+/g; 

// let result = myString.match(regex);
// console.log(result);

// ===============================================================================

// MATCH A CHARACTER THAT OCCUR ZERO OR MORE TIMES

// let myString = "gooooooooooal!";
// let mySentence = "gun is used by soldiers";
// let myPrase = "over the moon";
// let regex = /go*/; 

// let resultString = myString.match(regex);
// let resultSentence = mySentence.match(regex);
// let resultPrase = myPrase.match(regex);
// console.log(resultString);
// console.log(resultSentence);
// console.log(resultPrase);

// ===============================================================================

// FIND A CHARACTER WITH LAZY MATCHING

// let myString = "titanic";
// let regex = /t[a-z]*i/; // strong match

// let result = myString.match(regex);
// console.log(result);

//  LAZY MATCHING

let myString = "titanic";
let regex = /t[a-z]*?i/; // lazy match

let result = myString.match(regex);
console.log(result);

// ===============================================================================
