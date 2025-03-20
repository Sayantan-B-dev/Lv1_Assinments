// Sum of Digits
// Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).
let n=prompt("Enter a number");
n=Number(n)
if(isNaN(n)||n===""){
    alert("invalid input")
}else{
    let a,b=0;
    let original=n;
    while(n!=0){
        a=n%10;
        b+=a;
        n=Math.floor(n/10);
    }
    alert(`addition of all digits from ${original} is ${b}`)
}