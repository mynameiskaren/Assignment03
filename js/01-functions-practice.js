/*eslint-env browser*/
//--------------------------------------------------------------//

//////// STEP 1 ////////
//Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
//function halfNumber(num1){
//    "use strict";
//    return "Half of " + num1 + " is " + (num1/2);
//}

//--------------------------------------------------------------//

//////// STEP 2 ////////
//Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//function squareNumber(num1){
//    "use strict";
//    return "The result of " + num1 + " squared is " + Math.pow(num1,2);
//}
//console.log(squareNumber(4)); //Debug

//--------------------------------------------------------------//

//////// STEP 3 //////// 
//Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
//function percentOf(num1, num2){
//    "use strict";
//    return num1 + " is " + ((num1/num2)*100) + "% of " + num2;
//}
//console.log(percentOf(2, 4)); //Debug

//--------------------------------------------------------------//

//////// STEP 4 ////////
//Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
//function findModulus(num1, num2){
//    "use strict";
//    return (num2%num1) + " is the modulus of " + num1 + " and " + num2;
//}
//console.log(findModulus(4, 10)); //Debug


//////// STEP 5 ////////
//Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.
function sum(input){
    "use strict";
    var total = 0;
    var arr = input.split(",");
    
    window.console.log("Before String: \"" + input + "\"");
    window.console.log("After String:  \"" + arr + "\"");
    window.console.log("Arr an Array:  \"" + (Array.isArray(arr)) + "\"");
    window.console.log("Arr:  \"" + (arr) + "\"");
    window.console.log(arr[2]);
    window.console.log(arr.length);
//De-String Them
    //Split them from the commas
    for (var i = 0; i < arr.length; i++){
        window.console.log(arr[i]);
        arr[i]=arr[i].trim();
        window.console.log(arr[i]);
        total+=parseFloat(arr[i]);
    }
    window.console.log("Total:  \"" + (total) + "\"");
    //Remove any spaces
        //Check to see if each array list has a space or not.
        //If it doesn't do nothing
        //If it DOES, 

    //Convert to numbers
    
    
    //For Loop Array to add them together
    
    return total;
}


//Debug
// 4,25,5, 30,7, 566, 4456, 6654, 566 5, 655, 6
// 4,25,5, 30,7, 566, 4456, 6654, 5665, 655, 6
// 4,3,46,86,5768,546

sum(window.prompt("Please enter a list of numbers, followed by a comma.")); 



///This works....
/*
//this is in the function


    
    window.console.log("Before String: \"" + input + "\"");
    window.console.log("After String:  \"" + arr + "\"");
    window.console.log("Arr an Array:  \"" + (Array.isArray(arr)) + "\"");
    window.console.log("Arr:  \"" + (arr) + "\"");
    window.console.log(arr[2]);
    window.console.log(arr.length);


//^in the function






var input = window.prompt("Please enter a list of numbers, followed by a comma.");
window.console.log("Before String: \"" + input + "\"");
var arr = input.split(",");
////var arr = [1, 2, 3, 4];
window.console.log("After String:  \"" + (Array.isArray(arr)) + "\"");
window.console.log("After String:  \"" + (arr) + "\"");
window.console.log(arr[2]);


*/




