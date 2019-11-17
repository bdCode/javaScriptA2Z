/*task 1-write a function which takes as an input:
.The hotel price per night
.the duration of story in days
.the flight cost
.budget availale for your holiday
Then prints the total cost of the plan and return a string:"lets
go or please change your plan" */

function calculateCost (hotelPrice,duration,ticketPrice,budget){

    let totalCost = (hotelPrice * duration) + ticketPrice;
    console.log(`Total cost is: ${totalCost}`);
    console.log(`your budget is: ${budget}`);

    //decide whether the plan is within our budget

    let result;
    if (totalCost <= budget){

        result = "lets go";

    }else {

        result = "please change your plan!";
    }

    return result;

};

//user input
let pricePerNight = parseFloat(prompt("Please provide the hotel price per night: "));
let howLongWillUserStay = parseInt(prompt("How long are you going to staty? "));
let ticketFare = parseFloat(prompt("What is the price of ticket? "));
let usersBudget = parseFloat(prompt("What is your budget? "));

console.log(calculateCost(pricePerNight, howLongWillUserStay, ticketFare, usersBudget));
