/* task 1:Store the speed limit [in miles/h] 
in a variable speedLimitMiles */

let speedLimitMiles;
speedLimitMiles = 50;
console.log("Your speed limit in miles/h is:" + speedLimitMiles + " " + "miles");

/* task 2:calculate the speed limit in km/h 
and store it in a variable speedLimitKm */

let speedLimitKm = speedLimitMiles * 1.61;
console.log("Your speed limit in km/h is:" + speedLimitKm + " " + "km");

/*task 3:using js arithmetic operations,
calculate the minimun speed in miles/h,
which would result in a hefty fine and 
store it inside a variable speeddFineMiles */

let speeddFineMiles = speedLimitMiles *1.1 +2;
console.log("Hefty fine speed limit:" +speeddFineMiles.toFixed(2) + " " +"miles/h");

/*task 4: using js arithemtic operations,
calculate the minimum speed in km/h which
would result in a hefty fine and store it inside
a variable speedFinekm */

let speedFinekm = speeddFineMiles * 1.61;
console.log(speedFinekm.toFixed(2) + " " + "km");

