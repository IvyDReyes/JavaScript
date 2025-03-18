const airplanes = {
    brand: "Airbus",
    model: "A300",
    engine: 'Pratt & Whitney',
};
const { 
    brand,
    model,
    engine: engineBrand //We use the original property name, a colon, and a new name if we want to use variable names that differ from the object's properties.
} = airplanes;
console.log(brand, model, engineBrand);


//rest operator
const { engineBrand1, ...extraInfor} = {
     brand: "Textron", 
     model: "A100",
     engineBrand1: 'General Electric'};
console.log(engineBrand1);
console.log(extraInfor);


//...rest operator
const userInformation = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    phoneNumber: '19200202342'
};
const {
    firstName, 
    lastName, 
    ...otherInfo // The rest of the properties (age and phoneNumber) are grouped into the otherInfo object.
} = userInformation;
console.log(firstName, lastName);
console.log(otherInfo);

