//process.stdout.write('hello from spinner1.js... \rheyyy\n'); \r moves the cursor back to the beginning and replaces with 'heyyy'

setTimeout(() => {
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
}, 1900);