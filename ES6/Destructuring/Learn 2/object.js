//We use the original property name, a colon, and a new name if we want to use variable names that differ from the object's properties.
const carInformation = {
    item1: "Mazda",
    item2: "cx30",
    item3: "red",
};
const {
    item1: brand,
    item2: model,
    item3: color
} = carInformation;
console.log(brand);
console.log(model);
console.log(color);