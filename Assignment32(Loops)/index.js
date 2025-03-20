console.info("\n%c=================== JavaScript Math & Number Functions ===================\n", "color: cyan; font-weight: bold;");
console.info("You need to console.log these functions,else the prompt will open", "color: cyan; font-weight: bold;");
console.warn("1. Check if a 10-digit number is a valid ISBN");
console.log("Valid ISBN (Example: 1234567890): %cisISBN(1234567890)", "color: blue;");
console.log("Invalid ISBN (Example: 12345): %cisISBN(12345)", "color: blue;");

console.warn("2. Find GCD of Two Numbers");
console.log("GCD of 48 and 18: %cgcd(48, 18)", "color: blue;");

console.warn("3. Check if a number is a Harshad Number");
console.log("Harshad Number (Example: 18): %charshad(18)", "color: blue;");
console.log("Not a Harshad Number (Example: 19): %charshad(19)", "color: blue;");

console.warn("4. Check if a number is a Perfect Square");
console.log("Perfect Square (Example: 16): %cisPerfectSquare(16)", "color: blue;");
console.log("Not a Perfect Square (Example: 17): %cisPerfectSquare(17)", "color: blue;");

console.warn("5. Check if a number is Abundant");
console.log("Abundant Number (Example: 12): %cisAbundant(12)", "color: blue;");
console.log("Not an Abundant Number (Example: 15): %cisAbundant(15)", "color: blue;");

console.warn("6. Generate Fibonacci Sequence");
console.log("First 7 Fibonacci numbers: %cfibonacci(7)", "color: blue;");

console.warn("7. Find numbers with a given number of divisors");
console.log("Numbers with 4 divisors: %cDivisors(4)", "color: blue;");

console.warn("8. Find Prime Factors of a number");
console.log("Prime factors of 30: %cprimeFactors(30)", "color: blue;");
console.log("Prime factors of 84: %cprimeFactors(84)", "color: blue;");

console.warn("9. Area Calculator (Circle, Rectangle, Triangle)");
console.log("Requires User Input. Simply call %carea()", "color: red; font-style: italic;");

console.warn("10. Check if a number is a Neon Number");
console.log("Neon Number (Example: 9): %cneonNum(9)", "color: blue;");
console.log("Not a Neon Number (Example: 10): %cneonNum(10)", "color: blue;");

console.warn("11. Sum of Even Indexed Fibonacci Numbers");
console.log("Sum of even-indexed Fibonacci numbers up to 10: %cfibonacciEVEN(10)", "color: blue;");

console.warn("12. Find Largest Digit in a Number");
console.log("Largest Digit in 37495(asks for input in prompt): %cLargestDigit()", "color: blue;");

console.warn("13. Find LCM of Two Numbers");
console.log("LCM of 12 and 18: %clcm(12, 18)", "color: blue;");

console.warn("14. Sum of Even Digits in a Number");
console.log("Sum of even digits in 123456: %cSumEvenDigit(123456)", "color: blue;");

console.warn("15. Find Number of Days in a Given Month");
console.log("Days in February 2020 (Leap Year): %cDaysIMonth('feb', 2020)", "color: blue;");
console.log("Days in April 2023: %cDaysIMonth('apr', 2023)", "color: blue;");

console.info("\n%c===================== End of Functions Documentation =====================\n", "color: cyan; font-weight: bold;");



function isISBN(n) {
    let index = 10, sum = 0;
    
    if (n.toString().length != 10) return "Invalid";
    
    while (index > 0) {
        sum += index * (n % 10);
        n = Math.floor(n / 10);
        index--;
    }

    return (sum % 11 === 0) ? "Valid ISBN" : "Invalid ISBN";
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function harshad(n) {
    let original=n,a,sum=0
    while (n !== 0) {
        a=n%10
        sum+=a
        n=Math.floor(n/10)
    }
    return (original%sum==0)?"Harshad":"Not Harshad"
}

function isPerfectSquare(n) {
    return Math.sqrt(n) % 1 === 0 ? "Perfect Square" : "Not a Perfect Square";
}

function isAbundant(n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum > n ? "Abundant Number" : "Not an Abundant Number";
}

function fibonacci(n){
    let a=0,b=1,c
    let arr=[a,b]
    for(let i=2;i<n;i++){
        c=a+b
        a=b
        b=c
        arr.push(c)
    }
    return arr
}

function Divisors(x){
    let arr=[]
    for(let i=1;i<=1000;i++){
        let count=0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==x){
            arr.push(i)
        }
    }
    return arr
}

function primeFactors(n) {
    let factors = [], i = 2;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            factors.push(i);
            n /= i;
        } else {
            i++;
        }
    }
    if (n > 1) factors.push(n);
    return factors;
}

function area() {
    let inp;
    do {
        inp = Number(prompt("1.Circle\n2.Rectangle\n3.Triangle\n0.Exit\nChoose:"));
        if (isNaN(inp)) continue;

        let a, b, c, s;
        switch (inp) {
            case 1:
                a = Number(prompt("Enter radius:"));
                console.log(isNaN(a) ? "Invalid" : `Circle Area: ${(Math.PI * a * a).toFixed(2)}`);
                break;
            case 2:
                a = Number(prompt("Enter length:"));
                b = Number(prompt("Enter width:"));
                console.log(isNaN(a) || isNaN(b) ? "Invalid" : `Rectangle Area: ${(a * b).toFixed(2)}`);
                break;
            case 3:
                a = Number(prompt("Enter side 1:"));
                b = Number(prompt("Enter side 2:"));
                c = Number(prompt("Enter side 3:"));
                s = (a + b + c) / 2;
                console.log(isNaN(a) || isNaN(b) || isNaN(c) ? "Invalid" : `Triangle Area: ${(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2)}`);
                break;
        }
    } while (inp !== 0);
}

function neonNum(n){
    let sum=0,square=n*n
    while(square!=0){
        let a=square%10
        sum+=a
        square=Math.floor(square/10)
    }
    return (sum==n)?"Neon number":"Not Neon Number"
}

function fibonacciEVEN(n){
    let a=0,b=1,c,sum=a
    for(let i=2;i<2*n;i++){
        c=a+b
        a=b
        b=c
        if (i % 2 === 0) sum += c; 
    }
    return sum
}

function LargestDigit(){
    n= Number(prompt("Enter a number:\t"));
    let large=0
    while(n!=0){
        let a=n%10
        if(a>large) large=a
        n=Math.floor(n/10)
    }
    return large
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function SumEvenDigit(n){
    let sum=0
    while(n!=0){
        let a=n%10
        if(a%2==0) sum+=a
        n=Math.floor(n/10)
    }
    return sum
}

function DaysIMonth(month,year){
    year=Number(year)
    month=month.toLowerCase().slice(0,3)
    switch(month){
        case "jan":
        case "mar":
        case "may": 
        case "jul": 
        case "aug":
        case "oct":
        case "dec":
            return 31
        case "apr":
        case "jun":
        case "sep":
        case "nov":
            return 30
        case "feb":
            return (year%400==0||(year%4==0&&year%100!=0)&&month=="feb")?29:28
        default:
            return "invalid input"
    }
}