/* This is a JSON string variable */
var me = '{"name":"Trevor","age":33,"city":"Jacksonville"}';
/* Convert JSON strings to JavaScript objects */
var JSONstring = JSON.parse(me);
document.getElementById("me").innerHTML = JSONstring.name + " is from " + JSONstring.city;
