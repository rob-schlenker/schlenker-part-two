
var vacType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");
var groupSize = prompt("How many are in your group?");
let travel = "";
let destination = "";


if (vacType === "musical") {
  destination = "New Orleans";
} else if (vacType === "tropical") {
    destination = "Beach Vacation in Mexico";
} else {
  destination = "White Water Wafting the Grand Canyon";
}

if (groupSize < 3) {
  travel = "First Class";
} else if (groupSize < 6) {
    travel = "Helicopter";
} else {
  travel = "Charter Flight";

  
}

var result = ("Since you’re a group of " + groupSize + " going on a " + vacType + " vacation, you should take a " + travel + " to " + destination)

console.log(result)



