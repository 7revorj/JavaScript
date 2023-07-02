document.addEventListener("DOMContentLoaded", function () { //creates an event listener to call functions when the event DOMContentLoaded happens (which occurs after the HTML doc has been completely loaded and parsed)
    fullLoad();
});

function blah() { //defines a function blah
    document.getElementById("seconds").innerHTML = "Test Successful"; //replaces the value of the element ID seconds with the string
}

function count_To_Ten() { //defines a function count_To_Ten
    var Digit = ""; //creates a variable named Digit and assigns it the value of an empty string
    var X = 1; //creates a variable named X and assigns it the value 1
    while (X < 11) { //creates a while loop and assigns it an expression which uses logical comparison operator to perform the while loop while X is less than 11
        Digit += "<br>" + X; //adds the value of X to the Digit variable
        X++; //adds 1 to the X variable
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit; //replaces the value of the element ID Counting_to_Ten with the result of the while loop
}

function Call_Loop() { //defines a function Call_Loop
    var i = 0; //creates a variable named i and assigns it the value 0
    while (i < 10) { //creates a while loop and assigns it an expression which uses logical comparison operator to perform the while loop while i is less than 10
        i++; //adds 1 to i each time while loop is executed
    }
    document.getElementById("Loop").innerHTML = i; //replaces the value of the element ID Loop with the result of the while loop
}


var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //creates a global variable and assigns it the value of an array
var Y; //creates a global variable Y
var Content = ""; //creates a global variable Content and assigns the value of an empty string

function for_Loop() { //defines a function for_Loop

    for (Y = 0; Y < instruments.length; Y++) { //creates a for loop and assigns Y the value 0, if Y is less than the length of the array, increases Y by 1
        Content += instruments[Y] + "<br>"; //This line is inside the loop & runs each time the loop iterates, it appends the current element of the "instruments" array (as denoted by Y) to the content variable
    }
    document.getElementById("for_loop_example").innerHTML = Content; //replaces the value of the element ID for_loop_example with the result of content following each iteration
}


function cat_pics() { //defines a function cat_pics
    var Cat_Picture = []; //creates a variable named Cat_Picture and assigns it the value of an empty array which in conjuction with the next four lines creates an array with four elements
    Cat_Picture[0] = "sleeping"; 
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "sleeping";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; //replaces the value of the element ID Cat with a string concatenated with the element of index 3
}

function array_Function() { //creates a function named array_Function
    var test_Array = []; //creates a variable named test_Array and assigns it the value of an empty array
    test_Array[0] = "test";
    test_Array[1] = "test2";
    test_Array[2] = "test3";
    test_Array[3] = "test4";
    document.getElementById("Array").innerHTML = test_Array[0] + " " + test_Array[1] + " " + test_Array[2] + " " + test_Array[3]; //concatenates the entire array and replaces the value of the element ID Array with the result
}

function constant_function() { //creates a function named constant_function
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black", condition: "like new"}; //creates a constant named Musical_Instrument and assigns it a group of properties
    Musical_Instrument.color = "blue"; //replaces the value of the color property
    Musical_Instrument.price = "$300"; //creates a new property for the constant and assigns it the value $300
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price + ". It's condition is " + Musical_Instrument.condition + ".";
} //replaces the value of the element ID Constant with the result of a series of concatenated strings and properties

function fullLoad() { //creates a function called fullLoad
    let str = new String("The page has fully loaded"); //creates a local variable named str and assigns it the string value 
    console.log(str.valueOf()); //uses the valueOf method to log the primitive value of str to the console
}

function addNumbers(num1, num2) { //defines a function named addNumbers with two parameters
    var sum = num1 + num2; //creates a local variable named sum and assigns it the value of num1 plus num2
    return sum; //returns the value of sum
}
var result = addNumbers(5, 7); //creates a global variable named result and assigns it the function addnumbers with two arguments
console.log(result); //logs the result variable

function sayHello(name) { //defines a function named sayHello and assigns it the parameter name
    if (name === undefined) { //creates a if statement and assigns it an expression which uses the strict equality operator to compare the name variable to undefined
        return "Please provide a name";  //returns "Please provide a name"
    }
    return "Hello, " + name; //returns "Hello, " + name
}
console.log(sayHello()); //logs the original return statement to the console since no name is present
console.log(sayHello("Alice")); //logs "Hello, Alice" as a result of the successful exection of the sayHello function

let car = { //creates a local variable named car with a list of local variables with strings as properties
    make: "Dodge ", 
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () { //creates a function named description which is a local function of car
        return "The car is a " + this.year + this.color + this.make + this.model; // returns the concatenated string and uses the this keyword to refer to the local variable properties
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //replaces the value of the element ID Car_Object with the result of the car description function

for (let i = 0; i < 10; i++) { //creates a for loop, uses let to create a local variable named i and assigns it the value 0, then uses logical comparison operator less than to compare i to 10 and finally adds 1 to i each time the loop iterates
    if (i === 5) { //creates a if statement and assigns it an expression which uses strict equality operator to break the loop if i is equal to 5
        break;
    }
    console.log(i); //logs the value of i to the console upon each iteration
}


var day = "Sunday"; //creates a variable day and assigns it the value Sunday

switch (day) { //creates a switch statement using the day variable as its parameter
    case "Monday": //uses case to specify a condition to test against the expression in the variable day, if the value of case matches the value of switch, the following code is executed
        console.log("Today is Monday");
        break; //uses break to exit the loop if the condition is met
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
//the below code is repeated twice for posterity because the first one does not provide the desired output but the second one does.
for (let day of ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]) { //creates a for loop and assigns is the local variable day which is in turn assigned an array
    if (day === "Wednesday") { //creates a if statement and assigns it an expression which uses strict equality operator to break the loop if the value of day is equal to Wednesday
        break;
    }
    switch(day) { //creates a switch statement using the day variable as its parameter
        case "Saturday": //uses case to specify a condition to test against the expression in the variable day, if the value of case matches the value of switch, the following code is executed
            console.log("It's Saturday, skipping...");
            continue; //continues the loop
        case "Sunday":
            console.log("It's Sunday, skipping...");
            continue; //continues the loop
        case "Monday":
            console.log("Today is Monday");
            break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
        case "Wednesday":
            console.log("Today is Wednesday");
            break; 
        case "Thursday":
            console.log("Today is Thursday");
            break;
        case "Friday":
            console.log("Today is Friday");
            break;
        default:
            console.log("It's a working day");
            break;
    }
    console.log("Get to work!"); //logs get to work 
}


for (let day of ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]) { //creates a for loop and assigns is the local variable day which is in turn assigned an array
    switch (day) { //creates a switch statement using the day variable as its parameter
        case "Saturday": //uses case to specify a condition to test against the expression in the variable day, if the value of case matches the value of switch, the following code is executed
            console.log("It's Saturday, skipping...");
            continue; //continues the loop
        case "Sunday":
            console.log("It's Sunday, skipping...");
            continue; //continues the loop
        case "Monday":
            console.log("Today is Monday");
            break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
        case "Wednesday":
            console.log("Today is Wednesday");
            break;
        case "Thursday":
            console.log("Today is Thursday");
            break;
        case "Friday":
            console.log("Today is Friday");
            break;
        default:
            console.log("It's a working day");
            break;
    }
console.log("Get to work!"); //logs get to work 
    
if (day === "Wednesday") { //creates a if statement and assigns it an expression which uses strict equality operator to break the loop if the value of day is equal to Wednesday
    break;
}
}
