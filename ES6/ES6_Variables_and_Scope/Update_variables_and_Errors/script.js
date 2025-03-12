//We can update let and var variables with the assign = operator. But we can't change const variables.
//We can't change a whole array stored in a const variable. However, we can use array methods to update its contents.

const newPresent = "Trousers";
const wardrobe = ["Shirt"];
wardrobe.push(newPresent);
console.log(wardrobe);

//Likewise, we can't change a whole object stored in a constant, but we can update its properties.
const myClothes = {
    shirts: 1,
}
myClothes.shirts++;
console.log(myClothes.shirts)


//hoisting
zodiacSign = "Aries";
var zodiacSign;
console.log(zodiacSign);

//TypeError: Assignment to constant variable
const placeOfBirth = "Tokyo";
placeOfBirth = "Asuncion";
console.log(placeOfBirth);

//ReferenceError: Cannot access before initialization
artist = "Frida Kahlo";
let artist;
console.log(artist);
