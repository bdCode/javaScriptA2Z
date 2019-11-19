                                           /*Task--check if  a number is prime or not */

/*1.Prompt the user to input a whole number */

let userInput;

/*2.if the user does not provide a whole number,keep
prompting the user to input a valid number until they 
provide one */

do{
    userInput = prompt('Please enter a whole Number:');
    userInput = parseInt(userInput); //converts string to integer num
}while(!Number.isInteger(userInput));


/*3.if the provided number is prime:print the number
is prime */

/*4.otherwish print the number is not prime and print 
its smallest positive divisor other than 1 */
