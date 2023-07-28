function validateForm() {
    let x = document.forms["contact"]["name"].value;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["contact"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    let z = document.forms["contact"]["message"].value;
    if (z == "") {
        
        alert("Message must be filled out");
        return false;
    }
}

console.log("Hello World!");