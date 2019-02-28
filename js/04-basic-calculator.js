/*eslint-env browser*/

var num1, num2, operator;
num1 = parseInt(window.prompt("Welcome to the Calculator Program!\n\nPlease choose your first number:"));
num2 = parseInt(window.prompt("Great number!\n\nNow, please choose your second number:"));
do{
	operator = window.prompt("One last thing, please enter a VALID operator!\n\nChoose add, subtract, divide or multiply:").toLowerCase();
}while(!(operator === 'add') && !(operator === 'subtract') && !(operator === 'multiply') && !(operator === 'divide'));

function calculate(numA, numB, str){
	"use strict";
    switch(str){
		case 'add':
			return numA+numB;
		case 'subtract':
			return numA-numB;
		case 'multiply':
			return numA*numB;
		case 'divide':
			return numA/numB;
		default:
			return 'There is an error in your program. Oops!';
	}

}
window.alert('First number you chose: ' + num1 + '\nSecond Number you chose: ' + num2 + '\nOperation Type: ' + operator + '\n\nCalculating...\n\nCalculation: ' + calculate(num1, num2, operator));
