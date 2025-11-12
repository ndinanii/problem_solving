# Problem 05: Email Masker

## Problem Description

Mask the username part of an email address with asterisks for privacy. The first and last characters of the username remain visible, while all middle characters are replaced with asterisks.

## Requirements

- Function should accept an email address as a string
- Keep the first character of the username
- Replace all middle characters with asterisks
- Keep the last character of the username
- Keep the entire domain part unchanged (everything after '@')
- Handle edge cases (empty strings, short usernames, no '@' symbol)

## Approach

### Method 1: Index-based masking
1. Find the position of the '@' symbol
2. Extract the first character
3. Calculate how many asterisks are needed
4. Append the last character of username and the domain

### Method 2: String slicing (more readable)
1. Split the email into username and domain parts
2. Check if username is long enough to mask
3. Build masked username: `first + asterisks + last`
4. Concatenate with domain

## Solution Logic

**Method 1** uses index calculations and `repeat()` to build the masked string character by character. It's efficient but requires careful index management.

**Method 2** separates concerns by splitting username and domain first, making the logic clearer. It uses `slice()` for clean string manipulation.

Both methods:
- Preserve the first and last characters
- Replace middle characters with asterisks
- Handle edge cases gracefully

**Time Complexity:** O(n) where n is the email length  
**Space Complexity:** O(n) for the result string

## Example Usage

```javascript
maskEmail("myEmail@email.com");      // Returns: "m*****l@email.com"
maskEmail("john.doe@company.org");   // Returns: "j******e@company.org"
maskEmail("ab@test.com");            // Returns: "ab@test.com" (too short to mask)
```
