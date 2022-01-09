"use strict"

class Car {
    name: string = ""
    price: number = 0
    colour: string = ""
    mileage: number = 0
}

function createCarFromForm() {
    theCars.push({
        name: (<HTMLInputElement>$("name")).value,
        price: parseInt((<HTMLInputElement>$("price")).value),
        colour: (<HTMLInputElement>$("color")).value,
        mileage: parseInt((<HTMLInputElement>$("mileage")).value)
    })
    showAllCars()
    saveCars()
}

function showAllCars() {

    holder.innerHTML = ""

    let i = 0
    while (i < theCars.length) {
        let card = document.createElement("div")
        holder.appendChild(card)
        card.classList.add("card")

        let head = document.createElement("h1")
        card.appendChild(head)
        head.innerHTML = `Brand:${theCars[i].name}`

        let paragraph = document.createElement("p")
        card.appendChild(paragraph)
        paragraph.innerHTML = `Price:${theCars[i].price}`

        let paragraph1 = document.createElement("p")
        card.appendChild(paragraph1)
        paragraph1.innerHTML = `Color:${theCars[i].colour}`

        let paragraph2 = document.createElement("p")
        card.appendChild(paragraph2)
        paragraph2.innerHTML = `Mileage: ${theCars[i].mileage}`

        let deleteButton = document.createElement("button")
        deleteButton.dataset.index = i.toString()
        card.appendChild(deleteButton)
        deleteButton.textContent = "Remove"

        function deleteCard(this: any) {

            theCars.splice(this.dataset.index, 1)
            saveCars()
            card.remove()

        }
        deleteButton.addEventListener("click", deleteCard)

        i++
    }
}

function $(id: string) { return document.getElementById(id) }













