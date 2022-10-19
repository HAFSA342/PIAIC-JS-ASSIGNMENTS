//ASSIGNMENT 02
console.log("\n \t Assignment 02");
var name1 = "Hafsa";
console.log("Hey "+ name1 + "!" + " Hope you doing well.");



//ASSIGNMENT 03
console.log("\n \t Assignment 03");
var name1 = "HAFsa SohAil";
//lowercase
console.log(name1.toLowerCase());
//Uppercase
console.log(name1.toUpperCase());
//Titlecase
name2 = name1.split(' ')
.map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
.join(' ');
console.log(name2);



//ASSIGNMENT 04
console.log("\n \t Assignment 04");
var quote = "Your big Opportunity maybe right where you are NOW.";
console.log("Napolean Hill Once Said : " + '"' + quote + '"');



//ASSIGNMENT 05
console.log("\n \t Assignment 05");
var message = "Your big Opportunity maybe right where you are NOW.";
var famous_person = "Napolean Hill";
console.log(famous_person + " Once Said : " + '"' + message + '"');



//ASSIGNMENT 06
console.log("\n \t Assignment 06");
let person_name = " Hafsa\nSohail  ";
//before stripping
console.log(person_name);
//after stripping
console.log(person_name.replace(/\n/g, ' '));



//ASSIGNMENT 07
console.log("\n \t Assignment 07");
//addition 
console.log("Add 5 + 3")
console.log(5+3)
//subtraction 
console.log("Subtract 10 - 2")
console.log(10-2)
//division 
console.log("Divide 16 / 2")
console.log(16/2)
//multiplication 
console.log("Multiply 2 * 4")
console.log(2*4)



//ASSIGNMENT 08
console.log("\n \t Assignment 08");
console.log(5 + 3);
console.log(10-2);
console.log(16/2);
console.log(2*4);



//ASSIGNMENT 09
console.log("\n \t Assignment 09");
const favNum = 4;
const msg =`My Favorite Number is ${favNum}`
console.log(msg);



//ASSIGNMENT 10
console.log("\n \t Assignment 10");
console.log("commenting");
//Commenting
//hafsa sohail (this is a single line comment)
/*this
is
a 
multi line
comment*/



//ASSIGNMENT 11
console.log("\n \t Assignment 11");
const  friends= ["Maria","Maheen","Momina","Waniya","Javeria","Tazeen"];
friends.sort();
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}



//ASSIGNMENT 12
console.log("\n \t Assignment 12");
friends.sort();
const msgForFriends = [
    "You just light up the room",
    "You have a great smile",
    "You look great today",
    "Your outlook on life is amazing",
    "You are enough",
    "You are one of the strongest people I know"
];
for (let i = 0; i < friends.length; i++) {
    console.log(`${friends[i]} ${msgForFriends[i]}"`);
}



//ASSIGNMENT 13
console.log("\n \t  Assignment 13");
var cars = ["Lamborghini", "Tesla", "McLaren", "Ferrari"];
for (var i = 0; i < cars.length; i++) {
 console.log(`I would like to own a ${cars[i]}`);
}



//ASSIGNMENT 14
console.log("\n \t Assignment 14");
var list = ["Daniyal", "Faizan", "Mariya"];
for (var i = 0; i < list.length; i++) {
  var message = `Hey ${list[i]}, I would like to invite you to dinner.`;
  console.log(message);
}



//ASSIGNMENT 15
console.log("\n \t Assignment 15");
console.log("Guys,I don't think Faizan will be able to show up for dinner so I'm inviting Ahmed.");
var list = ["Daniyal", "Faizan", "Mariya"];
list[1] = "Ahmed";
for (var i = 0; i < list.length; i++) {
var message = `Hey ${list[i]}, would you like to join us for dinner tonight?`;
console.log(message);
}



//ASSIGNMENT 16
console.log("\n \t Assignment 16");
console.log("I got three more seats so I'm thinking of inviting some more of you.");
var list = ["Daniyal", "Ahmed", "Mariya"];
list.unshift("Qunoot"); //adding at the beginning
list.splice(2, 0, "Mehroz");//adding in the middle
list.push("Adnan");//adding at the end
for (var i = 0; i < list.length; i++) {
  var message = `Hey ${list[i]}, what bout having dinner tonight at my place?`;
  console.log(message);
}



//ASSIGNMENT 17
console.log("\n \t Assignment 17");
console.log("Guys bad news! We have to cancel today's plan")
var list = ["Qunoot", "Daniyal", "Mehroz", "Ahmed", "Mariya", "Adnan"];
console.log(list.shift(), "Today's dinner plan has been cancel.")
console.log(list.pop(), "Today's dinner plan has been cancel.")
console.log(list.pop(), "Today's dinner plan has been cancel.")
console.log(list.pop(), "Today's dinner plan has been cancel.")
console.log(list[0], list[1], "You both are still invited")
list.pop()
list.shift()
console.log(list)//empty list



//ASSIGNMENT 18
console.log("\n \t Assignment 18");
var fvrtPlaces = ["Makkah", "Madina", "Paris", "Dubai", "Singapore"];
console.log(fvrtPlaces); //in its original order
var newList = [...fvrtPlaces]
console.log(newList.sort()); //in alphabetical order
console.log(fvrtPlaces); //showing that list is still in its original position
console.log(newList.reverse()); //in reverse alphabetical order
console.log(fvrtPlaces); //showing that list is still in its original position
fvrtPlaces.reverse();
console.log(fvrtPlaces); //the order of list changed
console.log(fvrtPlaces.reverse()); //list is back in its original position
fvrtPlaces.sort();
console.log(fvrtPlaces); //order changed in alphabetical order
fvrtPlaces.sort().reverse()
console.log(fvrtPlaces); //in reverse alphabetical order



//ASSIGNMENT 19
console.log("\n \t Assignment 19");
var list = ["Qunoot", "Daniyal", "Mehroz", "Ahmed", "Mariya", "Adnan"];
console.log(`I am inviting ${list.length} people to the dinner.`);



//ASSIGNMENT 20
console.log("\n \t Assignment 20");
var choclates = ["Dairy milk", "Bounty", "Kitkat", "Mars", "Nutella"];
for (var i = 0; i < choclates.length; i++) {
console.log(choclates[i]);
}



//ASSIGNMENT 21
console.log("\n \t Assignment 21");
const me = {
  firstName: "Hafsa",
  lastName : "Sohail",
  age : 20,
};
console.log(`My name is ${me.firstName + " " + me.lastName} and I'm ${me.age} years old.`)



//ASSIGNMENT 22
console.log("\n \t Assignment 22");
var error = ["python", "java", "C++"];
console.log(error[3]) //this code throw error
for (var i=0; i<error.length; i++) {
console.log(error[i]);
} //recovering error



//ASSIGNMENT 23
console.log("\n \t Assignment 23");
var assignment = "hard";
console.log(assignment == assignment)
console.log(assignment == "hard")
console.log("hard" == assignment)
console.log("easy" != assignment)
console.log(assignment != "easy")
console.log(assignment != assignment)
console.log(assignment == "easy")
console.log("easy" == assignment)
console.log(assignment != "hard")
console.log("hard" != assignment)



//ASSIGNMENT 24
console.log("\n \t Assignment 24");
var planet = ["mars", "Jupiter", "earth"];
var num = 4;
console.log(planet === "venus");
console.log(planet !== "venus");
console.log(planet === planet[1].toLowerCase());
console.log(planet !== planet[0].toUpperCase());
console.log(num === Number)
console.log(num !== Number)
console.log(num == 4 || planet == "earth")
console.log(num == 4 && planet == "mars")
console.log(num < 3)
console.log(num > 3)
console.log(num >= 4)
console.log(num <= 1)
console.log(planet === Array)
console.log(planet !== Array)



//ASSIGNMENT 25
console.log("\n \t Assignment 25");
var alienColor = "red";
if (alienColor == "red"){
  console.log("You earned 5 points.")
} else {
  console.log("lost");
} // test pass
if (alienColor == "blue"){
  console.log("You earned 5 points")
} else{
  console.log("!!!!!")
} //test fail



//ASSIGNMENT 26
console.log("\n \t Assignment 26");
var alienColor = "green";
if (alienColor == "green"){
  console.log("You earned 5 points for shootinig the alien.")
} else {
  console.log("You just earned 10 points.")
} // program running if block
if (alienColor == "black"){
  console.log("You earned 5 points for shootinig the alien.")
} else {
  console.log("You just earned 10 points.")
} // program running else block



//ASSIGNMENT 27
console.log("\n \t Assignment 27");
var alienColor = "yellow";
if (alienColor == "green"){
  console.log("You earned 5 points.");
} else if (alienColor == "yellow"){
  console.log("You earned 10 points.");
} else if (alienColor == "red"){
  console.log("You earned 15 points.");
} else {
  console.log("You lose!")
}



//ASSIGNMENT 28
console.log("\n \t Assignment 28");
var age = 20;
if (age < 2) {
  console.log("This person is a Baby");
} else if ((age >= 2 && age < 4)) {
  console.log("This person is a Toddler");
} else if ((age >= 4 && age < 13)) {
  console.log("This person is a Kid");
} else if ((age >= 13 && age < 20)) {
  console.log("This person is a Teenager");
} else if ((age >= 20 && age < 65)) {
  console.log("This person is an Adult");
} else {
  console.log("This person is an Elder");
}



// ASSIGNMENT 29
console.log("\n \t Assignment 29");
var fvrtFruits = ["apple", "mango", "strawberry"];
for (var i=0; i<fvrtFruits.length; i++){
  if (fvrtFruits[i] === "apple"){
    console.log("You really like apples.")
  }
  if (fvrtFruits[i] === "kiwi"){
    console.log("You don't like kiwis.")
  }
  if (fvrtFruits[i] === "strawberry"){
    console.log("You really like strawberries.")
  }
  if (fvrtFruits[i] === "orange"){
    console.log("You don't like oranges.")
  }
  if (fvrtFruits[i] === "mango"){
  console.log("You really like mangoes.")
  }
}


//ASSIGNMENT 30
console.log("\n \t Assignment 30");
var userName = ["Adnan", "Hafsa", "Admin", "Mariya", "Ali Raza"]
for (var i=0; i<userName.length; i++){
  if (userName[i] == "Admin"){
    console.log("Hello Admin, would you like to see a status report?")
  } else {
    console.log(`Hey ${userName[i]}, thankyou for logging in again.`)
  }
}



//ASSIGNMENT 31
console.log("\n \t Assignment 31");
var userName = ["Adnan", "Hafsa", "Admin", "Mariya", "Ali Raza"]
if (userName === []){
  console.log("We need to find some users..")
} // making sure list is not empty
var emptyList = []
if (emptyList == 0){
  console.log("We need to find some users..")
} // list is empty now



//ASSIGNMENT 32
console.log("\n \t Assignment 32");
var currentUsers = ["Adnan", "Hafsa", "Anaya"];
var newUsers = ["Hafsa", "Zoya","Ayeza"];
for (var i=0; i<currentUsers.length; i++){
  for (var j=0; j<newUsers.length; j++){
    if (currentUsers[i] === newUsers[j]){
      console.log("This username is not available.")
    } else {
      console.log("The name is available.")
    }
  }
}



//ASSIGNMENT 33
console.log("\n \t Assignment 33");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function ordinal(n){
  return ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th"
}
for (var r=[], i=1; i<10; i++){
  r.push(i + ordinal(i));
}
console.log(r.join())



//ASSIGNMENT 34
console.log("\n \t Assignment 34");
const favPizza = ["Chicken Tikka", "Dancing Fajita", "Phantom"];
for (var i=0; i<favPizza.length; i++){
  console.log(favPizza[i])
} // name of each pizza
for (var j=0; j<favPizza.length; j++){
  console.log(`I like ${favPizza[j]} flavor of pizza.`)
} // one line for each pizza
console.log("I really love pizza."); // additional sentence



//ASSIGNMENT 35
console.log("\n \t Assignment 35");
var fish = ["eels", "hagfish", "rays", "salmon"];
for (var i=0; i<fish.length; i++){
  console.log(fish[i])
}
for (var j=0; j<fish.length; j++){
  console.log(`${fish[j]} live underwater`)
}
console.log("They all are ectothermic or cold blooded.")



//ASSIGNMENT 36
console.log("\n \t Assignment 36");
function make_shirt(size, message){
  console.log(`Your shirt size is ${size} and the message that print on shirt is ${message}`);
};
make_shirt("medium", "I am a programmer.");



//ASSIGNMENT 37
console.log("\n \t Assignment 37");
function make_shirt(size, message) {
  console.log(`On ${size} size print ${message}`);
};
make_shirt("large", "Adult");
make_shirt("medium", "Teenager");
make_shirt("small", "Kid");



//ASSIGNMENT 38
console.log("\n \t Assignment 38");
function describe_city(city, country){
  console.log(`${city} is in ${country}.`)
};
describe_city("Karachi", "Pakistan")
describe_city("Delhi", "India")
describe_city("Istanbul", "Turkey")



//ASSIGNMENT 39
console.log("\n \t Assignment 39");
function city_country(city, country) {
  console.log(`${city}, ${country}`);
};
city_country('"Karachi"', '"Pakistan"');
city_country('"Delhi"', '"India"');
city_country('"Istanbul"', '"Turkey"');



//ASSIGNMENT 40
console.log("\n \t Assignment 40");
function make_album(album, artist) {
  console.log(`Album ${album} by ${artist}`);
}
make_album("Fine line" , "Harry styles");
make_album("Born pink" , "Blackpink");
make_album("Happier than ever" , "Billie Eilish");



//ASSIGNMENT 41
console.log("\n \t Assignment 41");
var magicians = ["Penn", "Jerry", "Dynamo", "Criss"]
function show_magician(){
  for (var i = 0; i<magicians.length; i++){
    console.log(magicians[i])
  }
};
show_magician()



//ASSIGNMENT 42
console.log("\n \t Assignment 42");
var magicians = ["Penn", "Jerry", "Dynamo", "Criss"]
function make_great(m){
  m.forEach((element, index) =>{
    m[index] = "The Great " + element;
  })
  console.log(m);
}
make_great(magicians)



//ASSIGNMENT 43
console.log("\n \t Assignment 43");
var magicians = ["Penn", "Jerry", "Dynamo", "Criss"];
function show_magician(){
  for (var i = 0; i<magicians.length; i++){
    console.log(magicians[i])
  }
};
show_magician()
function make_great(m){
  m.forEach((element, index) =>{
    m[index] = "The Great " + element;
  })
  console.log(m);
}
make_great(magicians)
  


//ASSIGNMENT 44
console.log("\n \t Assignment 44");
function sandwich(...ingredients){
  for (let ingredient of ingredients){
    console.log("-",ingredient)
  }
}
console.log("Hafsa wants :")
sandwich("mayonise", " boil chicken", "black pepper")
console.log("Maria wants :")
sandwich("cheese", "tomato sauce", "chunks")
console.log("Daniyal wants :")
sandwich("kabab", "fried egg", "ketchup")
console.log("in their sandwich.")



//ASSIGNMENT 45
console.log("\n \t Assignment 45");
function car(manufacture, model, color, price){
  this.manufacturerName = manufacture;
  this.modelName = model;
  this.color = color;
  this.price = price;
}
let myCar = new car("BMW", "iX3", "White", "PKR 240.4 Lacs")
console.log(myCar)
let myCar1 = new car("GUGU", "250", "Grey", "PKR 78.0-80.0 Lacs")
console.log(myCar1)
let myCar2 = new car("Peugeot", "2022", "Blue", "75.0 Lacs")
console.log(myCar2)