

let slideIndex = 1; //creates a variable named slideIndex and assigns it the value of 1
showSlides(slideIndex); //calls the showSlides function with the parameter slideIndex

//Next/previous controls
function plusSlides(n) { //This function takes a number 'n' as its argument and increments slideIndex by 'n' then calles showSlides function with the new slideIndex value
    showSlides(slideIndex += n); 
}

// Thumbnail image controls
function currentSlide(n) { //This function sets 'slideIndex' to the value of its argument 'n' then calls the 'showSlides' function with 'slideIndex' as its argument
    showSlides(slideIndex = n);
}

function showSlides(n) { //This function performs the main logic of displaying the slides. It uses 'n' to calculate the current slide and dot, hides all the slides and dots, and then displays the current slide and sets the current dot to active.
    let i; //Declares the variable 'i' which will be used in the loops below.
    let slides = document.getElementsByClassName("mySlides"); //gets all the elements with the class name "mySlides", these are the different slides that will display one at a time.
    let dots = document.getElementsByClassName("dot"); //gets all the elements with the class name "dot", these are the dots indicators corresponding to each slide.
    if (n > slides.length) { slideIndex = 1 } //If 'n' (the current slide number) is greater than the total number of slides, resets 'slideIndex' to 1 so the first slide is displayed
    if (n < 1) { slideIndex = slides.length } //If 'n' is less than 1, sets 'slideIndex' to the total number of slides (this means we're at the last slide)
    for (i = 0; i < slides.length; i++) { //This loop hides all slides. 
        slides[i].style.display = "none"; //'style.display = "none"' means the element is not displayed.
    }
    for (i = 0; i < dots.length; i++) { //This loop removes the 'active' class from all dots.
        dots[i].className = dots[i].className.replace(" active", ""); //The 'active' class presumbaly highlights the dot corresponding to the currently displayed slide
    }
    slides[slideIndex - 1].style.display = "block"; //This line displays the current slide. 'slideIndex - 1' is used because array indices start at 0 but 'slideIndex' starts at 1. 'style.display = "block"' means the element is displayed as a block-level element
    dots[slideIndex - 1].className += " active"; // This line adds the 'active' class to the current dot, highlighting it.
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
