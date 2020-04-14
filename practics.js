
console.log(leftBorderWidth);
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log('string'*9);

let person = {
    name: "Igor",
    age: 31,
    job: false
};
console.log (person.name);

let inc = 10,
    dec = 10;

inc++;
dec--;

console.log(inc);
console.log(dec);

//домашка 1
let money;
let time;

var appData = {
    moneyData: "money",
    timeData: "time",
    expenses : {
        "questionOne" : "answerOne "
    },
    optionalExpenses : {},
    income : [],
    savings: false
}

let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
let answerOne = prompt("Во сколько обойдется?");

alert("Бюджет на 1 день " + answerOne/30 +"единица");