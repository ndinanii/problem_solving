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

function updateRecords(records, id, prop, value) {
  if (value === "") {
    // If value is empty string, delete prop
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // If prop isn't "tracks" and value isn't empty, update/assign the value
    records[id][prop] = value;
  } else {
    // If prop is "tracks"
    // Create array if it doesn't exist
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    // Add value to end of tracks array
    records[id]["tracks"].push(value);
  }

  return records;
}

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";