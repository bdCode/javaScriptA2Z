/*task 1:create an object robot with the following
properties:
Name and coordinates.the value of coordinates should 
be an object staring x,y and z values */

//create a robot object
let robot ={
    Name :'Mars invader',
    coordinates : { 
        x:0,
        y:0,     //the value of coordinates is also a object staring x,y,z
        z:0
    }
};

/*task 2-add a property check to the robot printing
its current position,ex:(x=1,y=3,z=2).
the method also checks if the robot reached its 
destination (4,2,3) and prints:"mission complete"
if it is the case*/

//add the check method
robot.check = function(){

    //print the current position
    console.log("Robot position:x ="  +
    this.coordinates.x + ", y = " + this.coordinates.y + ", z =" +
    this.coordinates.z + ".");

    //check if we reached the final destination which is 4,2,3

    if(this.coordinates.x === 4 && this.coordinates.y === 2 && this.coordinates.z === 3){
        console.log("\n\nMission Compelete!");
    }
}; 

//robot.check();

/*task 3-add two properties to the robot object:
moveRight and moveleft which makes the robot move through the x axis by 
one step.The property print the new position of x after execution.ex:robot
position (x=1,y=3,z=1).Remember :x range is [0,10] */

robot.moveRight = function(){

    if(this.coordinates.x !==10)
    {
    this.coordinates.x++;
    }
    this.check();

};

robot.moveLeft = function(){
    
    if(this.coordinates.x !==0){
    this.coordinates.x--;
    }
    this.check();
};

//console.log("\nRobot Move left position:");
//robot.moveLeft();

//console.log("\nRobot Move right position:");
//robot.moveRight();


/*task 4-add two properties to the robot object:
moveForwars and moveBackward which makes the robot move through the y axis by 
one step.The property print the new position of the robot after execution.ex:robot
position (x=1,y=3,z=1).Remember :y range is [0,10]*/

robot.moveForward = function(){

    if(this.coordinates.y !==10){

        this.coordinates.y++;
    }
     this.check();
};
robot.moveBackward = function(){

    if(this.coordinates.y !==0){

        this.coordinates.y--;
    }
     this.check();
};

//console.log("\nRobot Move forward position:");
//robot.moveForward();

//console.log("\nRobot Move backword position:");
//robot.moveBackward();

/*task 5-add two properties to the robot object:
moveUp and moveDown which makes the robot move through the z axis by 
one step.The property print the new position of the robot after execution.ex:robot
position (x=1,y=3,z=1).Remember :z range is [0,10]*/


robot.moveUp = function(){

    if(this.coordinates.z !==10){

        this.coordinates.z++;
    }
     this.check();
};
robot.moveDown = function(){

    if(this.coordinates.z !==0){

        this.coordinates.z--;
    }
     this.check();
};

//console.log("\nRobot Move up position:");
//robot.moveUp();

//console.log("\nRobot Move down position:");
//robot.moveDown();


/*task 6-using the console,call the right function until the robot 
reached its destination:(x=4,y=2,z=3)  */

robot.check();
console.log("\nRobot destination:");
console.log("\nRobot Move right position:");
robot.moveRight();
robot.moveRight();
robot.moveRight();
robot.moveRight();

console.log("\nRobot Moveforward position:");
robot.moveForward();
robot.moveForward();

console.log("\nRobot Moveup position:");
robot.moveUp();
robot.moveUp();
robot.moveUp();