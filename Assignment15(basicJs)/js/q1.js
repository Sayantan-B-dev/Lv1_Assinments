// Age Category Message
// Ask the user for their age. If they are under 18, print “You are a minor.” If they are between 18 and 60, print “You are an adult.” If they are above 60, print “You are a senior citizen.”

let age = Number(prompt("enter the age"));

if (typeof (age) == "number" && !isNaN(age)){
    if (age < 18) alert("You are a minor.")
    else if (age >= 18 && age <= 60) alert("You are an adult.")
    else if (age >= 60) alert("You are a senior citizen.")
    else alert("Something went wrong. Try again.")
} else {
    alert("enter a valid number please")
}