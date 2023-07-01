document.addEventListener("DOMContentLoaded", function () { //creates an event listener to call functions when the event DOMContentLoaded happens (which occurs after the HTML doc has been completely loaded and parsed)
    add_numbers1();  
    add_numbers2();
});
Y = 10
function add_numbers1() {
    var X = 1;
    document.getElementById("add_numbers1").innerHTML = (Y + X + "<br>");
}

function add_numbers2() {
    var X = 1;
    document.getElementById("add_numbers1").innerHTML = (Z + X + "<br>");
}

function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

if (1 < 2) {
    document.getElementById("lessthan").innerHTML = "The left number is smaller than the number on the right.";
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting2").innerHTML = "How are you today?";
    }
}

function get_Date() {
    if (new Date().getHours() < 22.5) {
        alert("It is bed time.");
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are too young to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

function pokemon_judgement() {
    Pokemon = document.getElementById("Pokemon").value;
    if (Pokemon === "Bulbasaur" || Pokemon === "Charmander" || Pokemon === "Squirtle" || Pokemon === "Pikachu" || Pokemon === "Chikorita" || Pokemon === "Cyndaquil" || Pokemon === "Totodile" || Pokemon === "Treecko" || Pokemon === "Torchic" || Pokemon === "Mudkip") {
        trainer = "You are a Pokemon Trainer!";
    } else {
        trainer = "You are not cut out to be a Pokemon Trainer!";
    }
    document.getElementById("Judgement").innerHTML = trainer;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 === Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
