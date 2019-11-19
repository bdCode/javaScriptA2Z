/*task1 -create an array journy which stores the train
stops as objects with two propertes:
.stop: representing the name of the station.
.min:repessention the stop time. */

let journy =[ //create journy array
    { 
    stop:"Manchester Piccadilly",
    min:0
},

{ 
    stop:"Stockport", //objet with stop and min parameter
    min:11
},

{ 
    stop:"Crewe",
    min:23
},

{ 
    stop:"Stafford",
    min:29
},

{ 
    stop:"Lichfield",
    min:37
},

{ 
    stop:"Tamworth",
    min:80
},

{ 
    stop:"Rugby",
    min:88
},

{ 
    stop:"London",
    min:90
},

]
    
    
/*task 2-Writh a programme which prints the value of a
counter in the console starting at 0 and going up by one
every 100milliseconds.The counter will represent the
journy current time in minutes.So it will stop in 90. */

// let counter = 0;
 
// let run = setInterval( function(){
    
//     console.log(counter);
//     counter ++;

//     if (counter === 91 ){

//         clearInterval(run);


//     }

// }, 10);



/*task 3- Create a function checkStations,which takes as
a parameter a time in minutes,then checks if it matches 
the stop time at one of the stations,
if  a match is found,print:"Stopping at stationName."
ex:checkStation(0) prints:stopping at manchester piccadilly */


let checkStation = function (min){

    for(let i=0; i<journy.length; i++){

        if(min === journy[i].min){

            console.log(`Stopping at: ${journy[i].stop}`);


        }
    }

};


/*task 4-Change the programme you wrote in task 2,so that
if the counter matches a stop time,the following is printed
into the console after printing the counter value:
"Stopping at station:stationName."   */

// let counter4 = 0;
 
// let run4 = setInterval(function(){
    
//     console.log(counter4);

//     checkStation(counter4);
//     counter4 ++;

//     if (counter4 === 91 ){

//         clearInterval(run4);


//     }

// }, 100);

/*task 5- The train departs from Manchester at 14:00,
create a function convertTime which takes a counter in 
minutes and convert it to time in the following format:hh:mm
ex:
convertTime(0)returns 14:00.
convertTime(70)returns 15:10.
convertTime(140)returns 16:20. */

let convertTime = function(min){

      let hour = 14;
      let minutes = 0;

      hour += parseInt(min/60);

      minutes = min % 60;

      console.log(`Time-> ${hour}:${minutes}`)

};


/*task 6-use the function convertTime
to change the programme you built 
in task two so that you print times
instead of printing the counter in minutes */

// let counter5 = 0;
 
// let run5 = setInterval(function(){
    
//     convertTime(counter5);

//     checkStation(counter5);
//     counter5 ++;

//     if (counter5 === 91 ){

//         clearInterval(run5);


//     }

// }, 100);


/*task 7-change your programme so that:
.For the first stop,it prints "departing from Manchester 
piccadilly" instead of "stopping at manchest pi..lly"
.for the last stop it prints "arriving london eustan" */

let checkStationModified = function (min){
    // check given min is eaual to any of the minitues of the object array
    // if match found then print station name

    for(let stationNumber = 0; stationNumber < journy.length; stationNumber++ ){
        if(min === journy[stationNumber].min){
            if(stationNumber === 0)
                console.log(`departing from ${journy[stationNumber].stop}`);
            else if(stationNumber ===( journy.length - 1))
                console.log(`arriving at ${journy[stationNumber].stop}`);
            else{
                console.log(`stopping at ${journy[stationNumber].stop}`);
            }
        }
    }
};

let counter7 = 0;

let run7 = setInterval(function(){
    
    convertTime(counter7);

    checkStationModified(counter7);
    counter7 ++;

    if (counter7 === 91 ){

        clearInterval(run7);


    }

}, 100);

