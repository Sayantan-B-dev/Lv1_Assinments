// Traffic Light System
// Ask the user for a traffic light color (red, yellow, green). Print appropriate messages:

// Red: "Stop!"
// Yellow: "Get Ready!"
// Green: "Go!"

let color=prompt("enter the signal color").trim();
let arr=["red","yellow","green"]
color=color.toLowerCase()
if(!arr.includes(color) || color==""){
    alert("Enter a valid color");
}else{
    switch (color) {
        case "red":
            alert("Stop!")
            break;
        case "yellow":
            alert("Get Ready!")
            break;
        case "green":
            alert("Go!")
            break;
        default:
            break;
    }
}