'use strict';

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