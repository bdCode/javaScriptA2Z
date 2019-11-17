/*task 1-create a function greet,which takes a parameter 
language and returns a function which takes a parameter 
name and returns a staring made of language and name separated
by a space */

function greet (language){
     
    return function (name){

        return `${name}  ${language}`;
    }
}


/*task 2-make changes to the function greet function so 
that the function it produces return:
"Hello customerName!bienenido al museum!" or "Hola customerName!welcome
to the museum".if another language is provide,the programer 
apologies saying:i can only speak english or spanish */

function greet (language){
     if(language. toLowerCase() === "english"){
    return function (name){
        return `Hello ${name} !welcome to the museum`;
        }
    }else if(language. toLowerCase() === "spanish"){

        return function (name){

            return `Hola ${name} !Bienvenido al museo`;
        }
    }else{

        return function(name){

            return `I can only speck English or Spanish`;
        }
    }
}

let userLanguage = prompt("Please enter your language:");
let userName = prompt("Please enter your name:");

console.log(greet(userLanguage)(userName));
