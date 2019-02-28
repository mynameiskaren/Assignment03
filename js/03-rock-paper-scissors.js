/*eslint-env browser*/

var person;
do{
	person = window.prompt("Do you choose rock, paper or scissors?").toLowerCase();
}while(!(person === 'rock') && !(person === 'paper') && !(person === 'scissors'));

var ai = Math.random();

if (ai < 0.34) {
	ai = "rock";
} else if(ai <= 0.67) {
	ai = "paper";
} else {
	ai = "scissors";
}

function compare(choice1, choice2){
    "use strict";
	if(choice1 === choice2){
		return "The result is a tie!";
	}
	else if(choice1 === "rock"){
		if(choice2 === "scissors"){
			return "Rock wins";
		}
		else if(choice2 === "paper"){
			return "Paper wins";
		}
	}
	else if(choice1 === "paper"){
		if(choice2 === "rock"){
			return "Paper wins";
		}
		else if(choice2 === "scissors"){
			return "Scissors wins";
		}
	}
	else{
		if(choice2 === "rock"){
			return "Rock wins";
		}
		else if(choice2 === "paper"){
			return "Scissors wins";
		}
	}
}
window.alert('User Choice: ' + person + '\nComputer Choice: ' + ai + '\n\n' + compare(person, ai));