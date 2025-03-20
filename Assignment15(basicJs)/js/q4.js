// Largest of Three Numbers
// Take three numbers as input and print the largest number among them without using Math.max().

let n1 = prompt("enter the first number").trim();
let n2 = prompt("enter the second number").trim();
let n3 = prompt("enter the third number").trim();
if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Enter valid numbers please");
} else {
    n1=Number(n1);
    n2=Number(n2);
    n3=Number(n3);
    if (n1 == n2 || n2 == n3 || n1 == n3) {
        alert("Don't enter duplicate numbers")
    } else {
        let arr = [n1, n2, n3]
        arr.sort((a, b) => b - a);
        alert(arr[0] + " is the largest number.")
    }
}


