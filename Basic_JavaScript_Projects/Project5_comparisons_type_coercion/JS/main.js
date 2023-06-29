document.addEventListener("DOMContentLoaded", function () {
    not_Function()
})
function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

document.getElementById("Test2").innerHTML = isNaN('This is a string');

document.getElementById("Test3").innerHTML = isNaN('007');

document.getElementById("positive_infinity").innerHTML = 1.8E310;

document.getElementById("negative_infinity").innerHTML = -1.78E310;

document.getElementById("false").innerHTML = (10 > 20);

document.getElementById("true").innerHTML = (10 < 20);

console.log(2 - 2);

console.log(2 > 2);
console.log(2 + 1 == 3);

X = 20;
Y = 20;
document.write((X == Y)+'<br/>');
{
    A = "ding";
    B = 3444;
    document.write((A === B)+'<br/>');
}
P = 'quinty'
Z = 'twenty';
document.write((Z === Y)+'<br/>');

I = 1;
J = '1';
document.write((I === J)+'<br/>');


document.write((5 > 2 && 10 > 4) + '<br>');

document.write((5 > 10 && 10 > 4) + '<br/>');
document.write((5 > 10 || 10 > 4) + '<br/>');
document.write((5 > 10 || 10 > 20) + '<br/>');
function not_Function() {
    document.getElementById(("Not").innerHTML = !(20 < 10) + '<br/>');
    document.getElementById(("Not1").innerHTML = !(20 > 10) + '<br/>');
}

let number = 42;
document.write('The type of 42 is ' + typeof number);
