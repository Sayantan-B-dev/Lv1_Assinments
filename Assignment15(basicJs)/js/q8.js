// User Greeting
// Ask for the user's name and time (24-hour format). Greet them accordingly:

let n = prompt("Enter your name:");
let t = prompt("Enter the current time (24-hour format):");
t=Number(t)
if(isNaN(t)|| t<0 ||t>24){
    alert("enter a valid time")
}else{
    let greet;
    if (t >= 5 && t < 12) alert("Good morning, " + n);
    else if (t >= 12 && t < 15) alert("Good noon, " + n);
    else if (t >= 15 && t < 16) alert("Good afternoon, " + n);
    else if (t >= 16 && t < 20) alert("Good evening, " + n);
    else alert("good night, "+n);
}