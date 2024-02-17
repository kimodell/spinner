const spinner = "| / - \\ |".repeat(2); //create a string with the spin, add a repeat to it!

let delay = 0; //definae a delay variable to count up after the setTimer runs
//loop through the string
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r ${spin}    `); //use object literals to insert the spin into the string after \r returns the cursor back to the beginning
  }, delay); //time it with delay
  //then add 200 ms after the setTimer runs
  delay += 200;
}

/*setTimeout(() => {
  process.stdout.write('\r|   ');  //use /r to move the cursor back to the beginning and replace it with the nest step in the "spinner" to make the line go clockwise
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1900);*/