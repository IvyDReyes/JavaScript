//We can convert a JS object to a JSON with the JSON.stringify() method.

const concert = {
    band: "Super Carrots",
    music: "Indie"
};
console.log(concert);
console.log(JSON.stringify(concert));

//We can also transform a JSON string into a JS object with the JSON.parse() method.
const dog = '{"name":"Rocko", "age":3}';
console.log(JSON.parse(dog));