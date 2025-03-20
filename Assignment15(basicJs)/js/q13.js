// Swapping Without Third Variable
// Take two numbers from the user and swap their values without using a third variable.

let n1=prompt("Enter first number");
let n2=prompt("Enter second number");
n1=Number(n1);
n2=Number(n2);
if(isNaN(n1)||isNaN(n2)||!n1||!n1){
    alert("invalid input")
}else{
    n1=n1+n2-(n2=n1);
    alert("first number is now: "+n1+", second number is now: "+n2)
}