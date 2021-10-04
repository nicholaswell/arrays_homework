var box = document.body.querySelector(".box")

var n1 = Number(prompt("Enter a number"))
var op = String(prompt("Enter an operator: +,-,/,*"))
var n2 = Number(prompt("Enter another number"))

if(isNaN(n1)) {
    box.innerHTML = "Invalid number 1"
} else if(op !== "+" && op !== "-" && op !== "/" && op !== "*") {
    box.innerHTML = "Invalid operator"
} else if(isNaN(n2)) {
    box.innerHTML = "Invalid number 2"
} else{
    if(op == "+"){
        box.innerHTML = "Your answer is: " + Number(n1+n2)
    }
    if(op == "-"){
        box.innerHTML = "Your answer is: " + Number(n1-n2)
    }
    if(op == "/"){
        box.innerHTML = "Your answer is: " + Number(n1/n2)
    }
    if(op == "*"){
        box.innerHTML = "Your answer is: " + Number(n1*n2)
    }
}





