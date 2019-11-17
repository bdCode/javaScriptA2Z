/*create 6 objects hotel 1,2...6 staring the name,price and distance
from enter of each hotel */

let hotel1 = {

    name:'Forest view',
    price:5000,
    distance:6.8
};

let hotel2 = {

    name:'Oyo abby',
    price:6000,
    distance:3.7
};

let hotel3 = {

    name:'Canden belmost',
    price:6500,
    distance:2.8
};


let hotel4 = {

    name:'Askas de',
    price:7000,
    distance:1.2
};


let hotel5 = {

    name:'Giles london',
    price:5600,
    distance:0.7
};


let hotel6 = {

    name:'Ashbura mu',
    price:4000,
    distance:2.6
};


/*task 2-create an array hotels made of the variable hotel,
hotel2....6 */ 

let hotels = [hotel1,hotel2,hotel3,hotel4,hotel5,hotel6];

/*task 3-create a variable result and set it to:
 "Here is the list of available hotels." 
 using a for statement,for each hotel,add the followong 
 sentence to the result variable staring with a line break:
 "Hotel:hotel_name,
 price per night:hotel_price,
 distance from the center:distance_from_center"
 log the result variable into the console */

 let result = `Here the list of available hotels:`
 
 for(let i=0; i<hotels.length; i++){
     result +=`\n Hotel: ${hotels[i].name}
     price per night: ${hotels[i].price} tk
     distance from the center: ${hotels[i].distance} miles`

 }

 console.log(result); 

 /*task 4-prompt the user to enter thier budget per night and 
 store the output in variable budget.
 prompt the user to enter the maximum distance from center and store
  the output in a variable distance.
  reset the value of the result variable to an empty string */

  let budget = prompt('What is your budget per night?');
  budget = parseFloat(budget);
  let distance = prompt('Enter the distance form the center');
  distance = parseFloat(distance);

//empty string
  result ='';
  
  /*task 5-Using a 'for statement',loop through the list of
  hotels.if the hotels is within the user budget and maximum 
  distance from center,add a sentence string with line break and
  containing hotel deatails to the result variable:
  "Hotel: hotel_name,
  price per night:hotel_price,
  distance from center:distance_from_center" */


for(var i=0; i<hotels.length; i++){

  if(hotels[i].price <=budget &&
     hotels[i].distance <=distance)

    {
    result +=`\n Hotel: ${hotels[i].name}
    price per night: ${hotels[i].price} tk
    distance from the center: ${hotels[i].distance} miles`
    }
}
  console.log(result);


/*task 6- if there are no hotels matching the searce,set result
to:
"Sorry!there are no hotels matching your search,if there is
only one hotels matching the search.result should start with:
"there is 1 hotel matching your search."otherwish:there is numer_hotels
hotels mathing your search." */

let conuter = 0; //number of hotels matching the variable search

for(var i=0; i<hotels.length; i++){

    if(hotels[i].price <=budget &&
       hotels[i].distance <=distance){
        result +=`\n Hotel: ${hotels[i].name}
        price per night: ${hotels[i].price} tk
        distance from the center: ${hotels[i].distance} miles`
      }
  }
if (conuter === 0){

    result =`There is ${conuter} hotels matching: ${result}`;

}  else{

    result = `There is ${conuter} hotels matching:${result}`;
}
  
console.log(result);

