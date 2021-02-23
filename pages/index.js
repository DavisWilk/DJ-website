const navButton = document.querySelector(".nav-button")
const nav = document.querySelector(".nav")

navButton.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})