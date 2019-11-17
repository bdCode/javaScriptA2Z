/*task 1-Create a variable totalVotes where you will store 
the number of votes,initialse totalVotes to 0.
crete two objects,player1 and player2 staring the name and 
votes of each player */

let totalVotes = 0;

let player1 ={

    name : 'Rafel nadal',
    votes : 0


};

let player2 ={

    name : 'Novak djokovic',
    votes : 0


};

/*task 2-create a funtion vote which takes as a parameter
a player object and increases his votes by 1,you will be 
passing values by reference as you learnt in the previous video */

function vote (player){

    player.votes ++;
    totalVotes ++;


}
 //player1.votes = player2;
//console.log(player1);

/*task 3-create a pragramme asking for votes while the number of
votes has not reached 10.
if a customer types 1,the vote goes to Rafael.if they type 2 the 
vote goes to Navak.otherwish,nothing happens and votes remain 
unchanged*/

while (totalVotes <5) {

    let ask = prompt ("To vote Rafael Nadal,type 1,To vote Navak DJakovic,type 2");
    
    if (ask === '1'){

        vote(player1);

    } else if ( ask === '2') {

        vote(player2);

    }
    
}

console.log(player1);

console.log(player2);

console.log("Total Votes:" + totalVotes);

/*task 4-once the number of votes reaches 10,print into
the console depending on distribution of votes:
result:
Rafael Nadal : 6votes.
Navak Djokovic:4 votes.
Rafael Nadal is the favourite to win.
if votes are equal,write:"no favourit win" */

console.log("results :");
console.log("Rafael Nadal:" + player1.votes + "votes");
console.log("Novak Djokovic:" + player2.votes + "votes");

if(player1.votes > player2.votes){

    console.log(player1.name + "is the favourite  to win");
    
}else if(player1.votes < player2.votes){

    console.log(player2.name + "is the favourite  to win");
   

}else{

    console.log("no favourite to win");

}
