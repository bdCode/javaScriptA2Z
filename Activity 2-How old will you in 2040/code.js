 /* task 1: prompt the user to provide their fist name 
 and store it in a variable firt name */

 let firstName = prompt("Provide your first name:");
 console.log(firstName);
 /* task 2: prompt the user to provide their last name 
 and store it in a variable last name */
 
 let lastName = prompt("Provide your last name:");
 console.log(lastName);

 /*task 3: prompt the user to provide their year of birth
 and store in a variable year as a number */

 let year = prompt("Provide your year of birth:");
 console.log(parseInt(year));

 /*task 4: create a variable sentence1 staring:
 hello firstname lastname*/
  
 let sentence1 = `Hello ${firstName} ${lastName}`;
 console.log(sentence1);

 /*task 5: calculate the user age in 2040 and
 store in a variable:futureAge */

 let futureAge = 2040 - year;
 console.log(futureAge);

 /*task 5: calculate the user current age and
 store in a variable:CurrentAge */
 
 let currentAge = 2019 - year;
 console.log(currentAge);

 /*task 6:create a variable sentence2 staring:
 your age in 2040 will be:futureAge */

 let sentence2 = `Your age in 2040 will be : ${futureAge}`;
 console.log(sentence2);

 /*task 6:create a variable sentence3 staring:
 your current age:currentAge */

 let sentence3 = `Your Current age : ${currentAge}`;
 console.log(sentence3);

 /*task 7:store the two sentences above in a variable
 result,separated them using a line break */

 let result = sentence1 + "," +"\n" + sentence2;

 /*task 8: using the += opertor,add the following
 sentence to the result variable starting with
 a line break: i wish you a long life full of 
 success and hapiness! */ 

 result +="\nI wish you a long life full of success and hapiness!"

 /*task 9: log the result variable into the console */

 console.log(result);