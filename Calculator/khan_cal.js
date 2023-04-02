#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const cal = await inquirer.prompt([{
        type: "number",
        name: "numberOne",
        message: chalk.bgGray("Pleas Enter your frist number :"),
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.bgMagenta("Pleas Enter your Second  number :"),
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: chalk.green("Select which operation do want to perform in the fallowing :"),
    },]);
const { numberOne, numberTwo, operator } = cal;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log(chalk.blueBright("Your result is :", result));
}
else {
    console.log(chalk.red("Somthing is worng kindly checked"));
}
