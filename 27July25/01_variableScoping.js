// Variable Scoping

// Scope: Jahan hum variable exist karta hai aur us ko access kar sakte hain.

// 1. Global Scope: yeh woh variables hain jo k har jagah accessible hosakte hain sirf declaration se pehle nahi kar sakte hai.

// 2. Function/Local Scope: var function scope hai kyun k yeh function k block se bahir acces nahi hosakta hai.

// 3. Block Scope: koi bhi curly braces `{}` se bahir let & const ko access nahi kiya jaa sakta yeh block scope hai


// Global Scope
var a = 1;
let b = 2;
const c = 3;

function z(){
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3   
}
z();


// function scope
function local(){
    var d = 10;
    console.log(d); // 10
}
local()
console.log(d); // referenceError: d is not defined

// block scope
{
    var e = 10
    let f = 20
    const g = 30

    console.log(e); // 10
    console.log(f); // 20 
    console.log(g); // 30
}
console.log(e); // 10
console.log(f); // referenceError 
console.log(g); // referenceError