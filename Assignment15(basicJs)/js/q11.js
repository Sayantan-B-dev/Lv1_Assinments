// Grade Calculator
// Ask the user for their marks (0-100). Assign grades based on the range:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
let mark = prompt("Enter the mark");
mark = Number(mark);
if (isNaN(mark) || mark == "") {
    alert("Enter a valid input");
} else {
    if(mark>100 || mark<0){
        alert("invalid mark")
    }else {
        if (mark < 101 && mark >= 90) alert("Grade A");
        else if (mark < 90 && mark >= 80) alert("Grade B");
        else if (mark < 80 && mark >= 70) alert("Grade C");
        else if (mark < 70 && mark >= 60) alert("Grade D");
        else if (mark < 60) alert("Grade F");
    }
}