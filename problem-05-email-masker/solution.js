/**
 * Email Masker
 * 
 * Masks the username part of an email address with asterisks.
 * Example: myEmail@email.com becomes m*****l@email.com
 */

function maskEmail(email) {
    // Return empty string if email is empty
    if (email.length === 0) return email;
    
    // Find the position of the '@' character
    let splitIndex = email.indexOf('@');
    
    // If no '@' found, treat entire string as username
    if (splitIndex === -1) splitIndex = email.length;
    
    // Start with the first character
    let result = email[0];
    
    // Calculate how many characters to mask
    // We want to mask from index 1 to (splitIndex - 2)
    const maskEndIndex = splitIndex - 2;
    
    // Add asterisks if there are characters to mask
    if (maskEndIndex >= 1) {
        result += '*'.repeat(maskEndIndex);
    }
    
    // Add the last character of username and the domain
    const tailStartIndex = Math.max(1, splitIndex - 1);
    result += email.substring(tailStartIndex);
    
    return result;
}

// Alternative Method 2: More readable approach
function maskEmail2(email) {
    if (email.length === 0) return email;
    
    const atIndex = email.indexOf('@');
    if (atIndex === -1) return email; // No '@' found
    
    // Separate username and domain
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    // No masking needed for short usernames (2 characters or less)
    if (username.length <= 2) {
        return username + domain;
    }
    
    // Mask middle characters: first + asterisks + last
    const maskedUsername = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];
    
    return maskedUsername + domain;
}

// Test cases
console.log(maskEmail("ndinani@protonmail.com"));      // n*****i@protonmail.com
console.log(maskEmail("apple.pie@example.com"));       // a*******e@example.com
console.log(maskEmail("info@test.dev"));               // i**o@test.dev
console.log(maskEmail2("user@domain.org"));            // u**r@domain.org
