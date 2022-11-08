
//Display the Date
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


