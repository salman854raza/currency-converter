#! /usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency from:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion to:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount to convert:"
    }
]);
// inquirer.prompt(questions).then((answers) => {
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
// import inquirer from "inquirer";
// // import { from } from "rxjs";
// let conversion = {
//     "Pkr": {
//     "USD": 0.0044,
//     "GBP": 0.0037,
//     "PKR": 1
// },
// "GBP": {
// "USD": 1.21,
// "Pkr": 271.79,
// "GBP": 1
// },
// "USD": {
// "Pkr": 225.50,
// "GBP": 0.83,
// "USD": 1
// }
// };
// const answers:{
//     from: "PKR"|"USD"|"GBP",
//     to:   "PKR"|"USD"|"GBP",
//     amount: number    
// } = await inquirer.prompt([
// {
//     type: "list",
//     name: "from",
//     choices: ["PKR","USB","GBP"],
//     message: "select your currency: "
// },
// {
//     type: "list",
//     name: "to",
//     choices: ["PKR","USB","GBP"],
//     message: "select your conversion: "
// },
// {
//          type: "number",
//         name: "amount",
//         message: "type your amount : "
// },  
// ]);
// const {from , to , amount} = answers;
// if (from && to && amount) {
//     let result = conversion [from][to] * amount;
//     console.log(`your conversion from ${from} to ${to} is ${result}`)
// }else {
//     console.log("invalid inputs")
// }
