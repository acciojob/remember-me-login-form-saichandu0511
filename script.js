//your JS code here. If required.
const form = document.getElementById("loginform");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

if localStorage.getItem("username"){
	existing.style="block";
}

form.addEventListener("submit",function(event){
	event.preventDefault();
 alert("Logged in as " + username.value);

    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        existing.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }
});

existing.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");

    alert("Logged in as " + savedUsername);
});