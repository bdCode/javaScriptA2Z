/*task 1: create two objects wchMale and wchFemale for
both would charmpions.Store the name and world record time
in the object using the following properties:name and time */ 

let wchMale = {
    name : `Usain`,
    time :9.5
};

let wchFemale = {
    name :`Florence`,
    time :10.40
};

/*task 2-create an empty object user.
prompt the user to enter  their gender and store it  in a new
property gender of the user object.Transform the gender propert y
value to lowercase using .toLowercase() */

let user = {};
user.gender = prompt("Enter your gender male/female");
user.gender = user.gender.toLowerCase();

/*task 3-prompt the user  to enter their race time.store the
time in a property time of a float number using the parseFloat function */

user.time = prompt("please enter your race time");
user.time = parseFloat(user.time);

/*task 4-using an if statement checking if the user is male 
or female,do the following:
if they broke the world record,log into the console:
'congratulation!you have beaten champion_name.
you have set a new world record:achived_time seconds'
otherwish log:
'sorry,you need to train harder'*/

if(user.gender === "male" && !isNaN(user.time)){
    // user is male
    if(user.time < 9.50){
        console.log(`Congratulation! you have beaten ${wchMale.name}
you have set a new world record: ${user.time} seconds`);
    } else{
        console.log(`sorry,you need to train harder`);
    }
} else if(user.gender === 'female' && !isNaN(user.time)){
    // user is female
    if(user.time < 10){
        // user made world record
        console.log(`Congratulation!you have beaten ${wchFemale.name}
you have set a new world record: ${user.time} seconds`);
    } else{
        // user needs to train harder
        console.log(`sorry,you need to train harder`);
    }
} else{
    console.log(`please proivde valid gender and time`);
}



