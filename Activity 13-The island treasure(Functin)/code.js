/*task 1-create 5 objects box1...box5 staring content in kg 
of each box:silver,gold,platinum.
create an object priceKg staring prices per kg of each substance:
silver,gold,platinum. */

let box1 = {
    silver: 10,
    gold: 5,
    platinum: 5

};

let box2 = {
    silver: 5,
    gold: 7,
    platinum: 8

};

let box3 = {
    silver: 7,
    gold: 3,
    platinum: 10

};
                        
let box4 = {
    silver: 6,
    gold: 6,
    platinum: 12

};

let box5 = {
    silver: 3,
    gold: 12,
    platinum: 5

};
 
//priceKg object
let priceKg = {
    silver: 400,
    gold: 40000,
    platinum: 25000

};

/*task 2-using a function expression,write a function which 
takes as a parameter a box and calculates its value in usd,
store the function in a variable calcBoxValue. */

let calcBoxValue = function(box){
    let result = box.silver * priceKg.silver +
                 box.gold * priceKg.gold +
                 box.platinum * priceKg.platinum; 
    return result;
};

/*task 3-create a new function calcTotal which:
.Takes two parameters:a function and an array 
.and returns the total wealth you would take with you choice.
Use a function expession again instead of a function statement.*/

// function definition
let calcTotal = function(f, boxes){

    let result = f(boxes[0]) + f(boxes[1]) + f(boxes[2]);
    return `Take home: $ ${result}`;
};


/*task 4-For some mysterious reason,you can not take box4 and
box5 together or box2 and box3 together.play with calcTotal 
in the console and find the best combination of boxes to take home*/

// function call
console.log(calcTotal(calcBoxValue, [box1, box3, box4]));
console.log(calcTotal(calcBoxValue, [box1, box2, box4]));
console.log(calcTotal(calcBoxValue, [box1, box2, box5]));
console.log(calcTotal(calcBoxValue, [box1, box5, box3]));





