//Destructuring allows to assign array items to variables to use like any other variable;
const [companyName, phone, address] = ['Leo Pizza', '19873456789', '911 SW Main St, Bunkie'];
console.log(companyName);
console.log(phone);
console.log(address);

//... rest operator gathers remaining values from an array
const [id, userName, ...extraInfo] = ['001', 'Lina Jackson', 'Blue','Orange', 'Rugby'];
console.log(id);
console.log(userName);
console.log(extraInfo);

// , skips variables in destructuring
const [, userName1, , , favoriteSport] = ['001', 'Lina Jackson', 'Blue', 'Orange', 'Rugby'];
console.log(userName1);
console.log(favoriteSport);