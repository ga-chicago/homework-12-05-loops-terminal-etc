// concatenation 
let variable1 = "blabla" + "bla";
console.log(variable1);
// interpolation
let variable2 = ("bla"+ variable1);
console.log(variable2);
// dry ---> dont repeat yourself it makes your code slow and hard to edit
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(a + b === c);
  console.log(a * a === d);
  console.log(e === 'Kevin');
  console.log(48 == '48');

// while (true) {
// 	console.log('Do not run this loop');
// } infinate

// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// } 
//  infinate kinda buecause you cannot change a constant varible 


// will run to 20 letters
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

// console.log(letters);

// for (let i=0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }

// The first part of the control statement is: let i=0;
// The second part of the control statement is: i < 100;
// The third part of the control statement is: i++

for (let i=999; i > 0; i--) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}

for (let i=1; i <= 10; i++){
		console.log("The value of i is: " + i + " of 10");
}




















