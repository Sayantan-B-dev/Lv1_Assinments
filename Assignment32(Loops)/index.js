function isISBN(n){
    let num=n.toString()
    let index=10,sum=0
    
    if(num.length!=10) return "Invalid"
    
    while(index>0){
        sum=index*(n%10)
        index--
        n=n/10
    }
    return (sum%11)?"Valid ISBN":"Invalid ISBN"
}

console.log(isISBN(0471958697))