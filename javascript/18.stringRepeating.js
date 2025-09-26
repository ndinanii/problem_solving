// function repeatStringNumTimes(str, num){
//     if (num <= 0){
//         let str = ""
//         return str;
//     }
//     return str.repeat(num)
// }


function repeatStringNumTimes(str, num) {
  let result = "";

  if (num <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}
