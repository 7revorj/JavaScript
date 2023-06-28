var X = "Ghost" //Creates a variable X and assigns it the value "Ghost"

var Y = "in the Shell" //Creates a variable Y and assigns it the value "in the Shell"

document.write(X + Y); //Writes the sum of X and Y

var U = "Warning, warning, you are entering an uncharted sector of deep space"; //Creates a variable U and assigns it the value "Hello"

window.alert(U) //Windows Alerts with the value of U which is "Hello"

document.write("Lisa told Bart, \"Knock it off, Bart! or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded."); //Writes the string and uses \ to ignore ' and ""
// <br> breaks the line but can only do so within a string unless it is in the html
document.write(" Don\'t you dare touch my shorts!") //writes the string

document.write("\"Be who you are and say what you feel,"
    + "because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuss"); //writes the string and concatenates with additional strings

document.write("This is a concatenated" //Same as above
    + " string");

var ZZZ = "<br>Oh boy" + " I'm tired" //assigns the variable ZZZ a line break and concatenated string
document.write(ZZZ);

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", //Assigns the variables Family, Dad, Mom
    Daughter = "Penny", Son = "Zorro"; //assigns the variables Son, Daughter
document.write(Daughter); //Writes the value of the variable daughter

var Class = "Warrior", Ability1 = "Charge", Ability2 = "Hamstring", //Assigns the variables Class, Ability1, Ability2
    Ability3 = "Rend", Ability4 = "<br>Heroic Strike"; //assigns the variables Ability3, Ability4

document.write(Ability4); //writes the value of the variable Ability4


document.write(9 / 3); //An expression that divides 9 by 3 and writes the result

function My_First_Function() {                  //Defining a function and allowing it to have an anonymous name
    var str = "This is the button text!";      //Defining a variable and giving it
                                              // a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value
                                              //with the "Button_Text" id 
}

window.onload = function (onload) {                    //Window.onload is an event that calls the function (which has been named onload) AFTER the rest of the page has loaded
    var Sent1 = "This is the beginning of the string"; //Creates a variable Sent1 and assigns it the value "This is the beginning of the string"
    var Sent2 = "This is the end of the string<br>";   //Creates a variable Sent2 and assigns it the value "This is the end of the string<br>"
    var combinedSent = Sent1 + ". " + Sent2;            //Creates a variable combinedSent and assigns it the value Sent1 + ". " + Sent2
    document.getElementById("myElement").innerHTML = combinedSent; //Assigns the myElement id the combinedSent variable and SETS the HTML content of the myElement id 

                                                                //The above SETS the HTML content of the myElement id
                                                                //The below GETS the HTML content of the myElement id (which is now the result of combinedSent)
    
    var elementContent = document.getElementById("myElement").innerHTML; //Creates a variable elementContent and assigns it the value of the myElement id   
    document.getElementById("demo").innerHTML = elementContent; // Logs the value of elementContent
    
                                                                // Below is redundant code to demonstrate that the most recent variable receives precedence.
    var elementContent = document.getElementById("myElement").innerHTML;
    document.getElementById("demo").innerHTML = "Blah";
}

