/* In this lab, you will mask the username part of an email address with asterisks. 
Masking is a term used to hide or replace sensitive information with asterisks or other characters.
For example, if the email address was myEmail@email.com, 
then the masked email address will be m*****l@email.com. */

function maskEmail(email){
  // first, the function must return the email with these conditions:
  // Replace index 1 until the second last index before the character "@" with *.
  
  const splitChar = '@';
  if (email.length === 0) return email;
  let splitIndex = email.indexOf(splitChar);
  if (splitIndex === -1) splitIndex = email.length;
  let result = email[0];
  const maskEndIndex = splitIndex - 2;

  if (maskEndIndex >= 1){
    result += '*'.repeat(maskEndIndex);
  }

  const tailStartIndex = Math.max(1, splitIndex - 1);
  result += email.substring(tailStartIndex);

  return result;
}

const email = "ndinani@protonmail.com"
console.log(maskEmail(email))
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))




//Method 2
function maskEmail2(email) {
  if (email.length === 0) return email;
  
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return email; // No '@' found, return original email
  
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  if (username.length <= 2) {
    return username + domain; // No masking needed for short usernames
  }
  
  const maskedUsername = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];
  
  return maskedUsername + domain;
}


let obj = {x: 0, y: null};
console.log(obj.hasOwnProperty("y"));

