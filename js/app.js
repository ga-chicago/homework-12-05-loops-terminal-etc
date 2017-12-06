// 1. Interpolation is combining a sting with a variable.
// Concatentation joins two strings together.

// 2. DRY stands for don't repeat yourself. Not repeating code is important
// for clarity when updating and reading code. It also helps programs to run faster
// we have learned loops, functions, re-useable variables to store information as well as objects and arrays.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
// a !== a < d
// a < b < d
console.log(a <= a < d);
console.log(e === 'Kevin');
console.log(48 == '48');

// 3. The first loop is infinite because the condition is set to true and while it is true it will continually execute the code block (console.log)
// The second loop is infinite because runProgram is a constant variable and can never be changed

//4.  I think the code will print A 20 times. The result in the console was mostly the same as I excpected though printed "A" within the same line.

// Section 4: A while loop only runs while a certain condition is true and a for loop will iterate for as many times as specified.
// a for loop is used when a known number of iterations will be used
// a while loop is best used when a minimal number of condition(s) need to be met to enter the loop

for (let i=0; i < 1000; i++) {
    console.log(i);
}
// The first part of the control statement is: the initialzation of the variable
// The second part of the control statement is: the condition.
// The third part of the control statement is: the iteration amount

for (let a = 999; a > 0; a--) {
    console.log(a);
}

for (let b=1; b < 10; b++) {
    console.log("The value of i is: " + b + " of 10");
}

// Section 5: 