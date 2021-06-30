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
var str = `${hacker1}`;
var res = str.toUpperCase() + " ";
console.log(res);

//let hacker1 = "Micka";
//let driver = "";
//for (let i = 0; i < hacker1.length; i++) {
//   return (driver = driver + hacker1[i]);
// }
// console.log(driver);
// console.log(driver.toUpperCase());

console.log (res.split("").join(" "));