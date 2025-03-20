// Leap Year Checker
// Ask the user for a year and determine if it's a leap year or not.
let year = prompt("enter the year").trim()
if (!isNaN(year) && year !== "") {
    year=Number(year);
    if(year%400==0 || (year%4==0 && year%100!=0)) alert("Entered year is a leap year")
    else alert("Entered year is not a leap year")
}else{
    alert("enter a valid year please")
}