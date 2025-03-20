// Positive, Negative, or Zero
// Take a number input and check if it is positive, negative, or zero.
let n=prompt("Enter a number");
if(isNaN(n) || n==""){
    alert("Enter a valid number");
}else{
    if(n>0) alert(n+" is a positive number");
    else if(n<0) alert(n+" is a negative number");
    else alert("You entered 0")
}