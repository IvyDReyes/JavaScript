//We can set a default value to ensure age has a value inside the function.
    const userInformation = {
    firstName: "Ari",
    lastName: "Bietks", 
};

function customGreeting({firstName, lastName, age = 39}) {
    console.log(`Hi! My name is ${firstName} ${lastName}. I am ${age}`);
}
customGreeting(userInformation);




const [morningTask, afternoonTask, nightTask, extramileTask = "exercise"] = ['work', 'eat', 'sleep'];
console.log(morningTask);
console.log(afternoonTask);
console.log(nightTask);
console.log(extramileTask);



//Destructure arrays when defining the function parameters
const highlightTalks = ["Javascript", "Java", "Git", "GitHub", "MongoDB"];
function sendAdvertisement([, , versionControl, VersionControlPlatform]) {
    console.log(`Our talks for this month are related to ${versionControl} and ${VersionControlPlatform}.`);
}
sendAdvertisement(highlightTalks);



const conferenceInformation = {
    attendees: 200,
    location: "6203 North 100st",
    days: 3,
};

function getScholarshipsQty({attendees}) {
    const scholarshipsQty = attendees * 0.1;
    console.log(`The scholarships quantity are ${scholarshipsQty}.`);
}
getScholarshipsQty(conferenceInformation);