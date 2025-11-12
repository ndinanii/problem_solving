/**
 * Record Collection Manager
 * 
 * Manages a music record collection with functions to update album information.
 * Can add/update properties and manage tracks arrays for each album.
 */

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

/**
 * Updates records in the collection based on specific rules
 * 
 * @param {Object} records - The record collection object
 * @param {number} id - The album ID to update
 * @param {string} prop - The property to update
 * @param {any} value - The new value for the property
 * @returns {Object} - The updated records object
 */
function updateRecords(records, id, prop, value) {
    // Rule 1: If value is empty string, delete the property
    if (value === "") {
        delete records[id][prop];
    } 
    // Rule 2: If prop is not "tracks" and value is not empty, update/add the property
    else if (prop !== "tracks") {
        records[id][prop] = value;
    } 
    // Rule 3: If prop is "tracks"
    else {
        // Create tracks array if it doesn't exist
        if (!records[id].hasOwnProperty("tracks")) {
            records[id]["tracks"] = [];
        }
        // Add value to the end of tracks array
        records[id]["tracks"].push(value);
    }
    
    return records;
}

// Test cases
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// Adds artist: "ABBA" to album 5439

console.log(updateRecords(recordCollection, 2548, "tracks", "Wanted Dead or Alive"));
// Adds new track to album 2548

console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
// Adds albumTitle to album 1245

console.log(updateRecords(recordCollection, 2468, "tracks", ""));
// Deletes tracks property from album 2468
