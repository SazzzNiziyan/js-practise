//method 1
var a = 123;
var b = 526;

console.log("Before swapping: \na = " + a + "\nb = " + b);

var temp = a;
a = b;
b = temp;

console.log("After swapping: \na = " + a + "\nb = " + b);

// method 2

var a = "ajay";
var b = "vijay";

console.log("Before swapping: \na = " + a + "\nb = " + b);

[a,b] = [b,a];

console.log("After swapping: \na = " + a + "\nb = " + b);

// method 3

var a = 66;
var b = 88;

console.log("Before swapping: \na = " + a + "\nb = " + b);

a = a+b;
b = a-b;
a = a-b;

console.log("After swapping: \na = " + a + "\nb = " + b);