
function Ride_Function() { //Creates a function named Ride_Function
    var Height, Can_ride; //Declares variables Height and Can_ride
    Height = document.getElementById("Height").value; //Assigns the value of the element Height to the variable Height
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //Assigns the value Can_ride to the variable Can_ride with a ternary operator descriminating between Height < 52 and Height >= 52
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Replaces the value of the element Ride with the result of Can_ride and the string "to ride."
}

function Of_Voting_Age() { //Creates a function named Of_Voting_Age
    var Age, Can_vote; //Declares variables Age and Can_vote
    Age = document.getElementById("Age").value; //Assigns the value of the element Age to the variable Age
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough"; //Assigns the value Can_vote to the variable Can_vote with a ternary operator descriminating between Age < 18 and Age >= 18
    document.getElementById("Of_Voting_Age").innerHTML = Can_vote + " to vote."; //Replaces the value of the element Of_Voting_Age with the result of Can_vote and the string "to vote."
}


function Person(AgeCat, Demeanor, stateOfBeing) { //Creates a function named Person with three parameters
    this.personAge = AgeCat; //Assigns the value of AgeCat to the personAge property
    this.personDemeanor = Demeanor; //Assigns the value of Demeanor to the personDemeanor property
    this.personStateOfBeing = stateOfBeing; //Assigns the value of stateOfBeing to the personStateOfBeing property
}
var Trevor = new Person("Young", "Wild", "Free"); //Creates a variable Trevor and creates a new object instance of the Person constructor with three parameters/arguments which are passed to initialize the respective properties of the object
function PersonDetails() { //Creates a function named PersonDetails
    document.getElementById("New_and_This").innerHTML = "Trevor is:" + "<br/>Age: " + Trevor.personAge + "<br/>Demeanor: " + Trevor.personDemeanor + "<br/>State of Being: " + Trevor.personStateOfBeing;
} //above gets the HTML content of the New_and_This id and replaces it with the result of Trevor.personAge, Trevor.personDemeanor, and Trevor.personStateOfBeing












function Book(title, author) { //Creates a function which creates a constructor Book and assigns two parameters/arguments
    this.title = title; //Assigns the value of title to the title property
    this.author = author; //Assigns the value of author to the author property

    this.info = function () { //Creates a method named info and assigns it a function expression which:
        return this.title + " by " + this.author; //returns the concatenation of the title and author properties with a string
    }
}
 //The following creates 194 book variables and for each book creates a new object instance of the Book constructor with two parameters/arguments which are passed to initialize the respective properties of the object (title and author)
var book1 = new Book("Dirk Gently\'s Hollistic Detective Agency", "Douglas Adams");
var book2 = new Book("The Hitchhiker\'s Guide to the Galaxy", "Douglas Adams");
var book3 = new Book("Winesburg, Ohio", "Sherwood Anderson");
var book4 = new Book("Nazi Nexus, America\'s Corporate Connection to Hitler\'s Holocaust", "Edwin Black");
var book5 = new Book("2666", "Roberto Bolano");
var book6 = new Book("Labyrinths", "Jorge Luis Borges");
var book7 = new Book("Fahrenheit 451", "Ray Bradbury");
var book8 = new Book("The October", "Ray Bradbury");
var book9 = new Book("The Art of Living Consciously", "Nathaniel Branden");
var book10 = new Book("The Six Pillars of Self-Esteem", "Nathaniel Branden");
var book11 = new Book("Wuthering Heights", "Emily Bronte");
var book12 = new Book("Jane Eyre", "Charlotte Bronte");
var book13 = new Book("World War Z", "Max Brooks");
var book14 = new Book("Tricks of the Mind", "Derren Brown");
var book15 = new Book("A Short History of Nearly Everything", "Bill Bryson");
var book16 = new Book("Heart of a Dog", "Mikhail Bulgakov");
var book17 = new Book("The Mater and Margurita", "Mikhail Bulgakov");
var book18 = new Book("A Clockwork Orange", "Anthony Burgess");
var book19 = new Book("The Hero with a Thousand Faces", "Joseph Cambell");
var book20 = new Book("The Stranger", "Albert Camus");
var book21 = new Book("War with Newts", "Karel Capek");
var book22 = new Book("Ender\'s Game", "Orson Scott Card");
var book23 = new Book("True History of the Kelly Gang", "Peter Carey");
var book24 = new Book("How to Win Friends and Influence People", "Dale Carnegie");
var book25 = new Book("Alice\'s Adventures in Wonderland", "Lewis Carroll");
var book26 = new Book("Through the Looking Glass", "Lewis Carroll");
var book27 = new Book("The Amazing adventures of Kavalier and Klay", "Chabon");
var book28 = new Book("The Perks of Being a Wallflower", "Stephen Chbosky");
var book29 = new Book("Year of the Black Rainbow", "Claudio Sanchez/Peter David");
var book30 = new Book("On War", "Carl Von Clausewitz");
var book31 = new Book("Youth: Scenes from Provincial Life", "J.M. Coetzee");
var book32 = new Book("Thy Will Be Done; The Conquest of the Amazon, Nelson Rockefeller and Evangelism in the Age of Oil", "Gerald Colbu, Charlotte Dennett");
var book33 = new Book("Artemis Fowl", "Eoin Colfer");
var book34 = new Book("Heart of Darkness", "Joseph Conrad");
var book35 = new Book("State of Fear", "Michael Crichton");
var book36 = new Book("Expect Resistance: A Field Manual", "Crimethinc worker\'s collective");
var book37 = new Book("House of Leaves", "Mark Z. Danielewski");
var book38 = new Book("Origin of Species", "Charles Darwin");
var book39 = new Book("The Cannabis Manifesto", "Steve DeAngelo");
var book40 = new Book("Underworld", "Don DeLillo");
var book41 = new Book("Guns, Germs & Steel", "Jared Diamond");
var book42 = new Book("The Brief Wondrous Life of Oscar Wao", "Junot Diaz");
var book43 = new Book("A Scanner Darkly", "Philip K Dick");
var book44 = new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick");
var book45 = new Book("Flow My Tears The Policeman Said", "Philip K. Dick");
var book46 = new Book("The Brothers Karamazov", "Fyodor Dostoyevsky");
var book47 = new Book("Crime and Punishment", "Fyodor Dostoevsky");
var book48 = new Book("Notes From Underground", "Fyodor Dostoevsky");
var book49 = new Book("The Count of Monte Cristo", "Alexandre Dumas");
var book50 = new Book("La Reine Margot", "Alexandre Dumas");
var book51 = new Book("Geek Love", "Katherine Dunn");
var book52 = new Book("A Heartbreaking Work of Staggering Genius", "Dave Eggers");
var book53 = new Book("You Shall Know our Velocity", "Dave Eggers");
var book54 = new Book("Invisible Man", "Ralph Ellison");
var book55 = new Book("A Wrinkle in Time", "Madeleine L\'Engle");
var book56 = new Book("Middle Sex", "Jeffrey Eugenides");
var book57 = new Book("Absalom, Absalom!", "William Faulkner");
var book58 = new Book("As I Lay Dying", "William Faulkner");
var book59 = new Book("The Sound and the Fury", "William Faulkner");
var book60 = new Book("Surely You\'re Joking, Mr. Feynman", "Richard Feynman");
var book61 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book62 = new Book("Madame Bovary", "Gustave Flaubert");
var book63 = new Book("What's the Matter with Kansas? How Conservatives Won the Heart of America", "Thomas Frank");
var book64 = new Book("Man\'s Search for Meaning", "Viktor Frankl");
var book65 = new Book("Freedom", "Jonathan Franzen");
var book66 = new Book("The Corrections", "Jonathan Franzen");
var book67 = new Book("Bright Shiny Morning", "James Frey");
var book68 = new Book("Agape Agape", "William Gaddis");
var book69 = new Book("Neuromancer", "William Gibson");
var book70 = new Book("The Lord of the Flies", "William Golding");
var book71 = new Book("Anarchism and Other Essays", "Emma Goldman");
var book72 = new Book("The Story of My Life", "Emma Goldman");
var book73 = new Book("The Happiness Hypothesis", "Jonathan Haidt");
var book74 = new Book("The Raw Shark Texts", "Steven Hall");
var book75 = new Book("The First Immortal", "James Halperin");
var book76 = new Book("The End of Faith", "Sam Harris");
var book77 = new Book("Free Will", "Sam Harris");
var book78 = new Book("The Moral Landscape", "Sam Harris");
var book79 = new Book("Letter to a Christian Nation", "Sam Harris");
var book80 = new Book("Lying", "Sam Harris");
var book81 = new Book("The Universe in a nutshell", "Stephen Hawking");
var book82 = new Book("The Scarlett Letter", "Nathaniel Hawthorne");
var book83 = new Book("The World As It Is: Dispatches on the Myth of Human Progress", "Chris Hedges");
var book84 = new Book("Stranger in a Strange Land", "Robert A. Heinlein");
var book85 = new Book("Catch-22", "Joseph Heller");
var book86 = new Book("A Farewell to Arms", "Ernest Hemingway");
var book87 = new Book("Dune", "Frank Herbert");
var book88 = new Book("The Emperor Wears No Clothes", "Jack Herer");
var book89 = new Book("Siddhartha  2012", "Hermann Hesse");
var book90 = new Book("The True Believer", "Eric Hoffer");
var book91 = new Book("Gödel, Escher, Bach", "Douglas Hofstadter");
var book92 = new Book("The Kite Runner", "Khaled Hosseini");
var book93 = new Book("A Thousand Splendid Suns", "Khaled Hosseinis");
var book94 = new Book("Far Away and Long Ago", "W.H. Hudson");
var book95 = new Book("Brave New World", "Aldous Huxley");
var book96 = new Book("Brave New World Revisited", "Aldous Huxley");
var book97 = new Book("The Doors of Perception", "Aldous Huxley");
var book98 = new Book("Heaven and Hell", "Aldous Huxley");
var book99 = new Book("Island", "Aldous Huxley");
var book100 = new Book("Jesus\' son", "Denis Johnson");
var book101 = new Book("A Portrait of the Artist as a Young Man", "James Joyce");
var book102 = new Book("Dubliners", "James Joyce");
var book103 = new Book("Finnegan\'s Wake", "James Joyce");
var book104 = new Book("The Metamorphosis", "Franz Kafka");
var book105 = new Book("The Trial", "Franz Kafka");
var book106 = new Book("On the Road", "Jack Kerouac");
var book107 = new Book("One Flew Over the Cuckoo\'s Nest", "Ken Kesey");
var book108 = new Book("Flowers for Algernon", "Daniel Keyes");
var book109 = new Book("The Long Walk", "Stephen King");
var book110 = new Book("Interpreter of Maladies", "Jhumpa Lahiri");
var book111 = new Book("The Namesake", "Jhumpa Lahiri");
var book112 = new Book("Big Machine", "Victor Lavalle");
var book113 = new Book("The Kindly Ones", "Jonathan Littell");
var book114 = new Book("Lies My Teacher Told Me", "James W. Loewen");
var book115 = new Book("The Giver", "Lois Lowry");
var book116 = new Book("The Prince & The Art of War", "Niccolo Machiavelli");
var book117 = new Book("Travels with a Tangerine", "Tim Mackintosh-Smith");
var book118 = new Book("Buddenbrooks", "Thomas Mann");
var book119 = new Book("Magic Mountain", "Thomas Mann");
var book120 = new Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez");
var book121 = new Book("Life of Pi", "Yan Martel");
var book122 = new Book("La Maison Tellier", "Guy De Maupassant");
var book123 = new Book("The Road", "Cormac Mccarthy");
var book124 = new Book("Angela\'s Ashes", "Frank McCourt");
var book125 = new Book("Born to Run", "Christopher McDougall");
var book126 = new Book("Atonement", "Ian McEwan");
var book127 = new Book("The Tropic of Cancer", "Henry Miller");
var book128 = new Book("The Power Elite", "C. Wright Mills");
var book129 = new Book("Cloud Atlas: A Novel", "David Mitchell");
var book130 = new Book("The Drunkard\'s Walk", "Leonard Mlodinow");
var book131 = new Book("Hail and Farewell", "George Moore");
var book132 = new Book("Hard-Boiled Wonderland", "Haruki Murakami");
var book133 = new Book("Kafka on the Shore", "Haruki Murakami");
var book134 = new Book("Norwegian Wood", "Haruki Murakami");
var book135 = new Book("The Wind-up Bird Chronicle", "Haruki Murakami");
var book136 = new Book("Skippy Dies", "Paul Murray");
var book137 = new Book("What Every Body is Saying", "Joe Navarro");
var book138 = new Book("Beyond Good and Evil", "Friedrich Nietzsche");
var book139 = new Book("1984", "George Orwell");
var book140 = new Book("Animal Farm", "George Orwell");
var book141 = new Book("Haunted", "Chuck Palahniuk");
var book142 = new Book("Rant", "Chuck Palahniuk");
var book143 = new Book("The Republic", "Plato");
var book144 = new Book("The FBI war on Tupac Shakur and Black Leaders", "John Potash");
var book145 = new Book("Zen and the Art of Motorcycle Maintenance", "Robert M. Pirsig");
var book146 = new Book("The Discworld Series", "Terry Pratchett");
var book147 = new Book("The Fifth Elephant", "Terry Pratchett");
var book148 = new Book("The Amber Spyglass", "Philip Pullman");
var book149 = new Book("Ishmael", "Daniel Quinn");
var book150 = new Book("The Fountainhead", "Ayn Rand");
var book151 = new Book("Memnoch the Devil", "Anne Rice");
var book152 = new Book("Cosmos", "Carl Sagan");
var book153 = new Book("The Demon-Haunted World", "Carl Sagan");
var book154 = new Book("The Catcher in the Rye", "J.D. Salinger");
var book155 = new Book("Franny and Zooey", "J.D. Salinger");
var book156 = new Book("Gold Warriors: America\'s secret recovery of Yamashita\'s gold", "Sterling & Peggy Seagrave");
var book157 = new Book("Me Talk Pretty One Day", "David Sedaris");
var book158 = new Book("Gregory David Roberts", "Shantaram");
var book159 = new Book("The Giving Tree", "Shel Silverstein");
var book160 = new Book("Only Forward", "Michael Marshall Smith");
var book161 = new Book("The Thomas Sowell Reader", "Thomas Sowell");
var book162 = new Book("East of Eden", "John Steinbeck");
var book163 = new Book("The Grapes of Wrath", "John Steinbeck");
var book164 = new Book("Of Mice & Men", "John Steinbeck");
var book165 = new Book("Travels with Charley", "John Steinbeck");
var book166 = new Book("La Chartreuse de Parme", "Stendhal");
var book167 = new Book("Le Rouge et le Noire", "Stendhal");
var book168 = new Book("Anathem", "Neal Stephenson");
var book169 = new Book("Accelerando", "Charles Stross");
var book170 = new Book("Brain Trust", "Garth Sundem");
var book171 = new Book("Among Other Things I\'ve Taken Up Smoking", "Aoibheann Sweeney");
var book172 = new Book("Blankets", "Craig Thompson");
var book173 = new Book("Kingdom of Fear", "Hunter S. Thompson");
var book174 = new Book("Fear and Loathing in Las Vegas", "Hunter S. Thompson");
var book175 = new Book("Fear and Loathing on the Campaign Trail \'72", "Hunter S. Thompson");
var book176 = new Book("The Rum Diary", "Hunter S. Thompson");
var book177 = new Book("Walden", "Henry David Thoreau");
var book178 = new Book("Anna Karenina", "Leo Tolstoy");
var book179 = new Book("War and Peace", "Leo Tolstoy");
var book180 = new Book("This Is Where I Leave You", "Jonathan Tropper");
var book181 = new Book("A Sportsman\'s Sketches", "Ivan Turgenev");
var book182 = new Book("Huckleberry Finn", "Mark Twain");
var book183 = new Book("Breakfast of Champions", "Kurt Vonnegut");
var book184 = new Book("Cat\'s Cradle", "Kurt Vonnegut");
var book185 = new Book("The Sirens of Titan", "Kurt Vonnegut");
var book186 = new Book("Slaughterhouse V", "Kurt Vonnegut");
var book187 = new Book("Infinite Jest", "David Foster Wallace");
var book188 = new Book("The Pale King", "David Foster Wallace");
var book189 = new Book("The End of America: Letter of Warning to a Young Patriot", "Naomi Wolf");
var book190 = new Book("This changes everything", "Naomi Wolf");
var book191 = new Book("The Book: On the Taboo of knowing who you are", "Alan Watts");
var book192 = new Book("Reveries over Childhood and Youth", "William Butler Yeats");
var book193 = new Book("The People\'s History of the united States", "Howard Zinn");
var book194 = new Book("Who Fears Death", "Nnedi Okorafor");


var books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15, book16, book17, book18, book19, book20,
    book21, book22, book23, book24, book25, book26, book27, book28, book29, book30, book31, book32, book33, book34, book35, book36, book37, book38, book39, book40,
    book41, book42, book43, book44, book45, book46, book47, book48, book49, book50, book51, book52, book53, book54, book55, book56, book57, book58, book59, book60,
    book61, book62, book63, book64, book65, book66, book67, book68, book69, book70, book71, book73, book74, book75, book76, book77, book78, book79, book80, book81,
    book83, book84, book85, book86, book87, book88, book89, book90, book91, book92, book93, book94, book95, book96, book97, book98, book99, book100, book101, book102,
    book103, book104, book105, book106, book107, book108, book109, book110, book111, book112, book113, book114, book115, book116, book117, book118, book119, book120,
    book121, book122, book123, book124, book125, book126, book127, book128, book129, book130, book131, book132, book133, book134, book135, book136, book137, book138,
    book139, book140, book141, book143, book144, book145, book146, book147, book148, book149, book150, book151, book152, book153, book154, book155, book156, book157,
    book158, book159, book160, book161, book162, book163, book164, book165, book166, book167, book168, book169, book170, book171, book172, book173, book174, book175,
    book176, book177, book178, book179, book180, book181, book182, book183, book184, book185, book186, book187, book188, book189, book190, book191, book192, book193,
    book194]; // Creates a variable books and assigns it an array which contains array variables that correspond to the above created object instantiations for each book

function checkedBook() { //creates a function called checkedBook
    // Selects a random book from the books array
    var book = books[Math.floor(Math.random() * books.length)]; // Creates a variable book and uses Math.floor and utilizes the Math.random function to select a random number between 0 and the length of the array to return one of the above array variables as the new instantiation of the book object

    var info = book.info(); // Creates a variable info and assigns it the method invocation info, the method calls an above function which returns the properties/arguments of the book selected concatenated by a string
    document.getElementById("checkedBook").innerText = info; //gets the value of the checkedBook element and assigns it the value of the info variable
}

function count_Function() { //creates a function called count_Function
    document.getElementById("Counting").innerHTML = Count(); //gets the value of the counting element and assigns it the value of the result of the inner function Count
    function Count() { //creates a function called Count
        var Starting_point = 9; //creates a variable called Starting_point and assigns it the value of 9
        function Plus_one() { Starting_point += 1; } //creates a function called Plus_one which uses the += operator to add 1 to the value of Starting_point
        Plus_one(); //calls the Plus_one function
        return Starting_point; //returns the value of Starting_point which is now increased by one after the function is called
    }
}