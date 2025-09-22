// ==============================
// Part 1: Variables & Conditionals
// ==============================

// Variable declaration
let userAge = 18; // change this to test different outcomes

// Function to check age using conditional
function checkAge() {
  let message = "";
  if (userAge >= 18) {
    message = "You are an adult.";
  } else {
    message = "You are a minor.";
  }
  // DOM interaction #1 → update text content
  document.getElementById("ageResult").textContent = message;
}

// Attach event listener to button
document.getElementById("checkAgeBtn").addEventListener("click", checkAge)

// Part 2: Custom Functions
// ==============================

// Function 1: Greet user
function greetUser() {
  const name = prompt("What is your name?");
  const greeting = "Hello, " + name + "! Welcome.";
  // DOM interaction #2 → update paragraph
  document.getElementById("greeting").textContent = greeting;
}

// Function 2: Generate a random number
function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}


// ==============================
// Part 3: Loops
// ==============================

document.getElementById("showNumbersBtn").addEventListener("click", () => {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list

  // Loop 1: For loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }

  // Loop 2: While loop with random numbers
  let count = 0;
  while (count < 3) {
    let li = document.createElement("li");
    li.textContent = "Random number: " + getRandomNumber(100);
    list.appendChild(li);
    count++;
  }
});


// ==============================
// Part 4: DOM Interactions
// ==============================

// Change background color
document.getElementById("changeColorBtn").addEventListener("click", () => {
  // DOM interaction #3 → change body background
  document.body.style.background = "#e0f7fa";
});

// Toggle hidden text visibility
document.getElementById("toggleTextBtn").addEventListener("click", () => {
  let text = document.getElementById("extraText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});
