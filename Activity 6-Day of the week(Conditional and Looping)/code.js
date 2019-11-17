/* task 1-prompt the user to enter a day.Transfarm the input
to lowercase and store it inside  a variable day*/

let day = prompt("please enter a day!:");
day = day.toLowerCase();
console.log(day);

/* task 2- using a switch statement,print a message depending
on the day provide by the user.you can use the list of message 
in the next slide or use your own ones */

switch (day){
        
    case "monday" :
    console.log("Welcome to new week!");
    break;
}

switch (day){
        
    case "tuesday" :
    console.log("This is your second day of the week!");
    break;
}
switch (day){
        
    case "wednesday" :
    console.log("Still enjoying your week!");
    break;
}

switch (day){
        
    case "thusday" :
    console.log("Tomorrow a Friday");
    break;
}

switch (day){
        
    case "friday" :
    console.log("Today is Fridy!");
    break;
}

switch (day){
        
    case "saturday" :
    console.log("Finnarly the weekend has come!");
    break;
}

switch (day){
        
    case "sunday" :
    console.log("The weeknd has almost gone!");
    break;
    
default :
            console.log("I do not recognized");
       
}


