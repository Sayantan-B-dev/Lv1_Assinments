// Character Case Checker
// Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

let char = prompt("Enter a single character");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (char.trim().length == 1) {
    if (letters.includes(char)) {
        if (char == char.toUpperCase()) alert("you entered an uppercase character");
        else alert("you entered an lowercase character");
    }
    else{
        alert("it is not a character");
    }
}
else {
    alert("enter a valid input please")
}