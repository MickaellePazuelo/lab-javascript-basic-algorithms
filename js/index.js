// Iteration 1: Names and Input
const hacker1 = 'Micka';
console.log("The driver's name is " + hacker1);

const hacker2 = 'Chenjia';
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
console.log(str.toUpperCase() + ' ');

//3.2 REVERSE LETTER
var str2 = `${hacker2}`;
console.log(str2.split('').reverse('').join(''));

//3.3
if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?
  `);
}
