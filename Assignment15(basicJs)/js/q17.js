// Palindrome Checker
// Ask the user for a word. Check if it reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.”

let word=prompt("Type a word").trim().toLowerCase();
if(word===""){
    alert("Enter a valid Word");
}else{
    let newWord=word.split("").reverse().join("");
    alert(word===newWord?"Palindrome.":"Not a Palindrome.");
}