document.addEventListener("DOMContentLoaded", function () { //creates an event listener to call functions when the event DOMContentLoaded happens (which occurs after the HTML doc has been completely loaded and parsed)
    add_numbers1();  //triggers the function add_numbers1 when the conditions are met to trigger the above event
    add_numbers2();  //triggers the function add_numbers2 when the conditions are met to trigger the above event
});
Y = 10 //creates a global variable named Y and assigns it the value 10
function add_numbers1() { //creates a function named add_numbers1
    var X = 1; //creates a local variable named X and assigns it the value 1
    document.getElementById("add_numbers1").innerHTML = (Y + X + "<br>"); //replaces the value of the element ID add_numbers1 with the result of the assignment expression 'Y + X' and a line break
}

function add_numbers2() { //creates a function named add_numbers2
    var X = 1; //creates a local variable named X and assigns it the value 1
    document.getElementById("add_numbers1").innerHTML = (Z + X + "<br>"); //replaces the value of the element ID add_numbers1 with the result of the assignment expression 'Z + X' and a line break
}


if (1 < 2) { //creates a conditional statement named if and assigns it the expression 1 < 2
    document.getElementById("lessthan").innerHTML = "The left number is smaller than the number on the right."; //replaces the value of the element ID lessthan with a string describing the result of the condtional statement
} //triggered only if the if statement is true

function get_Date() { //creates a function named get_Date
    if (new Date().getHours() > 22.5) { //creates a conditional statement named if and assigns it the expression new Date().getHours() > 22.5
        alert("It is bed time."); //if the above conditional statement is true, alerts the string 'It is bed time.'
    } //triggered only if the if statement is true meaning the time retrieved by new Date().getHours() is greater than 22.5
}

function Age_Function() { //creates a function named Age_Function
    Age = document.getElementById("Age").value; //creates an element named Age and assigns it the value of the element ID Age
    if (Age >= 18) { //creates a conditional if statement and assigns it the expression Age >= 18
        Vote = "You are old enough to vote!"; //assigns the value of a string
    } else { //creates a conditional else statement and assigns it the expression Age < 18
        Vote = "You are too young to vote!"; //assigns the value of a string
    }
    document.getElementById("How_old_are_you").innerHTML = Vote; //replaces the value of the element ID How_old_are_you with the result of the conditional statement
}

function pokemon_judgement() { //creates a function named pokemon_judgement
    Pokemon = document.getElementById("Pokemon").value.toLowerCase(); //creates a variable named pokemon and assigns it the value of the element ID Pokemon, since this Id is attached to an input variable, it also takes the value of the element and forces it to lowercase upon submission event
    if (Pokemon === "bulbasaur" || Pokemon === "charmander" || Pokemon === "squirtle" || Pokemon === "pikachu" || Pokemon === "chikorita" || Pokemon === "cyndaquil" || Pokemon === "totodile" || Pokemon === "treecko" || Pokemon === "torchic" || Pokemon === "mudkip") { //creates a conditional if statement using the strict equality operator and the logical operator OR to check if the value of the Pokemon variable is equal to one of the strings in the logical comparison group
        trainer = "You seem to have what it takes!"; //assigns the value of a string
    } else { //creates a conditional else statement
        trainer = "Sorry, you are too young to be a pokemon legend."; //assigns the value of a string
    }
    document.getElementById("Judgement").innerHTML = trainer; //returns the result of the conditional statement
}

function Time_function() { //creates a function named Time_function
    var Time = new Date().getHours(); //creates a variable named Time and assigns it the value of the current time using the getHours function to retrieve the current time from the date object
    var Reply; //creates a variable named Reply
    if (Time < 12 === Time > 0) { //creates an if statement and assigns it an expression which uses logical comparison operators and the strict equality (identity) operator to assign the Reply variable the value of a string if conditons are met
        Reply = "It is morning time!"; //assigns the value of a string to the Reply variable if the time is between 0 and 12
    }
    else if (Time >= 12 == Time < 18) { //creates a conditional else if statement and assigns it an expression which uses logical comparison operators and the loose/abstract equality operator to assign the Reply variable the value of a string if conditons are met
        Reply = "It is morning time!"; //assigns the value of a string to the Reply variable if the time is between 12 and 18
    }
    else { //creates a conditional else statement
        Reply = "It is evening time."; //assigns the value of a string to the Reply variable if the time is between 18 and 24
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //replaces the value of the element ID Time_of_day with the result of the conditional statement
}

function YELLING() { //creates a function named YELLING
    var str = "Hello World!"; //creates a variable named str and assigns it the value of the string Hello World!
    var strUpper = str.toUpperCase(); //creates a variable named strUpper and assigns it the value of the string str converted to uppercase
    document.getElementById("YELLING").innerHTML = strUpper; //replaces the value of the element ID YELLING with the result of the conditional statement
}