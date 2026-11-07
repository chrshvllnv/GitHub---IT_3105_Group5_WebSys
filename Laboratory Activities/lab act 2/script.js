const teamMembers = document.getElementById("teamMembers");

const message = document.getElementById("message");

const changeMessageButton = document.getElementById("changeMessage");

const changeBackgroundButton = document.getElementById("changeBackground");

changeMessageButton.addEventListener("click", function() {

    teamMembers.style.display = "none";

    message.innerHTML = "Hello! Welcome to my webpage.";

});

changeBackgroundButton.addEventListener("click", function() {

    document.body.style.backgroundColor = "lightblue";

});