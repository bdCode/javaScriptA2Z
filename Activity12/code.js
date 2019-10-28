//create result variable

let result = "Activity-Duration: ";

//create remaing variable

let remaingTime = 5 ;

//prompt the user to input an activity

while(remaingTime > 0){
    //declar duration
    let actiity = prompt("pleasce enter one activity:!");
    
    let duration;
    //do while statement asking for the duration
    do {
        duration = prompt("how long will the activity last in hours?(use a deccimal Number,ex:3.24)\n you have " 
        + remaingTime + " hours left");

        duration = parseFloat(duration);
    }  while(duration > remaingTime && isNaN(duration));

    result += ("\n" + actiity + " - " + duration);

    remaingTime = remaingTime-duration;
}


console.log(result);