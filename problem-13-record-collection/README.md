# Problem 13: Record Collection

## Problem Description

Create a function to manage a music record collection. The function should handle updating album information with specific rules for different properties, especially the tracks array.

## Requirements

- Function should accept: records object, album ID, property name, and value
- Handle three different update scenarios based on specific rules
- Return the updated records object
- Special handling for the "tracks" property (it's an array)

## Update Rules

### Rule 1: Empty Value
If `value` is an empty string (`""`):
- **Delete** the specified property from the album

### Rule 2: Non-Track Properties
If `prop` is NOT "tracks" and `value` is not empty:
- **Update or add** the property with the given value
- Creates new property if it doesn't exist
- Overwrites existing property if it does

### Rule 3: Tracks Property
If `prop` is "tracks":
- **Create** tracks array if it doesn't exist
- **Append** the value to the tracks array
- Never overwrites existing tracks

## Approach

1. Check if value is empty → delete property
2. Check if property is not "tracks" → set/update property
3. Otherwise (property is "tracks"):
   - Ensure tracks array exists
   - Push new track to array
4. Return the updated records object

## Solution Logic

### Conditional Flow
The function uses an if-else chain that checks conditions in a specific order:

```
if (value === "")           → Delete property
else if (prop !== "tracks") → Set/update property  
else                        → Handle tracks array
```

### Tracks Array Handling
```javascript
if (!records[id].hasOwnProperty("tracks")) {
    records[id]["tracks"] = [];
}
records[id]["tracks"].push(value);
```

This ensures:
1. Array exists before trying to push
2. Multiple tracks can be added sequentially
3. Existing tracks are never lost

### Object Mutation
The function modifies the original `records` object (mutates it) rather than creating a copy. This is intentional for efficiency and matches the problem requirements.

**Time Complexity:** O(1) for property updates, O(1) for array push  
**Space Complexity:** O(1) - modifies in place

## Example Usage

```javascript
// Add a property
updateRecords(recordCollection, 5439, "artist", "ABBA");
// Result: Album 5439 now has artist: "ABBA"

// Add a track
updateRecords(recordCollection, 2548, "tracks", "Wanted Dead or Alive");
// Result: New track added to existing tracks array

// Delete a property
updateRecords(recordCollection, 2468, "tracks", "");
// Result: tracks property removed from album 2468
```

## Data Structure

```javascript
{
    albumId: {
        albumTitle: "string",
        artist: "string",
        tracks: ["track1", "track2", ...]
    }
}
```

## Key Concepts

- **Object property access**: Using bracket notation for dynamic keys
- **Object mutation**: Modifying existing object vs creating new one
- **Array initialization**: Checking existence before manipulation
- **Conditional logic**: Multiple rules with different outcomes
- **hasOwnProperty()**: Safe way to check if property exists

## Real-World Applications

Similar logic is used in:
- Content Management Systems (CMS)
- User profile updates
- Shopping cart modifications
- Database record updates
- Configuration management
