const buttons = document.querySelectorAll(".more")

for (const button of buttons) {
    button.addEventListener("click", function () {
        const card = button.closest(".card")

        card.classList.toggle("active")
        button.classList.toggle("active")

        if (card.classList.contains("active")) {
            button.textContent = "lukk"
        } else {
            button.textContent = "les mer"
        }

    })
}

const bars = document.querySelector(".bars i")
const x = document.querySelector(".x i")
const navLinks = document.querySelector(".nav-links")

bars.addEventListener("click", function () {
    bars.classList.add("active")
    x.classList.add("active")
    navLinks.classList.add("active")
})

x.addEventListener("click", function () {
    bars.classList.remove("active")
    x.classList.remove("active")
    navLinks.classList.remove("active")
})


const customerBtn = document.getElementById("customer")

if (customerBtn) {

    customerBtn.addEventListener("click", function () {
        const navn = document.querySelector(".navn").value;
        if (navn == "") {
            alert("Fyll inn informasjon")
        } else {
            alert("Gratulerer " + navn + " med medlemskap!")
        }
    })
}


const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const body = document.querySelector("body")

if (sun && moon) {

    // nattmodus
    moon.addEventListener("click", function () {
        body.classList.add("active")

        moon.style.display = "none"
        sun.style.display = "block"
    })

    // dagmodus
    sun.addEventListener("click", function () {
        body.classList.remove("active")

        sun.style.display = "none"
        moon.style.display = "block"
    })

}