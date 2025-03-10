const obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

obj.name = "Ajay";
obj.address.city = "Pune";

console.log(obj);

// now make object unchangable

Object.freeze(obj);
obj.name = "Vijay"; // this will not change the value of name

console.log(obj);