"use strict";
class Car {
    constructor() {
        this.name = "";
        this.price = 0;
        this.colour = "";
        this.mileage = 0;
    }
}
function createCarFromForm() {
    theCars.push({
        name: $("name").value,
        price: parseInt($("price").value),
        colour: $("color").value,
        mileage: parseInt($("mileage").value)
    });
    showAllCars();
    saveCars();
}
function showAllCars() {
    holder.innerHTML = "";
    let i = 0;
    while (i < theCars.length) {
        let card = document.createElement("div");
        holder.appendChild(card);
        card.classList.add("card");
        let head = document.createElement("h1");
        card.appendChild(head);
        head.innerHTML = `Brand:${theCars[i].name}`;
        let paragraph = document.createElement("p");
        card.appendChild(paragraph);
        paragraph.innerHTML = `Price:${theCars[i].price}`;
        let paragraph1 = document.createElement("p");
        card.appendChild(paragraph1);
        paragraph1.innerHTML = `Color:${theCars[i].colour}`;
        let paragraph2 = document.createElement("p");
        card.appendChild(paragraph2);
        paragraph2.innerHTML = `Mileage: ${theCars[i].mileage}`;
        let deleteButton = document.createElement("button");
        deleteButton.dataset.index = i.toString();
        card.appendChild(deleteButton);
        deleteButton.textContent = "Remove";
        function deleteCard() {
            theCars.splice(this.dataset.index, 1);
            saveCars();
            card.remove();
        }
        deleteButton.addEventListener("click", deleteCard);
        i++;
    }
}
function $(id) { return document.getElementById(id); }
//# sourceMappingURL=functions.js.map