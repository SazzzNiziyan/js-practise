let a; // Undefined
console.log(a); // undefined
//undefined	A variable is declared but not assigned a value	let x; console.log(x); 



let b = null; // Explicitly assigned null
console.log(b); // null
//null	Represents an intentional absence of a value	let y = null; console.log(y); 



let c = "hello" / 2; // Invalid math operation
console.log(c); // NaN
console.log(typeof NaN); // "number" (weird JS quirk)
//NaN (Not a Number)	A result of an invalid math operation	console.log("hello" / 2); 