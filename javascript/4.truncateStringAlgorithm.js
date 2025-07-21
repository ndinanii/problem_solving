// global variable
let str = "A-tisket a-tasket A green and yellow basket";
let num = 8;

// Function
function truncateString(str,num){
  if (str.length > num){
    const truncatedString = str.slice(0, num) + "...";
    return truncatedString;
  }
  if (str.length <= num) {
    return str;
  }
  
}
console.log(truncateString(str, num))