//create a function takes as an input

function  calculateCost(hotelPrice,duration,ticketPrice,budget){

    let totalCost = hotelPrice*duration +ticketPrice;
    console.log("The total cost of your plan is:" + totalCost +".");
    console.log("Your budget is:" + budget +".");

    //decide whether the plan is within our budget
    let result;
    if(totalCost<=budget){
        result = "Lets go!";
    }else
    {
        result = "Please change your plan!";
    }
    
    return result;

};



function greet(language){
     return function(name){
        return name + ' ' + language;
     }

}

console.log(greet("Bengali")("Imran"));


