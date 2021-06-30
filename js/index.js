// Iteration 1: Names and Input
var hacker1 = 'Micka';
console.log("The driver's name is " + hacker1);

var hacker2 = 'Chenjia';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1 C A P I T A L  & SPACE BTW
var str = `${hacker1}`;
var res = str.toUpperCase() + " ";
console.log(res);

console.log (res.split("").join(" "));

//3.2 REVERSE LETTER
var str2 = `${hacker2}`;
console.log(str2.split("").reverse("").join(""));

//3.3