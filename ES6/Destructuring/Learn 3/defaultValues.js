//We can set default values when we're unsure whether an unpacked element value exists, or is set to undefined.
const [brand, model, enginesQty = 1] =
["Airbus", "A300"];
console.log(brand);
console.log(model);
console.log(enginesQty);


//Like with arrays, we can set a default value to ensure an object has a value for a property we need.
const userInformation = {
    lastName: "Smith",
    age: 41,
};
const {
    firstName = "Kori", lastName, age
} = userInformation;
console.log(firstName);
console.log(lastName);
console.log(age);