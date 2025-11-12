# Problem 21: Profile Lookup

## Problem Description

Create a function that searches through an array of contact objects to find a person by their first name, then retrieves a specified property value from that contact's information.

## Requirements

- Function should accept two parameters: `name` (string) and `prop` (string)
- Search the contacts array for a matching `firstName`
- If contact is found AND property exists: return the property value
- If contact is found BUT property doesn't exist: return `"No such property"`
- If contact is NOT found: return `"No such contact"`
- Use exact, case-sensitive matching for names

## Approach

1. Loop through each contact in the array
2. Check if `firstName` matches the provided `name`
3. If match found:
   - Check if the requested property exists on that contact
   - Return property value if exists
   - Return "No such property" if it doesn't
4. If loop completes without finding a match, return "No such contact"

## Solution Logic

### For...of Loop for Objects
```javascript
for (let contact of contacts)
```

This gives us each contact object directly, making the code cleaner than index-based access.

### Exact Name Matching
```javascript
if (name === contact.firstName)
```

Uses strict equality (`===`) for:
- Exact case matching ("Akira" ≠ "akira")
- No type coercion
- Precise matching as specified

### Property Existence Check
```javascript
if (contact.hasOwnProperty(prop))
```

**Why `hasOwnProperty()`?**
- Checks if property belongs to the object itself
- Doesn't check inherited properties from prototype chain
- More explicit than `in` operator
- Safer for object property checking

**Alternative:** Could use `in` operator:
```javascript
if (prop in contact)
```

### Early Returns
The function returns immediately when:
1. Contact found AND property exists → return value
2. Contact found BUT property missing → return "No such property"
3. Loop completes without match → return "No such contact"

This is more efficient than storing results and returning at the end.

### Dynamic Property Access
```javascript
contact[prop]
```

Uses bracket notation because `prop` is a variable. Cannot use dot notation (`contact.prop`) as that would look for a property literally named "prop".

**Time Complexity:** O(n) where n is number of contacts  
**Space Complexity:** O(1) - no additional storage

## Example Walkthrough

```javascript
lookUpProfile("Harry", "likes")
```

1. Loop starts, check first contact (Akira) → name doesn't match
2. Check second contact (Harry) → name matches!
3. Check if "likes" property exists on Harry → yes, it does
4. Return `["Hogwarts", "Magic", "Hagrid"]`

```javascript
lookUpProfile("Bob", "number")
```

1. Loop through all contacts
2. None match "Bob"
3. Loop completes
4. Return "No such contact"

```javascript
lookUpProfile("Akira", "address")
```

1. Find Akira (first contact)
2. Check if "address" property exists → no, it doesn't
3. Return "No such property"

## Example Usage

```javascript
lookUpProfile("Kristian", "likes");
// Returns: ["JavaScript", "Gaming", "Foxes"]

lookUpProfile("Sherlock", "lastName");
// Returns: "Holmes"

lookUpProfile("Bob", "number");
// Returns: "No such contact"

lookUpProfile("Akira", "address");
// Returns: "No such property"
```

## Control Flow Diagram

```
Start
  ↓
Loop through contacts
  ↓
Name matches? 
  ├─ No → Continue to next contact
  └─ Yes → Property exists?
            ├─ Yes → Return property value ✓
            └─ No → Return "No such property" ✓
  ↓
Loop finished?
  └─ Yes → Return "No such contact" ✓
```

## Common Mistakes to Avoid

### ❌ Wrong: Checking both conditions together
```javascript
if (name === contact.firstName && prop in contact) {
    return contact[prop];
}
```
Problem: Doesn't return "No such property" for found contacts with missing properties.

### ❌ Wrong: Returning inside property check only
```javascript
if (name === contact.firstName) {
    if (prop in contact) {
        return contact[prop];
    }
}
// Missing return for "No such property"
```

### ❌ Wrong: Not returning early
```javascript
let result;
for (let contact of contacts) {
    if (name === contact.firstName) {
        if (prop in contact) {
            result = contact[prop];
        }
    }
}
return result;  // Doesn't handle error messages
```

## Real-World Applications

This pattern is fundamental in:

1. **User Authentication**: Looking up users by username
```javascript
function findUser(username) {
    // Similar logic to find user
}
```

2. **Database Queries**: Searching records
3. **CRM Systems**: Customer lookup
4. **Contact Management Apps**: Retrieving contact info
5. **API Responses**: Searching nested data structures
6. **Configuration Management**: Finding settings by key
7. **Inventory Systems**: Product lookup

## Extensions

### Add case-insensitive search
```javascript
if (name.toLowerCase() === contact.firstName.toLowerCase())
```

### Return multiple matches
```javascript
function lookUpProfiles(name, prop) {
    return contacts
        .filter(c => c.firstName === name)
        .map(c => c[prop]);
}
```

### Add partial name matching
```javascript
if (contact.firstName.includes(name))
```

### Add multiple property retrieval
```javascript
function lookUpProfile(name, ...props) {
    // Return object with multiple properties
}
```

## Related Concepts

- **Object property access**: Dot vs bracket notation
- **Array searching**: Linear search algorithm
- **Error handling**: Returning descriptive error messages
- **Early returns**: Exiting function as soon as answer is found
- **Data structures**: Working with arrays of objects
