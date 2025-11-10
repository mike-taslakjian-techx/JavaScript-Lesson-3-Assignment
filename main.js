// Imports

import { incrementCount, resetCount } from "./counter.js";

// Variables

const count = document.querySelector(".counter p");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const form = document.querySelector("form");
const input = document.querySelector("input");

// Create a paragraph element

const p = document.createElement("p");
form.append(p);

//Event Listeners

incrementBtn.addEventListener("click", () => count.innerText = incrementCount());

resetBtn.addEventListener("click", () => count.innerText = resetCount());

form.addEventListener("submit", (e) => {
    e.preventDefault();
    p.innerText = "";

    if (input.value.length >= 3) {
        p.innerText = `Hello, ${input.value}`;
        p.classList.remove("error");
        input.value = "";
    } else {
        p.innerText = "Please input a valid name.";
        p.classList.add("error");
    }
});

