

function changeTime() {  //This function calls for the current time and sets the value of the ID time
    currentTime = new Date().toLocaleTimeString(); // Update the global currentTime variable
    document.getElementById('Time').innerHTML = currentTime; // Replaces the value of the element ID Time with the result of the element currentTIme
}

function changeDate() {  //This function calls for the current Date and sets the value of the ID date
    currentDate = new Date().toLocaleDateString(); // Update the global currentDate variable
    document.getElementById('Date').innerHTML = currentDate; // Replaces the value of the element ID Date with the result of the element currentDate
}
currentDate = new Date().toLocaleDateString(); // Update the global currentDate variable with the current Date
currentTime = new Date().toLocaleTimeString(); // Update the global currentTime variable with the current Time

function myFunction() {                        // This function sets the value of timeDate to the current time and date
    var Time = currentTime + " " + currentDate; // Creates a variable Time and assigns it the value currentTime + " " + currentDate
    document.getElementById('timeDate').innerHTML = Time; // Replaces the value of the element ID timeDate with the result of the element Time
}

function myFunction2() {                        // This function sets the value of Concatenate to the current time and date
    var sentence = "I am learning";             // Creates a variable sentence and assigns it the value "I am learning"
    sentence += " a lot from this JS course!";  // Adds the value " a lot from this JS course!"
    document.getElementById("Concatenate").innerHTML = sentence;  // Replaces the value of the element ID Concatenate with the result of the element sentence
}


var foo = document.getElementsByTagName("p");  //Creates a variable foo and assigns it the value of the p element(s) 


var A = 100
var B = 100
function myDollars() {
    let result = A + B;
    document.getElementById("A").innerHTML = result;
    return result;
}
window.onload = function () {
    myDollars();
};

   
(function (A = 100, B = 200) {
    let result = A + B;
    document.getElementById("A").innerHTML = result;
    document.write(result);
})();