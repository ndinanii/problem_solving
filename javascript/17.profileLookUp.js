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


function lookUpProfile(name, prop) {
  for (let contact of contacts) {
    if (contact.firstName === name) {
      if (prop in contact) {
        return contact[prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Alexn", "likes"));

/*
1. What is contacts?

An array of objects. Each object represents a person, with firstName, lastName, number, and likes (which is an array).
Think of it like a list of people, where each person has some data.

2. What does lookUpProfile(name, prop) do?

You want to:
Look through every contact.
Check if the firstName matches the name parameter.
If yes, then:
Check if that contact has the property you’re asking for.
If so, return its value.
If not, return "No such property".
If you get through all the contacts and none match, return "No such contact".

3. Understanding the for...of loop
This goes through every contact (object) in the contacts array one by one, 
assigning each one to the variable contact.

4. if (contact.firstName === name)

We're checking:
Does this contact's first name match the name we’re looking for?
If yes — we found the right contact.

5. Checking if a property exists
This checks: Does the object have a key named prop?
If yes — return the value of that property:

6. What if we never find the contact?
If the loop finishes and never hits a match for firstName, 
then this line at the end runs: "No such contact"
*/