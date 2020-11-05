"use strict";

let form = document.getElementById("form");
let input = document.getElementById("price-field");
input.addEventListener("focus", eventFocus);
input.addEventListener("blur", eventBlur);

let value = document.getElementById("price-field").value;
let span = document.createElement("span");
span.textContent = `Current price: ${value}`;
span.style.cssText = "display: flex; align-items: center; margin-bottom: 4px; position: relative";

let x = document.createElement("input");
x.setAttribute("type", "reset");
x.setAttribute("value", "✖️");
x.style.cssText = "display: none; font-size: 6px; border-radius: 100px; padding: 2px; margin: 4px";

const p = document.createElement("p");
p.textContent = "Please enter correct price";

form.prepend(span);
form.append(p);
span.append(x);
span.style.display = "none";
p.style.display = "none";

function eventFocus() {
    input.style.cssText = "color = black; border-color: green;";
    x.addEventListener("click", () => {
            span.style.display = "none";
    });
}

function eventBlur() {
    let input = document.getElementById("price-field");
    let value = document.getElementById("price-field").value;

    if (value === "") return span.style.display = "none";

    if (value === "-0" || isNaN(value)) {
        span.style.display = "none";
        input.style.cssText = "color: red; border-color: red";
        p.style.display = "flex";
        return;
    }

     if (value >= 0) {
        input.style.cssText = "color: green; border-color: green";
        span.style.display = "flex";
        span.textContent = `Current price: ${value}`;
        x.style.cssText = "display: flex; font-size: 6px; border-radius: 100px; padding: 2px; margin: 4px";
        span.append(x);
        p.style.display = "none";
    } else {
        input.style.cssText = "color: red; border-color: red";
        p.style.display = "flex";
        span.style.display = "none";
    }
}
