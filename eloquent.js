Exercise Minium

function min(num1, num2) {
if(num1 < num2) {
  return num1;

} else {
 return num2;
}
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


Excercise Recursion
function isEven(number) {
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

Excercise countBs

function countBs(string) {
  var counter = 0;
  for(var i = 0; i < string.length; i++) {
   if(string.charAt(i) === "B") {
     counter = counter + 1;
   }
  }
   return counter;

  }
function countChar(string, chartocount) {
  var counter = 0;
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) === chartocount) {
      counter = counter + 1;

    }
}
  return counter;
}




console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
