"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var StudentID = Math.floor(Math.random() * 100000);
var get_name_and_info = await inquirer_1.default.prompt([{
        name: "StudentName",
        type: "input",
        message: "Enter Your Name To Enroll",
        validate: function validate(unname) {
            if (unname.trim() !== "") {
                return true;
            }
            return "Written name is necessary to enroll";
        }
    },
    {
        name: "Courses",
        type: "list",
        message: "Which course you want to enroll",
        choices: ["FrontEnd", "BackEnd", "Python"]
    }]);
var courses_fee = {
    'FrontEnd': 6000,
    'BackEnd': 10000,
    'Python': 12000
};
console.log("Your Name: ".concat(get_name_and_info.StudentName, " is enrolling a course of ").concat(get_name_and_info.Courses, " \n The proce if this course is ").concat(courses_fee[get_name_and_info.Courses]));
var payment_method = await inquirer_1.default.prompt([{
        name: "PaymentMethod",
        type: "list",
        message: "Which method you want to pay?",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "payment",
        type: "input",
        message: "Enter a payment",
        validate: function validate(unname) {
            if (unname.trim() !== "" && unname == courses_fee[get_name_and_info.Courses]) {
                return true;
            }
            return "You must pay the exact fee";
        }
    }
]);
console.log("you are paid");
