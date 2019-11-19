/*task 1- Now write a js function parent using the recursion
design pattern which calculates the number of n-great
grandparents of a male bee:
parents(0) -> 1(current generation)
parents(1) -> 1(parent)   
parents(2) -> 2(grandparents)  
parents(3) -> 3(great-grandparents)   
parents(4) -> 5(great-great-grandparents) */

let parent = function(n){
    if(n === 0){

        return 1;

    }else if(n===1){
        
        return 1;

    }else{
        return parent(n-1)+ parent(n-2);
    }
};
console.log(parent(0));
console.log(parent(1));
console.log(parent(2));
console.log(parent(3));
console.log(parent(4));

/*task 2-using a while statement,find which generation 
n contains more than 1000 n-grandparents of a male bee
Generation 0 represent the current male bee.
Generation 1 represent parents.  
Generation 2 represent grand-parents.  
Generation 3 represent great-grandparents,etc */  

 let numGenerationParents = 0;
 let currentGeneration = 0;

while(numGenerationParents < 1000){

    currentGeneration ++; //move to the next genaratin
    
    //calulate numGenartionParent
    numGenerationParents =parent(currentGeneration);

};

console.log(`The nearest generation containing more than 1000 n-generation
number: ${currentGeneration}`);


console.log(parent(16));





let a = 2;


function ian(a){

    let a = 5;
    return a + 2;

    

};
console.log(ian(8));

