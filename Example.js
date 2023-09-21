function palindrome(str) {
    let myVar = str.match(/[A-Za-z0-9]+/gi).join("").toLowerCase().split("");
    if (myVar.join("") === myVar.reverse().join("")){
        return true
    }
    return false
}
