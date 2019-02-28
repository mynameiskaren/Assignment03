//Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune() that:
//•	Takes 4 arguments: number of children, partner's name, geographic location, job title.
//•	Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

/*eslint-env browser*/

function tellFortune(children, partner, geoLoc, job){
    if (children === 1)
        return "You will be a " + job + " in " + geoLoc + ", and married to " + partner + " with " + children + " child."
    else 
        return "You will be a " + job + " in " + geoLoc + ", and married to " + partner + " with " + children + " children."
        
}

//•	Call that function 3 times with 3 different values for the arguments.
window.console.log(tellFortune(2, "Matthew", "Canada", "Civil Engineer"));
window.console.log(tellFortune(1, "Arturo", "Puerto Rico", "Developer"));
window.console.log(tellFortune(4, "Adam", "California", "Programmer"));