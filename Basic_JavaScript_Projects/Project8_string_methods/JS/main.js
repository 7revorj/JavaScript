document.addEventListener("DOMContentLoaded", function () {
    YELLING();
    search();
    setHalfWidth();
});

function full_Sentence() {
    var part_1 = "Jk, ";
    var part_2 = "only fragments. ";
    var part_3 = "not a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Jack a dull boy.";
    var Section = Sentence.slice(27, 31);
    document.getElementById("Slice").innerHTML = Section;
}

function slice_Method2() {
    var Sentence = "The fighters tonight are Anthony and Barrett";
    var Section = Sentence.slice(24, 44);
    document.getElementById("fighters").innerHTML = Section;

}

function YELLING() {
    var str = "Hello World!";
    var strUpper = str.toUpperCase();
    document.getElementById("YELLING").innerHTML = strUpper;
}

function search() {
    var str = "Hello girl";
    var position = str.search("g");
    var result = position.toString().repeat(3);
    document.getElementById("search").innerHTML = result;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function jesus_AgeUponDeath() {
    var Age =33;
    document.getElementById("jesusded").innerHTML = Age.toString();
}

function setHalfWidth() {
    var width = window.innerWidth / 2;
    document.getElementById("jesusdiv").style.width = width + 'px';
}
setHalfWidth();

window.onresize = function (event) {
    setHalfWidth();
};