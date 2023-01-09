var user = "USERNAME"
var pass = "PASSWORD"

var passQ = prompt("What is the username?")

if(passQ == user){
    var passS = prompt("What is your password?")
    if(passS=pass){
        alert("Thank you!!")
    }
    else{
        alert("Your password is incorrect.")
        window.open("https://google.com/heart", "_self")
    }
}
else{
    alert("Your username is incorrect.")
    window.open("https://google.com/heart", "_self")
}