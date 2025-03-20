// Simple Login System
// Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

let username = "Ankit031"
let password = "corona705"

let inpUser = prompt("Enter your username").trim();
let inpPass = prompt("Enter your password").trim();

if (inpUser == "" || inpPass == "") {
    alert("empty input not allowed");
}
else if (inpPass == password && inpUser == username) {
    alert("Login Successful")
}
else if (inpPass != password && inpUser != username) {
    alert("Enter correct info to log in")
}
else {
    alert(inpPass!=password?"Enter correct password":"Enter correct username");
}
