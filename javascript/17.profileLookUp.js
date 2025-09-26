let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile (name, prop){
    for (let contact of contacts){
        // Store current value of contacts object in contact. 
        // Inside the profile, find the name and compare it to the firstName.
        if (name === contact.firstName){
          if (prop in contact){
            return contact[`${prop}`]
          }
          if (prop !== contact[`${prop}`]){
            return "No such property"
          }
          
        }
        if (name !== contact.firstName || name === undefined) return "No such contact"
    }
}

console.log(lookUpProfile("Kristian", "likes"))