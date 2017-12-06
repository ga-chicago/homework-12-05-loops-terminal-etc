//Section 1

// Interpolation is when a variable is used to add to a string.
var firstName = "Somers";
var middleName = "Baucum";
var lastName = "Matthews";
str = "My full name is " + firstName + middleName + lastName + ".";
// Concatenation is the use of the plus sign (+) when adding stuff to a string (different strings together with
// or without a variable)
str = "My full name is" + " Somers " + "Baucum" + " Matthews" + ".";

// DRY = Don't repeat yourself. so instead of:
var i = 0;
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
/*
console would read:
1
2
3
4
5
6
7
8
9
10
*/
// we could use a while loop:
var i = 0;
while(i<10)
{
  console.log(i+1);
  i++;
}
// or we could use a for loop
for(var i = 0; i<1; i++)
{
  console.log(i);
}
//This allows us to use smaller and easier to copy and use elsewhere code.
//The computer also performs better with less code.

// Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

 console.log(a < b);
 console.log(c > d);
 console.log('Name' ==='Name');
 console.log(a < b < c);
 console.log(a < a < d);
 console.log(e == 'Kevin');
 console.log(48 == '48');

 //Section 3
/*
 while (true) {
	console.log('Do not run this loop');
}
*/
// The loop above is always true and can never be false. A loop needs to evaluate to false eventually or it will
// run forever.

/*
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
*/
// The above loop will not run because javascript won't let you assign something to a const variable.
// The const variable should also be in all caps...


var letters = "A";
var i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

// The above code will log 20 A's in a row (concatenated, if you really want to say it)

//section 4

//Both kinds of loops precheck a condition. You can't declare a variable in the parentheses in a
// while loop. In a for loop, you can.

//for loop 1

for(var i = 0; i <= 999; i++)
{
  console.log(i);
}

// for (initialization; condition; increase) {}
// THE FIRST PART OF THE CONTROL STATEMENT IS initialization.
// THE SECOND PART IS condition.
// THE THIRD PART IS increase.

// If you're refering to the loop below in the above questions then:

// THE FIRST PART THE CONTROL STATEMENT IS i=0.
// THE SECOND PART THE CONTROL STATEMENT IS i<100.
// THE THIRD PART THE CONTROL STATEMENT IS i++.

// scurf are the flakes on dry skin... why even use that as a metaphor?
/*
for (var i=0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
*/


for(i=999; i>0; i--)
{
  console.log(i);
}

for(i=1; i<=10; i++)
{
  console.log("The value of i is: " + i + " of " + "10" )
}
/*
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
*/
