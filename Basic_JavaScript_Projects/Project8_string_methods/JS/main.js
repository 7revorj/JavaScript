document.addEventListener("DOMContentLoaded", function () { //creates an event listener to call functions when the event DOMContentLoaded happens (which occurs after the HTML doc has been completely loaded and parsed)
    YELLING();
    search();
    setHalfWidth();
    toFixed();
    fullLoad();
});

function full_Sentence() { //creates a function named full_Sentence which calls the strings below to create a concatenated output
    var part_1 = "Jk, ";
    var part_2 = "only fragments. ";
    var part_3 = "not a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //uses the concat method to concatenate the strings
    document.getElementById("Concatenate").innerHTML = whole_sentence; //replaces the value of the element ID Concatenate with the result of the variable whole_sentence
}

function slice_Method() { //creates a function named slice_Method which uses the .slice method to output characters 27-31 counting 0 as the first character
    var Sentence = "All work and no play makes Jack a dull boy."; //creates a local variable named Sentence and assigns it the value of the string 
    var Section = Sentence.slice(27, 31); //creates a local ariable named Section and assigns it the value of sentence modified by the method function to return characters 27-31
    document.getElementById("Slice").innerHTML = Section; //replaces the value of the element ID Slice with the result of the variable Section
}

function slice_Method2() { //creates a function named slice_Method2 which uses the .slice method to output the names of tonight's fighters
    var Sentence = "The fighters tonight are Sean Strickland and Abus Magomedov"; //creates a local variable sentence and assigns it the value of the string
    var Section = Sentence.slice(24, 58); //creates a locaal variable Section and assigns it the value of the sentence modified by the method function to return the names of the fighters
    document.getElementById("fighters").innerHTML = Section; //replaces the value of the element ID fighters with the result of the variable Section
}

function YELLING() { //creates a function named YELLING
    var str = "Hello World!"; //creates a local variable named str and assigns it the value of the string Hello World!
    var strUpper = str.toUpperCase(); //creates a variable named strUpper and assigns it the value of the string str converted to uppercase
    document.getElementById("YELLING").innerHTML = strUpper; //replaces the value of the element ID YELLING with the result of the modified string
}

function search() { //creates a function named search
    var str = "Hello girl"; //creates a local variable named str and assigns it the value of the string Hello girl
    var position = str.search("g"); //creates a local variable named position and assigns it the place of the character g using the .search method
    var result = position.toString().repeat(3); //creates a local variable named result and uses the .toString() method to make the result a string, then uses the repeat function to repeat the result 3 times
    document.getElementById("search").innerHTML = result; //replaces the value of the element ID search with the result of the variable result
}

function string_Method() { //creates a function named string_Method
    var X =182; //creates a local variable named X and assigns it the value 182
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //replaces the value of the element ID Numbers_to_string with the result of the assignment expression X.toString()
}

function jesus_AgeUponDeath() { //creates a function named jesus_AgeUponDeath
    var Age =33; //creates a local variable named Age and assigns it the value 33
    document.getElementById("jesusded").innerHTML = Age.toString(); //replaces the value of the element ID jesusded with the result the variable modified by the method .toString()
}

function setHalfWidth() { //creates a function named setHalfWidth
    var width = window.innerWidth / 2; //creates a local variable named width and assigns it the resulting value of the window's inner width / 2
    document.getElementById("jesusdiv").style.width = width + 'px'; //uses .style.width to set the inline style of width of the element jesusdiv and changes the value to equal the local variable width + px
} //in summary, this function sets the width of the element jesusdiv to half the width of the window

window.onresize = function (event) { //uses the window.onrezise method to call the setHalfWidth function upon window resize event
    setHalfWidth(); //calls the setHalfWidth function
};

function precision_Method() { //creates a function called precision_Method
    var X = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679; //creates a local variable X and assigns it pi
    document.getElementById("Precision").innerHTML = X.toPrecision(5); //replaces the value of the element ID Precision with the result of the method .toPrecision(5) applied to X
} //in summary this function returns the value of X to 5 decimal places

function toFixed() { //creates a function named toFixed
    let myNumber = 10.52134; //creates a local variable named myNumber and assigns it the value 10.52134
    let formatted = myNumber.toFixed(1); //uses an assignment expression to assign the value of myNumber (modified by the method .toFixed(1) to return 10.5) to the variable formatted
    console.log (formatted); //logs the value of formatted to the console
}

function TLOU_Creator() { //creates a function named TLOU_Creator
    var answer = document.getElementById("answer").value.toLowerCase(); //an assignment expression to create and assign the variable answer with the result of the value of the element ID answer converted to lowercase
    if (answer === "naughty dog" || answer === "naughtydog") //creates a conditional if statement and assigns it the condition under which to call the nested local variable
    {
        supply = "You got it! You're the man now dog"; //creates a local variable supply and assigns it a string 
    } 
    else if (answer === "sony" || answer === "sony entertainment") //creates a conditional else if statement and assigns it a condition to call the nested local variable
    {
        supply = "While it is true Sony is the publisher for TLOU series, the game was developed by a subsidiary, do you want to try again?" //creates a local variable supply and assigns it a string
    } 
    else { //creates a conditional else statement and assigns it a nested local variable 
        supply = "Nope, here's a hint: woof!"; 
    }
    document.getElementById("ND").innerHTML = supply; //replaces the value of the element ID ND with the result of the conditional statement 
}

function fullLoad() { //creates a function called fullLoad
    let str = new String("The page has fully loaded"); //creates a local variable named str and assigns it the string value of the string The page has fully loaded
    console.log(str.valueOf()); //logs the primitive value of str to the console
}