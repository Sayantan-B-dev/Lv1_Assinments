// Find Second Largest
// Take three numbers as input and find the second largest number (without using sort() or Math.max()).

let n1=prompt("Enter the first number");
let n2=prompt("Enter the second number");
let n3=prompt("Enter the third number");
n1=Number(n1)
n2=Number(n2)
n3=Number(n3)
if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Invalid input")
}else{
    if ((n1 > n2 && n1 < n3) || (n1 > n3 && n1 < n2)) {
        alert(`${n1} is the second largest number.`);
    } else if ((n2 > n1 && n2 < n3) || (n2 > n3 && n2 < n1)) {
        alert(`${n2} is the second largest number.`);
    } else {
        alert(`${n3} is the second largest number.`);
    }
}