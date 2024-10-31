document.getElementById("open-menu").addEventListener("click", function() {
    document.getElementById("open-menu").style.display = "none"
    document.getElementById("close-menu").style.display = "block"
    document.getElementById("main-menu").classList.toggle("open")
})
document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("open-menu").style.display = "block"
    document.getElementById("close-menu").style.display = "none"
    document.getElementById("main-menu").classList.toggle("open")
})