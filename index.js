#! /usr/bin/env node
import inquirer from "inquirer";
const currencyData = {
    USD: 1, //Base currency
    EUR: 0.93,
    GBP: 0.80,
    PKR: 278.5,
    NOK: 10.9,
    SEK: 10.8,
    DKK: 6.9,
    INR: 83.2,
};
let userInput = await inquirer.prompt([
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "NOK", "GBP", "PKR", "DKK", "SEK", "EUR", "INR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "NOK", "GBP", "PKR", "DKK", "SEK", "EUR", "INR"]
    },
]);
let fromCurrencyRate = currencyData[userInput.from];
let toCurrencyRate = currencyData[userInput.to];
let conversionAmount = userInput.amount;
let baseAmount = userInput.amount / fromCurrencyRate; //conversion to base currency
let convertedAmount = Math.floor(baseAmount * toCurrencyRate);
console.log("your converted amount is: " + convertedAmount + " " + userInput.to);
