const teamMembers = document.getElementById("teamMembers");

const message = document.getElementById("message");

const container = document.querySelector(".container");

const changeMessageButton = document.getElementById("changeMessage");

const changeBackgroundButton = document.getElementById("changeBackground");

changeMessageButton.addEventListener("click", function() {

    teamMembers.style.display = "none";

    message.innerHTML = "Hello! Welcome to our webpage.";

});

changeBackgroundButton.addEventListener("click", function() {

    container.style.backgroundColor = "lightblue";

});