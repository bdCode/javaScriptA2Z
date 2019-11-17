/* task 1: prompt the user to provide module marks 
and store them inside the following variables:mark1..
....mark5,log the result into the console */

 let mark1 = prompt(`Please enter the first module mark :`);
 let mark2 = prompt(`Please enter the second module mark :`);
 let mark3 = prompt(`Please enter the third module mark :`);
 let mark4 = prompt(`Please enter the forth module mark :`);
 let mark5 = prompt(`Please enter the fifth module mark :`);

console.log(`your result:`);
console.log(`Module 1: ${mark1}`);
console.log(`Module 2: ${mark2}`);
console.log(`Module 3: ${mark3}`);
console.log(`Module 4: ${mark4}`);
console.log(`Module 5: ${mark5}`);

/*task 2:create 5 variables : pass1....pass5 where you
will store either 1 or 0 depending on whether you passed
a module or not.For example,if you passed a module 1,passed 
should be 1,otherwise it would be 0.*/

let pass1 = mark1 >=60 ? 1:0;
let pass2 = mark2 >=60 ? 1:0;
let pass3 = mark3 >=60 ? 1:0;
let pass4 = mark4 >=60 ? 1:0;
let pass5 = mark5 >=60 ? 1:0;

console.log(pass1);
console.log(pass2);
console.log(pass3);
console.log(pass4);
console.log(pass5);

/*task 3:calculate the number of modules you passed and
store  the result in a variable numModulesPassed.
log numModulesPassed into the console */

 let numModulesPassed = `${pass1 + pass2 + pass3 + pass4 +pass5}`;
 console.log('You passed:' + numModulesPassed);

 /*task 4:create a variable average where you will store your 
 average mark taking into account all modules.limit the decimal
 part to two digits only.
 log average into the console */

 let average = numModulesPassed/5;
 console.log('Your Average mark is:' + average.toFixed(2));

/* task 5:create a variable pass staring either true or false 
depending on whether you will pass or not based on the rules*/

let pass = (average >=60) && (numModulesPassed>=4);
console.log(pass);

/*task 6: create a variable result staring either 'congratulation you passed' 
or 'sorry!you failed' depending on the value of the pass variable.
log the value of result into the console */

let result = pass ? 'congratulation you passes' : 'sorry!  you faild';
console.log(result);

