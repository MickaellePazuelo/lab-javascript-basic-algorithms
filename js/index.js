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

//BONUS 1
let string = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet metus. Donec sit amet velit vitae arcu mattis sollicitudin vel non metus. Fusce odio leo, laoreet a sapien ut, rhoncus mattis nisl. Phasellus aliquam efficitur pellentesque. Cras ut ligula tincidunt, dictum tortor luctus, vehicula erat. Vestibulum pulvinar tincidunt mollis. Nullam aliquet placerat turpis, ut laoreet massa eleifend eu. Pellentesque ex dui, posuere eu congue id, volutpat eu ipsum. Cras vitae sem tristique diam posuere ullamcorper quis porta arcu. Mauris laoreet luctus fringilla.
Etiam laoreet diam sed diam rutrum tempor sed nec mi. Aenean maximus nunc eu nulla tempor, eu ultricies purus luctus. Nam nisi elit, congue vel porttitor eget, mollis sit amet urna. Aliquam auctor lectus nibh, sed maximus elit bibendum ac. Vivamus aliquet lectus at augue tincidunt sollicitudin. Donec ac orci interdum enim hendrerit ultricies id in lectus. Praesent ac nisl lacus. Ut sit amet nisi elementum, tincidunt augue nec, posuere metus. Duis dictum vulputate convallis. Nunc varius erat sed nisl efficitur, id ultrices tellus aliquam.
Suspendisse faucibus ac ligula vitae mattis. Fusce suscipit ligula a velit laoreet sollicitudin et a libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam convallis massa porttitor urna commodo semper. Nam massa enim, accumsan quis purus ut, sollicitudin gravida arcu. Donec iaculis ultricies velit, quis volutpat neque maximus sed. Curabitur ullamcorper sem non diam posuere cursus. Donec suscipit non lectus ac efficitur. Nullam hendrerit porta lacus sit amet volutpat.`

console.log(string.split(' ').length);

console.log(string.search(/et/g));
