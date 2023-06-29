document.addEventListener("DOMContentLoaded", function () { //creates an event listener to call functions when the event DOMContentLoaded happens (which occurs after the HTML doc has been completely loaded and parsed)
    subtraction_Function(); // ALL of these are functions that are called when the DOM is fully loaded
    multiplication();
    division();
    more_Math();
    modulus_Operator();
    negation_Operator();
    incop();
    decop();
    random();
})

function addition_Function() {  //creates a function named addition_Function
    var addition = 2 + 2; //creates a variable named addition and assigns it the expression 2 + 2
    document.getElementById("Add").innerHTML = ("2 + 2 = " + res1);  //replaces the value of the element ID Math with a string and the result of the assignment expression 'addition'
}

function subtraction_Function() { //creates a function named subtraction_Function
    var subtraction = 2 - 2; //creates a variable named subtraction and assigns it the expression 2 - 2
    document.getElementById("Sub").innerHTML = ("2 - 2 = " + res2); //replaces the value of the element ID Math with a string and the result of the assignment expression 'subtraction'
}

function multiplication() {  //creates a function named multiplication
    var simple_Math = 6 * 8; //creates a variable named simple_Math and assigns it the expression 6 * 8
    document.getElementById("Multiply").innerHTML = ("6 * 8 = " + simple_Math); //replaces the value of the element ID Multiply with a string and the result of the assignment expression 'simple-math'
}

function division() { //creates a function named division
    var simple_Math = 48 / 6; //creates a variable named simple_Math and assigns it the expression 48 / 6
    document.getElementById("Divide").innerHTML = ("48 / 6 = " + simple_Math); //replaces the value of the element ID Divide with a string and the result of the assignment expression 'simple-math'
}

function more_Math() { //creates a function named more_Math
    var simple_Math = (1 + 2) * 10 / 2 - 5; //creates a variable named simple_Math and assigns it the expression (1 + 2) * 10 / 2 - 5
    document.getElementById("Math").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 = " + simple_Math; //replaces the value of the element ID Math with a string and the result of the assignment expression 'simple-math'
}

function modulus_Operator() { //creates a function named modulus_Operator
    var simple_Math = 25 % 6; //creates a variable named simple_Math and assigns it the expression 25 % 6
    document.getElementById("remainder").innerHTML = "25 divided by 6 leaves a remainder of = " + simple_Math; //replaces the value of the element ID remainder with a string and the result of the assignment expression 'simple-math'

}
function negation_Operator() { //creates a function named negation_Operator
    var x = -10; //creates a variable named x and assigns it the expression value -10
    document.getElementById("negation_operator").innerHTML = -x; //replaces the value of the element ID negation_operator with a string and the result of the assignment expression 'x'
}

function incop() { //creates a function named incop
    var x = 10; //creates a variable named x and assigns it the expression value 10
    x++; //adds 1 to the X variable
    x++; //adds 1 to the new representation of the X variable
    document.getElementById("incop").innerHTML = x; //replaces the value of the element ID incop with the result of the assignment expression 'x' and 2 increment operators
}

function decop() { //creates a function named decop
    var x = 10.3; //creates a variable named x and assigns it the expression value 10.3
    x--; //subtracts 1 from the X variable
    x--; //subtracts 1 from the new representation of the X variable
    document.getElementById("decop").innerHTML = x; //replaces the value of the element ID decop with the result of the assignment expression 'x' and 2 decrement operators
}

function random() { //creates a function named random
    alert(Math.round(4.3)); //creates an alert and assigns it the expression Math.round(4.3) which rounds the number in  () resulting in a whole number value
}

window.alert(Math.random()); //creates an alert and assigns it the expression Math.random() which returns a random number
window.alert(Math.random(1) * 10); // creates an alert and assigns it the expression Math.random(1) * 10 which returns a random number between 1 and 10