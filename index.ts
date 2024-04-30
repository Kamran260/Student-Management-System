import { log } from "console";
import inquirer from "inquirer";

let StudentID = Math.floor(Math.random()*100000);
let wallet:number = 500000;

let get_name_and_info = await inquirer.prompt([{
    name: "StudentName",
    type: "input",
    message: "Enter Your Name To Enroll",
        validate: function validate(unname:string){
        if(unname.trim() !== ""){
            return true
        }
        return "Written name is necessary to enroll"
    }
},
{
    name: "Courses",
    type: "list",
    message: "Which course you want to enroll",
    choices:["FrontEnd", "BackEnd", "Python"]
}
]);

let courses_fee: {[key:string]: number} ={
    'FrontEnd': 6000,
    'BackEnd': 10000,
    'Python': 12000
}
console.log(`Your Name: ${get_name_and_info.StudentName} is enrolling a course of ${get_name_and_info.Courses} \n The price if this course is ${courses_fee[get_name_and_info.Courses]}`);

console.log(`Your wallet balance is ${wallet}`)

let payment_method = await inquirer.prompt([{
    name: "PaymentMethod",
    type: "list",
    message: "Which method you want to pay?",
    choices: ["Bank Transfer", "Easypaisa", "Jazzcash", "Wallet"]
},
{
    name: "payment",
    type: "input",
    message: "Enter a payment",
    validate: function validate(unname){
        if(unname.trim() !== "" &&  unname == courses_fee[get_name_and_info.Courses]){
            return true
        }
        return "You must pay the exact fee"
    }
}


])
if(payment_method.PaymentMethod == "Wallet"){

    if(wallet >= courses_fee[get_name_and_info.Courses]){

        let remaningBalance = wallet - courses_fee[get_name_and_info.Courses];

        console.log(`you are paid and you are now enrolled and your remaning balance is ${remaningBalance}`);

        let data_after_enroll = await inquirer.prompt({
            name: "Std_Details",
            type: "list",
            message: "What else you want to know?",
            choices: ["View Details", "Exit"]
        })
        if(data_after_enroll.Std_Details == "View Details"){
            console.log("************* Student Details************");
            console.log(`\n Student ID: ${StudentID} \n Student Name: ${get_name_and_info.StudentName} \n Enrolled Course: ${get_name_and_info.Courses} \n Price Paid: ${courses_fee[get_name_and_info.Courses]}\n Remaning Wallet Balance: ${remaningBalance}`);
            
        }
        

    }else{
        console.log(`Wallet Payment is less than the value of course you enroll`);
        
    }
    
}

if(payment_method.PaymentMethod == "Bank Transfer"){
console.log(`you are paid and you are now enrolled`);

        let data_after_enroll = await inquirer.prompt({
            name: "Std_Details",
            type: "list",
            message: "What else you want to know?",
            choices: ["View Details", "Exit"]
        })
        if(data_after_enroll.Std_Details == "View Details"){
            console.log("************* Student Details************");
            console.log(`\n Student ID: ${StudentID} \n Student Name: ${get_name_and_info.StudentName} \n Enrolled Course: ${get_name_and_info.Courses} \n Price Paid: ${courses_fee[get_name_and_info.Courses]}`);
            
        }
    }



if(payment_method.PaymentMethod == "Easypaisa"){
    console.log(`you are paid and you are now enrolled`);
    
        let data_after_enroll = await inquirer.prompt({
            name: "Std_Details",
            type: "list",
            message: "What else you want to know?",
            choices: ["View Details", "Exit"]
        })
        if(data_after_enroll.Std_Details == "View Details"){
            console.log("************* Student Details************");
            console.log(`\n Student ID: ${StudentID} \n Student Name: ${get_name_and_info.StudentName} \n Enrolled Course: ${get_name_and_info.Courses} \n Price Paid: ${courses_fee[get_name_and_info.Courses]}`);
            
        }
    }
if(payment_method.PaymentMethod == "Jazzcash"){
    console.log(`you are paid and you are now enrolled`);
    
            let data_after_enroll = await inquirer.prompt({
                name: "Std_Details",
                type: "list",
                message: "What else you want to know?",
                choices: ["View Details", "Exit"]
            })
            if(data_after_enroll.Std_Details == "View Details"){
                console.log("************* Student Details************");
                console.log(`\n Student ID: ${StudentID} \n Student Name: ${get_name_and_info.StudentName} \n Enrolled Course: ${get_name_and_info.Courses} \n Price Paid: ${courses_fee[get_name_and_info.Courses]}`);
                
            }
        }