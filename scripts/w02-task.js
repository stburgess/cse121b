/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Stephen T. Burgess";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile picture of ${fullName}`);

/* Step 5 - Array */
let favFoods = [
    "Ham and pinapple pizza",
    "Meat and potatoes",
    "Pumpkin pie",
    "Beef stew",
    "Chicken cordon bleu"
];
foodElement.textContent = favFoods;
let food1 = "Oatmeal cookies";
favFoods.push(food1);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;

