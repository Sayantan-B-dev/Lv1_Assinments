// Even or Odd Sum
// Take two numbers from the user using prompt(). If the sum of both numbers is even, print “Even Sum”; otherwise, print “Odd Sum.”
let n1=Number(prompt("Enter the first number"));
let n2=Number(prompt("Enter the second number"));
if(typeof(n1)=="number" && typeof(n2)=="number" && !isNaN(n1) && !isNaN(n2)){
    let sum=((n1+n2)%2)==0?"even":"odd";
    alert("Sum of the given numbers is "+sum);
}else{
    alert("enter a valid number please")
}
