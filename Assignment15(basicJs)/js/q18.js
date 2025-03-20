// Reverse Without String Methods
// Ask the user for a word and reverse it without using .split(), .reverse(), or .join().

let word=prompt("Enter a word").trim();
if(word===""){
    alert("invalid input");
}else{ 
    let reverse="";
    for(let i=word.length-1;i>=0;i--){
        reverse+=word[i]
    }
    alert("reverse of "+word+" is "+reverse);
}