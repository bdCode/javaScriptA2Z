/* task 1-create three objets (student 1,2,3)staring details 
of mark,john and sara.Use the properties name and grade inside
each object */

let student1 ={
        Name : 'Mark',
        Grade:80
};  

let student2 ={
    Name :'John',
    Grade:75
};  

let student3 ={
    Name :'Sara',
    Grade:90
};  

/* task 2-create a variable average which stores the average 
off all grade.use arithmetic operation and property values 
without using raw values.Make sure  the decimal part  contains
up to two digits only.
Log average into the console */

let average =(student1.Grade + student2.Grade + student3.Grade)/3;
console.log(average);

/*task 3-Mark has a doubt about his grade.so he came
farward claiming more points.you agree that you need to 
increase his grade by 15 points.
store the value 15 inside a variable extra and use it to change
the objects student1.
log student1 into the console to see the new value */

let extra =15;
student1.Grade += extra;
console.log(student1);

