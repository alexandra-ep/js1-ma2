// Question 1: Create a function expression by assigning an anonymous function to a variable called myFunctionExpression. The function should console log your name.
const myFunctionExpression = function () {
    console.log("Alexandra");
}

myFunctionExpression();


// Question 2: Select the button in the HTML below by its class. Add a click event listener. The callback function passed to the event listener should log the sentence I was clicked. 
const button = document.querySelector(".btn");

function clickEventListener() {
    console.log("I was clicked");
};

button.addEventListener("click", clickEventListener);


// Question 3: Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed to the event listener should log the value of the key that was pressed.
const input = document.querySelector("#firstName");

function keyupFunction(event) {
    console.log("The value: ", event.target.value);
};

input.addEventListener("keyup", keyupFunction);


// Question 4: Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button.
const secondButton = document.querySelector("button");

function mouseoverFunction() {
    secondButton.classList.add("hover");
};

secondButton.addEventListener("mouseover", mouseoverFunction);


// Question 5: Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button.
const thirdButton = document.querySelector("[data-animal='dog']");

function mouseoutFunction() {
    thirdButton.classList.remove("hover");
};

thirdButton.addEventListener("mouseout", mouseoutFunction);


// Question 6: Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag. The callback function should log the value of the data attribute on each element when the cursor moves over it.
const listItems = document.querySelectorAll("li");

for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", listEventListener);
}

function listEventListener(event) {
        console.log(event.target.dataset);
}


// Question 7: Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the switch.
const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}


// Question 8: Convert the for loop code below to a forEach loop.
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(item) {
    console.log(item);
});


// Question 9: Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.
function time() {
    console.log("Hello!");

    if(counter === 5) {
        clearInterval(timerId)
    }
    counter++;
}

let counter = 0;

const timerId = setInterval(time, 500);


// Question 10: Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text.
const timeOut = document.querySelector(".container");

function updateText() {
    timeOut.innerHTML = "Text updated"
}

setTimeout(updateText, 2000);