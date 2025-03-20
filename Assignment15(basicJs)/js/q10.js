// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10.

let n=prompt("enter a number")
n=Number(n)
if(isNaN(n) || n==""){
    alert("Enter a valid number");
}else{
    let arr=[];
    for(let i=1;i<=10;i++){
        arr.push(n+" X "+i+" = "+(n*i));
    }
    alert(arr.join("\n"))
}