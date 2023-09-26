const popUp = document.getElementById("popUp");
const progressBar = document.querySelector(".progress-container");

progressBar.addEventListener("mouseover", function() {
    popUp.classList.remove('hidden');
})

progressBar.addEventListener("mouseout", function() {
    popUp.classList.add('hidden')
})