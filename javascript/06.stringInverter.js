let str;

function reverseString(str) {
    if (str.length <= 1){
      return str;
    }
    
    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    const middle = str.slice(1, -1);
    
    return lastChar + reverseString(middle) + firstChar;

};