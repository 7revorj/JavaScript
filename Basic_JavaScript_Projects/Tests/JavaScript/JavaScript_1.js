function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.moveTo(10, 15);
ctx.lineTo(2000, 2000);
ctx.stroke();

var ctx3 = c.getContext("2d");
var grd = ctx.createRadialGradient(95, 50, 40, 95, 50, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
var ctx2 = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.fillStyle = grd;
ctx.fillRect(100, 100, 150, 80);

var grd = ctx.createLinearGradient(40, 55, 30, 45);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);