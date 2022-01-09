"use strict"


let holder = document.createElement("div")
document.body.appendChild(holder)
holder.classList.add("holder")


let theCars: Car[] = []

theCars = JSON.parse(localStorage.getItem("cars")!)

if (theCars == null) {
    theCars = []
    makeCars()
    saveCars()

}


function makeCars() {
    theCars.push({ name: "Ford", price: 600000, colour: "Blue", mileage: 60000 })
    theCars.push({ name: "Lamborghini", mileage: 1000, colour: "White", price: 8000 })
    theCars.push({ name: "Toyota", mileage: 987462, colour: "Red", price: 982162 })
    theCars.push({ name: "Audi", price: 15000, colour: "Silver", mileage: 45000 })
    theCars.push({ name: "Porsche", price: 25000, colour: "Black", mileage: 25000 })
    theCars.push({ name: "Ferrari", price: 125000, colour: "Silver", mileage: 35000 })
}



// theCars.sort((a, b)=>b.price - a.price)


showAllCars()


function saveCars() {

    localStorage.setItem("cars", JSON.stringify(theCars))

}

let saveButton = $("button")

saveButton!.addEventListener("click", createCarFromForm)
