// Number Reversal
// Take a three-digit number from the user and print its reverse. (Example: 123 → 321).

let n=prompt("Enter a number");
n=Number(n);
if(isNaN(n)||n===""){
    alert("invalid input");
}else{
    let a,b=0,original;
    original=n;
    while(n!=0){
        a=n%10;
        b=b*10+a;
        n=Math.floor(n / 10);;
    }
    alert("reverse of "+original+" is "+b);
}