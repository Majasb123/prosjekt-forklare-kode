const buttons = document.querySelectorAll(".more")

for ( const button of buttons){
    button.addEventListener("click", function(){
        const card = button.closest(".card")

        card.classList.toggle("active")
        button.classList.toggle("active")

        if (card.classList.contains("active")){
            button.textContent = "lukk"
        } else{
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