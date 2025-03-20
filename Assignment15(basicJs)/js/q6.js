// Simple Calculator
// Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result.
let n1 = prompt("Enter first number");
let n2 = prompt("Enter second number");
let op = prompt("Select any operator from these (+,-,*,/)")
let operators = "+-*/";
if (operators.includes(op)) {
    n1=Number(n1)
    n2=Number(n2)
    if (isNaN(n1) || isNaN(n2)) {
        alert("Enter a valid input")
    } else {
        switch (op) {
            case "+":
                alert("Addition of " + n1 + " and " + n2 + " is " + (n1 + n2));
                break;
            case "-":
                alert("Subtraction of " + n1 + " and " + n2 + " is " + (n1 - n2));
                break;
            case "*":
                alert("Multiplication of " + n1 + " and " + n2 + " is " + (n1 * n2));
                break;
            case "/":
                alert("Division of " + n1 + " and " + n2 + " is " + (n1 / n2));
                break;
            default:
                break;
        }
    }
} else {
    alert("Enter a valid operator")
}
