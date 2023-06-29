function my_Dictionary() { //creates a function named my_Dictionary
    var Games  = { //creates a variable named Games which will act as the Games dictionary
        G1: "Pong", //Assigns the value of the element ID G1 to the Games dictionary
        G1: "Snake", //Assigns the value of the element ID G1 to the Games dictionary
        G3: "Chess", //Assigns the value of the element ID G3 to the Games dictionary
    };

    delete Games.G1; //deletes the value of the element ID G1
document.getElementById("Dictionary").innerHTML = Games.G1; //replaces the value of the element ID Dictionary with the result of the assignment expression 'Games.G1'
}