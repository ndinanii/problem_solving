/**
 * Profile Lookup
 * 
 * Searches through an array of contacts for a specific person by first name,
 * then retrieves a specified property value from that contact's information.
 */

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

/**
 * Looks up a contact by name and returns a specified property
 * 
 * @param {string} name - The first name to search for
 * @param {string} prop - The property to retrieve
 * @returns {any|string} - The property value, or an error message
 */
function lookUpProfile(name, prop) {
    // Iterate over each contact in the contacts array
    // We use a simple for-of loop to get each contact object
    for (let contact of contacts) {
        // Check if the provided name exactly matches this contact's firstName
        // The requirement expects an exact, case-sensitive match, so we use ===
        if (name === contact.firstName) {
            // If we've found the contact, we now need to check whether the
            // requested property exists on that contact.
            // Using hasOwnProperty keeps the check strictly on the object's
            // own properties (not inherited ones). 'in' would also work here,
            // but hasOwnProperty is a common, explicit choice.
            if (contact.hasOwnProperty(prop)) {
                // Property exists on this contact. Return its value immediately.
                // Values can be strings, arrays (e.g. likes), or other types.
                return contact[prop];
            }

            // We found the contact but the property does not exist on it.
            // Per the task requirements, return the exact string.
            return "No such property";
        }
        // If the name does not match, continue the loop and check the next contact.
    }

    // If we finish the loop without returning, no contact matched the provided name.
    // Return the required message for a missing contact.
    return "No such contact";
}

// Test cases
console.log(lookUpProfile("Kristian", "likes"));      // ["JavaScript", "Gaming", "Foxes"]
console.log(lookUpProfile("Akira", "lastName"));      // "Laine"
console.log(lookUpProfile("Harry", "likes"));         // ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "number"));          // "No such contact"
console.log(lookUpProfile("Akira", "address"));       // "No such property"
console.log(lookUpProfile("Sherlock", "number"));     // "0487345643"
