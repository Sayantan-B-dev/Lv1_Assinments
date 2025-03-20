// Find First Non-Repeating Character
// Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).

let word=prompt("Enter a Word");
if(word!==""){
    let count={};
    for(let char of word){
        count[char]=(count[char]||0)+1;
    }
    let found = false;
    for(let char of word){
        if(count[char]===1){
            alert(`first non repeating character: ${char}`);
            found = true;
            break;
        }
    }
    if (!found) alert("No non-repeating character found.");
}