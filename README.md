# JavaScript Projects
 A repository for JavaScript projects I created using HTML, CSS, JS and (briefly) Python


## Basic JavaScript Projects
- [Project 1 - Expressions & Alerts](#project-1---expressions--alerts)
- [Project 2 - Functions](#project-2---functions)
- [Project 3 - Math Operators](#project-3---math-operators)
- [Project 4 - Dictionaries](#project-4---dictionaries)
- [Project 5 - Comparisons / Type Coercion](#project-5---comparisons--type-coercion)
- [Project 6 - Ternary Operators & Constructors](#project-6---ternary-operators--constructors)
- [Project 7 - Scope Time Function](#project-7---scope-time-function)
- [Project 8 - String Methods](#project-8---string-methods)
- [Project 9 - Countdown Slideshow](#project-9---countdown-slideshow) 

## Tests

- [Operands](#operands)
- [Form If Loop](#form-if-loop)
- [Type Attributes](#type-attributes)
- [Arrow Function Expressions](#arrow-function-expressions)
- [Onclick Canvas Math](#onclick-canvas-math)

## Intermediary JavaScript Projects

- [Portfolio Popup Contact Form](#portfolio-contact-form)
- [Calculator](#calculator)
- [Pizza Project](#pizza-project)
- [Tic-Tac-Toe](#tic-tac-toe)
- [To-do List App](#to-do-list-app)

### Project 1 - Expressions & Alerts
>This code snippet demonstrates various concepts such as variable declaration and assignment, string concatenation, writing to the document, using the window object, defining a function, and manipulating HTML content. It also includes examples of escaping characters and using line breaks.

### Project 2 - Functions
This code snippet defines several functions that manipulate the current time and date in a web page. The functions changeTime and changeDate update global variables currentTime and currentDate with the current time and date, respectively. The functions myFunction and myFunction2 combine currentTime and currentDate with additional text and update the HTML elements with the combined values. The function myDollars calculates the sum of two variables and updates an HTML element with the result. Finally, there is an immediately invoked function expression (IIFE) that also calculates the sum of two variables and updates an HTML element with the result.

### Project 3 - Math Operators
This code snippet is a JavaScript script that performs various mathematical calculations and manipulations. It also demonstrates the use of event listeners and object literals.
### Project 4 - Dictionaries
This code snippet defines a function called my_Dictionary that creates a dictionary named Games. The dictionary Games has three key-value pairs: G1 with the value "Snake", G3 with the value "Chess". The code then deletes the value associated with the key G1 in the Games dictionary. Finally, it updates the HTML element with the ID "Dictionary" to display the value associated with the key G1 in the Games dictionary, which is now undefined.
### Project 5 - Comparisons / Type Coercion
This code snippet performs various operations in JavaScript:
It adds an event listener to the DOMContentLoaded event and calls the not_Function() function when the event occurs.
    It defines a function named my_Function() that sets the inner HTML of an element with the ID Test to the result of the expression 0 / 0.
    It sets the inner HTML of an element with the ID Test2 to true if the value 'This is a string' is not a number.
    It sets the inner HTML of an element with the ID Test3 to false if the value '007' is a number.
    It sets the inner HTML of an element with the ID positive_infinity to infinity because 1.8E310 exceeds the number limit.
    It sets the inner HTML of an element with the ID negative_infinity to -infinity because -1.78E310 is less than the number limit.
    It sets the inner HTML of an element with the ID false to false if 10 is not greater than 20.
    It sets the inner HTML of an element with the ID true to true if 10 is less than 20.
    It logs the result of the expression 2 - 2 to the console.
    It logs the result of the expression 2 > 2 to the console.
    It logs the result of the expression 2 + 1 == 3 to the console.
    It performs various comparisons and writes the results to the document.
    It writes the result of a logical expression to the document.
    It defines a function named not_Function() that sets the inner HTML of elements with the IDs Not and Not1 to the logical results of expressions.
    It writes a string and the result of the typeof operator to the document.
### Project 6 - Ternary Operators & Constructors
This code snippet contains three functions and some variable assignments.

The Ride_Function function takes the value of an input element with the id "Height" and assigns it to the variable Height. It then uses a ternary operator to determine whether the Height is less than 52. If it is, it assigns the string "You are too short" to the variable Can_ride, otherwise it assigns the string "You are tall enough". Finally, it updates the innerHTML of an element with the id "Ride" to display the value of Can_ride and the string "to ride."

The Of_Voting_Age function works similarly to the Ride_Function function, but it operates on an input element with the id "Age" and updates the innerHTML of an element with the id "OfVotingAge" to display whether the person is old enough to vote.

The Person function is a constructor function that creates a new object with three properties: personAge, personDemeanor, and personStateOfBeing. The values for these properties are passed as arguments when creating a new object instance using the new keyword.

The PersonDetails function updates the innerHTML of an element with the id "NewandThis" to display the values of the properties of the Trevor object created earlier.

As a bonus, to automate the compilation of the booklist I have used a Python program to parse a personal book list and convert the data into usable javascript which defines the title and author of each book.
### Project 7 - Scope time function
This code snippet is written in JavaScript and performs the following actions:

It adds an event listener to the "DOMContentLoaded" event, which triggers the execution of two functions (add_numbers1 and add_numbers2) when the HTML document has finished loading and parsing.

It creates a global variable Y and assigns it the value 10.

It defines the function add_numbers1, which creates a local variable X and assigns it the value 1. It then replaces the content of an HTML element with the result of the expression Y + X, followed by a line break.

It defines the function add_numbers2, which creates a local variable X and assigns it the value 1. It then replaces the content of an HTML element with the result of the expression Z + X, followed by a line break. Note that the code does not define the variable Z, so this function will throw an error.

It checks if 1 is less than 2 and replaces the content of an HTML element with a string indicating that the left number is smaller than the number on the right.

It defines the function get_Date, which checks if the current time (retrieved using new Date().getHours()) is greater than 22.5. If so, it displays an alert saying "It is bed time."

It defines the function Age_Function, which retrieves the value of an HTML element with the ID "Age" and assigns it to a variable Age. It then checks if Age is greater than or equal to 18 and assigns a string to the variable Vote accordingly. The content of an HTML element with the ID "Howoldare_you" is then replaced with the value of Vote.

It defines the function pokemon_judgement, which retrieves the value of an HTML element with the ID "Pokemon" and assigns it to a variable Pokemon. It then checks if Pokemon is equal to one of the provided strings and assigns a string to the variable trainer accordingly. The content of an HTML element with the ID "Judgement" is then replaced with the value of trainer.

It defines the function Time_function, which retrieves the current time using new Date().getHours() and assigns it to a variable Time. It then checks the value of Time and assigns a string to the variable Reply based on the time of day. The content of an HTML element with the ID "Timeofday" is then replaced with the value of Reply.

It defines the function YELLING, which assigns a string to a variable str and converts it to uppercase using the toUpperCase() method. The content of an HTML element with the ID "YELLING" is then replaced with the uppercase string.
### Project 8 - String Methods
Overall, these functions demonstrate various string manipulation techniques, working with numbers, and updating HTML elements based on the results of the operations.
### Project 9 - Countdown slideshow
This code snippet defines several functions related to a slideshow.

let slideIndex = 1; initializes a variable slideIndex with a value of 1.
showSlides(slideIndex); calls the showSlides function with slideIndex as an argument to display the first slide.
The showSlides function is responsible for displaying the slides. It takes a parameter n which represents the current slide number. It hides all slides and dots, and then displays the current slide and sets the current dot to active.

The plusSlides function and currentSlide function are used to navigate between slides by incrementing or setting the slideIndex value and then calling the showSlides function.

The countdown function starts a countdown from a number of seconds entered by the user. It updates the countdown every second and displays an alert when the countdown reaches 0.
### Tests

### Operands
This is an HTML code snippet that represents a basic webpage. It includes some text, input fields, buttons, and JavaScript functions. When the buttons are clicked, the associated JavaScript functions will be executed. The JavaScript code is stored in a separate file called main.js which is included using the <script> tag at the end of the HTML file.

### Form If Loop
This code defines a function called validateForm that is used to validate a form in a web page. It checks if the input fields named "name", "email", and "message" are empty. If any of them are empty, it displays an alert with a corresponding error message and returns false to prevent the form from being submitted. Finally, it logs the string "Hello World!" to the console.
### Type Attributes
This code snippet contains several functions in JavaScript:

The first two document.write statements demonstrate type coercion in JavaScript. When concatenating a string with a number using the + operator, JavaScript converts the number to a string and concatenates the two values.

The Ride_Function function retrieves the value of an input element with the id "Height" and assigns it to the Height variable. It then uses a conditional (ternary) operator to determine whether the height is less than 52. If it is, it assigns the string "You are too short" to the Can_ride variable; otherwise, it assigns the string "You are tall enough". Finally, it sets the innerHTML property of an element with the id "Ride" to display the value of Can_ride followed by the string "to ride."

The Vehicle function is a constructor function that creates objects with properties Vehicle_Make, Vehicle_Model, Vehicle_Year, and Vehicle_Color. The Jack, Emily, and Erik objects are created using the new keyword and the Vehicle constructor function.

The myFunction function sets the innerHTML property of an element with the id "KeywordsandConstructors" to display a sentence using the properties of the Erik object.

The full_Sentence function concatenates several strings using the concat method and assigns the result to the whole_sentence variable. It then sets the innerHTML property of an element with the id "Concatenate" to display the value of whole_sentence.

The two countdown functions implement a countdown timer. The first countdown function retrieves the value of an element with the id "seconds" and assigns it to the seconds variable. The tick function is defined within the countdown function and is called repeatedly using setTimeout to decrement the seconds variable, update the innerHTML property of an element with the id "timer", and stop the countdown when seconds reaches -1. The second countdown function is similar, but it includes comments to explain its functionality more clearly.

### Type / Attribute calls

### Arrow Function Expressions
This code snippet is an HTML document that includes JavaScript code. It defines several functions and uses them to display information on a webpage. The functions car, flavors, and flavors2 return strings with different car brands, jolly rancher flavors, and jolly rancher flavors respectively. The function myFunction2 checks if any age in an array is greater than or equal to 18 using the .some() method and displays the result on the webpage.

### Onclick Canvas Math
This code snippet performs the following actions:

It selects elements with the class name "Click" and assigns them to the variable A.
It changes the innerHTML of the second element in A to "The text has changed!".
It selects an element with the ID "ID_Name" and assigns it to the variable c.
It gets a 2D rendering context from c and assigns it to the variable ctx.
It draws a line from coordinates (10, 15) to (2000, 2000) using the moveTo and lineTo methods, and then strokes the line using ctx.stroke().
It gets another 2D rendering context from c and assigns it to the variable ctx3.
It creates a radial gradient using the createRadialGradient method, and assigns it to the variable grd.
It sets the color stops for the gradient using the addColorStop method.
It gets another 2D rendering context from c and assigns it to the variable ctx2.
It begins a path using ctx.beginPath().
It draws an arc at coordinates (95, 50) with a radius of 40, starting at 0 radians and ending at 2 * Math.PI radians, and then strokes the arc using ctx.stroke().
It sets the fill color of ctx to the radial gradient using ctx.fillStyle = grd.
It fills a rectangle with coordinates (100, 100), width 150, and height 80 using ctx.fillRect().
It creates a linear gradient using the createLinearGradient method, and assigns it to the variable grd.
It sets the color stops for the gradient using the addColorStop method.
It sets the fill color of ctx to the linear gradient using ctx.fillStyle = grd.
It fills a rectangle with coordinates (10, 10), width 150, and height 80 using ctx.fillRect().

## Intermediary JavaScript Projects
These are more involved JavaScript projects that produce functional apps

### Portfolio Contact Form
Used JavaScript to add a pop-up contact form and several animations to my existing portfolio.
### Calculator
A basic 4 function calculator. Users can add, subtract, multiply and divide on a sleek web version of a calculator.
### Pizza Project
This project is a menu used to order pizza with a various selection of toppings. It then takes the input information and calculates a price for the order.
### Tic-Tac-Toe
The classic game of tic-tac-toe. It randomly rolls dice to select which of the two players goes first, then users are off playing the classic game. Users can decide which token each player wants to use and the winner is celebrated with music and flashing lights.
### To-do List App
A simple to-do list task app where users can create and submit their own tasks and remove them at will.