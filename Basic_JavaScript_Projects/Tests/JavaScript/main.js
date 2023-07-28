document.write("10" + 5); //because of type coercion this neither results in a correct output nor does it work, instead the operands are concatenated
document.write("five" + 5);
document.write(Bigger = (5 > 1) ? "Left number is bigger" : "Right number is bigger");


function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride; + "to ride."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Ford", "F150", 2010, "Red");
var Emily = new Vehicle("BMW", "M5", 2015, "Black");
var Erik = new Vehicle("Toyota", "Corolla", 2010, "White");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
    
}

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function countdown() {
    var seconds = document.getElementById("seconds").ariaValueMax;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

function countdown() { //This function starts a countdown from the number of seconds entered by the user. The countdown updates every second and when it reaches 0, alerts.
    var seconds = document.getElementById("seconds").value;

    function tick() { //This function decrements the 'seconds' variable by one every time it's called, updates the HTML element 'timer' to display the current number of seconds and stops the countdown when 'seconds' reaches -1
        seconds = seconds - 1; //decreases the value of 'seconds' by 1
        timer.innerHTML = seconds; //Updates the innerHTML property of the 'timer' HTML element to display the current number of seconds
        var time = setTimeout(tick, 1000); //This sets a delay of 1000 milliseconds (1 second) before the 'tick' function is called again. The return value from setTimeout (a unique identifier for the timer)
        if (seconds == -1) {  //checks if 'seconds' has reached -1
            alert("Time's up!"); //If 'seconds' is -1, this displays a pop-up alert
            clearTimeout(time); //stops the timer
            timer.innerHTML = ""; //clears the displayed timer
        }
    }
    tick(); //this function is immediately called after it's defined. This starts the countdown.
}
