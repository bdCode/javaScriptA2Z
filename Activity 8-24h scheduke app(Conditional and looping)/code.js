/*task 1-creat a variable result which represent the final 
result to prient.Initilied result to:"Ativity-Duration" */

let result ="Activity-Duration";

/*task 2-create a variable remainingTime which will represent the
amound of time left in hours.Initialise remainingTime to 24*/

let remainingTime =24;

/*task 3-1.prompt the user to input one activity name and
store it inside a variable activity.
2.declare a variable duration.
Using a do while statement.prompt the user to input the ativity 
duration which is less than 4h.
3.update the remainingTime variable using the duration variable. */

let activity = prompt("please enter one activiy name");
let duration;
do{

    duration = prompt("How long will the activity last for in hours?(use a decimal number,ex:3.25)\nYou have 4h left");
    remainingTime = remainingTime-duration;
}while(duration > 4)


/*task 4-1.repeat code you wrote in task 3 using a while statement
will continue as far as remainingTime is not nil.
2.Instead of asking for a duration that is less than 4h,the
duration should be less than the remaingTime */


while(remainingTime > 0){

    let activity = prompt("please enter one activiy name");

    let duration; //a variable duration.

do{
    duration = prompt(`How long will the activity last for in hours?(use a decimal number,ex:3.25)\nYou have ${remainingTime}h left`);
    duration = parseFloat(duration);
}while(duration > remainingTime && isNaN(duration));

remainingTime = remainingTime-duration; //update remaingTime

}


/*task 5-for each activity,add a new line to the result variable
showing the activity name and time */

result  += `\n ${activity} - ${duration}hours`;

console.log(result);