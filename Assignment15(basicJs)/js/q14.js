// FizzBuzz (Multiple of Both)
// Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.
let n=prompt("Enter a number")
n=Number(n);
if(isNaN(n)||n==""){
    alert("invalid input")
}else{
    if(n%3!=0&&n%5!=0) alert(n);
    else if(n%3==0&&n%5==0) alert("FizzBuzz");
    else alert(n%3==0?"Fizz":"Buzz");
}