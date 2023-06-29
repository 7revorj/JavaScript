document.addEventListener("DOMContentLoaded", function () { //creates an event listener to call not_Function() when the event DOMContentLoaded happens (which occurs after the HTML doc has been completely loaded and parsed)
    not_Function()
})
function my_Function() { //creates a function named my_Function
    document.getElementById("Test").innerHTML = 0 / 0; //replaces the value of the element ID Test with the result of the assignment expression '0 / 0'
}

document.getElementById("Test2").innerHTML = isNaN('This is a string'); //replaces the value of the element ID Test2 with true if the value is not a number

document.getElementById("Test3").innerHTML = isNaN('007'); // replaces the value of the element ID Test3 with false if the value is a number

document.getElementById("positive_infinity").innerHTML = 1.8E310; //replaces the value of the element ID positive_infinity with the value infinity since 1.8E310 is greater than the number limit of 1.79E308

document.getElementById("negative_infinity").innerHTML = -1.78E310; //replaces the value of the element ID negative_infinity with the value -infinity since -1.78E310 is less than the number limit of -1.79E308

document.getElementById("false").innerHTML = (10 > 20); //replaces the value of the element ID false with false if 10 is not greater than 20

document.getElementById("true").innerHTML = (10 < 20); //replaces the value of the element ID true with true if 10 is less than 20

console.log(2 - 2); //logs the result of the expression 2 - 2

console.log(2 > 2); //logs true/false depending on accuracy of the expression
console.log(2 + 1 == 3); //logs true/false depending on accuracy of the expression

X = 20; 
Y = 20;
document.write((X == Y)+'<br/>'); //Writes true/false depending on accuracy of the expression
{
    A = "ding"; 
    B = 3444;
    document.write((A === B)+'<br/>'); //Writes true/false depending on accuracy of the expression
}
P = 'quinty'
Z = 'twenty';
document.write((Z === Y) + '<br/>') //Writes true/false depending on accuracy of the expression

I = 1;
J = '1';
document.write((I === J)+'<br/>'); //Writes true/false depending on accuracy of the expression


document.write((5 > 2 && 10 > 4) + '<br>'); //Writes true/false depending on accuracy of the expression

document.write((5 > 10 && 10 > 4) + '<br/>'); //Writes true/false depending on accuracy of the expression
document.write((5 > 10 || 10 > 4) + '<br/>'); //Writes true/false depending on accuracy of the expression
document.write((5 > 10 || 10 > 20) + '<br/>'); //Writes true/false depending on accuracy of the expression
function not_Function() { //creates a function named not_Function
    document.getElementById(("Not").innerHTML = !(20 < 10) + '<br/>'); //replaces the value of the element ID Not with the result of the logical expression '20 < 10'
    document.getElementById(("Not1").innerHTML = !(20 > 10) + '<br/>'); //replaces the value of the element ID Not1 with the result of the logical expression '!(20 > 10)'
}

document.write ('The following is a number: ' + 20 + '<br/>'); // Writes the string 'The following is a number: 20'

let numb = 42; //creates a variable named number and assings it the value 42
document.write('The type of 42 is ' + typeof numb); //Writes the concatenated string and result of the operator expression to describe the typeof numb
