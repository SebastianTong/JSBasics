//These are the two ways of commenting, useful for saving code you don't want to delete.

/* Lecture 1

var name = "Sebastian";
console.log(name);

var lastName = "Tong";
console.log(lastName);

var age = 23;
console.log(age);

var fullAge = true;
console.log(fullAge);

*/

/* Lecture 2

var name = 'Sebastian';
var age = 23
//console.log(name + age);
//console.log(age + age);

//Type coercion: when JS converts two different data types into the same one.

var job, isMarried;

//console.log(job);

job = 'developer';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. ' + 'Is he married?' + ' ' + isMarried + '.');

age = 'twenty three';
job = 'programmer';

console.log(name + ' is a ' + age + ' year old ' + job + '. ' + 'Is he married?' + ' ' + isMarried + '.');

//var lastName = prompt('What is your last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. ' + 'Is he married?' + ' ' + isMarried + '.');

*/

// Lecture: Operators
/*
var now = 2017;
var birthYear = now - 23;

birthYear = now - 23 * 2;
//2017 - 46
//1971

console.log(birthYear);

*/

// Lecture: If / else statements.

/*
var name = 'Sebastian';
var age = 23;
var isMarried = 'yes';

if(isMarried === 'yes') {
    console.log(name + ' is married');
} 
else
{
    console.log(name + ' will hopefully get married soon :)');
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
}
else
{
    console.log('NO!');
}

if(23 === '23')
{
    console.log('Something to print..');
}
else
{
    console.log('Some other thing to print..');
}
*/


//Lecture: Boolean logic and switch.

/*
var age = 25;

if(age < 20)
{
    console.log('John is a teenager');
}
else if(age > 20 && age < 30)
{
    console.log('John is a young man');
}
else
{
    console.log('John is an adult');
}

var job = 'cop';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'programmer':
        console.log('John develops applications');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}
*/

//Challenge #1:
/*

var ageNick = 30;
var ageBunz = 30;
var ageSeba = 30;
var heightNick = 175;
var heightBunz = 175;
var heightSeba = 175;

var scoreNick = heightNick + ageNick * 5;
var scoreBunz = heightBunz + ageBunz * 5;
var scoreSeba = heightSeba + ageSeba * 5;

console.log(scoreNick);
console.log(scoreBunz);
console.log(scoreSeba);


if(scoreNick > scoreBunz) {
    console.log('Nick wins with a score of ' + scoreNick);
}
else if (scoreNick === scoreBunz)
{
    console.log('Its a draw!');
}
else
{
    console.log('Bunz wins with a score of ' + scoreBunz);
}


if(scoreNick > scoreBunz && scoreNick > scoreSeba) {
    console.log("Nick wins with a score of " + scoreNick);
}
else if(scoreBunz > scoreNick && scoreBunz > scoreSeba){
    console.log("Bunz wins with a score of " + scoreBunz);
}
else if(scoreSeba > scoreNick && scoreSeba > scoreBunz){
    console.log("Seba wins with a score of " + scoreSeba);
}
else
{
    console.log('It\'s a draw!');
}
*/

//Lecture: Functions.

/*

function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}

var ageSeba = calculateAge(1994);
var ageBunz = calculateAge(1986);
var ageNick = calculateAge(1988);

function calculateRetirement(name, year){
    var retirement = 65 - age;
    if(retirement >= 0){
        console.log(name + " retire's in " + retirement + " years.");
    } else{
        console.log(name + " is already retired");
    }
}

calculateRetirement(Seba, 1994);
calculateRetirement(John, 1990);
calculateRetirement(Mary, 1950);

*/

//Lecture: Arrays

/*

var names = ['Seba', 'Nick', 'Bunz'];
var years = new Array(1994, 1986, 1984);
names[1] = 'Sonia';
console.log(names[0]);
console.log(names);

var seba = ['Sebastian', 'Tong', 1994, false, 'developer'];

seba.push('red');
seba.unshift('Mr.');
seba.pop();
seba.shift();

if(seba.indexOf('teacher') === -1){
    console.log("Sebastian is NOT a teacher");
} 

*/

//Lecture: Objects
/*

var seba = {
    name: 'Sebastian',
    lastName: 'Tong',
    yearOfBirth: 1994,
    job: 'developer',
    isMarried: false
};

console.log(seba.lastName);
console.log(seba['lastName']);

var xyz = 'job';
console.log(seba[xyz]);

seba.lastName = 'Yang';
seba['job'] = 'programmer';

console.log(seba);

var demin = new Object();
demin.name = "Demin";
demin['yearOfBirth'] = 1994;
demin['job'] = 'retired';
demin.isMarried = false;

console.log(demin);

*/

//Lecture: Objects and Methods

/*

var seba = {
    name: 'Sebastian',
    lastName: 'Tong',
    yearOfBirth: 1994,
    favColour: 'red',
    job: 'developer',
    isMarried: 'soon with B',
    isPro: true,
    printJobStatement: function(){
        return this.name + " is a " + this.job;
    },
    calculateAge: function(){
        return this.age = 2018 - this.yearOfBirth;
    }
}
seba.calculateAge();
console.log(seba);

2nd way up here.
-----------------------------------------------------


console.log(seba.calculateAge());
console.log(seba.printJobStatement());

1st way of adding a property inside the Object:
calculateAge: function(){
    return 2018 - this.yearOfBirth;
}

console.log(seba.calculateAge());
console.log(seba.printJobStatement());
var age = seba.calculateAge();
seba.age = age;

*/

//Lecture: Loops

/*

for (var i = 0; i < 10; i++) {
    console.log(i);
}

*/
/*
var names = ['Sebastian', 'Nick', 'Bunz', 'Demin', 'James'];

for (var i = 0; i < 5 ; i++){         // here you can also use names.lenght
    console.log(names[i]);
 }

//What if we want to do it the other way?

for (let i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}

*/
