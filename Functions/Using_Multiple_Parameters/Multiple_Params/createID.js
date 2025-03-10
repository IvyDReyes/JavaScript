function createID(name, year) {
    return name + year + "@hutmail.com";
}
const email = createID("jo", "1998");
console.log(email);