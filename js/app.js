//concatenation is where you combine two or more strings using the + operator
//interpolation is when you combine a string and a variable using + operator

// DRY stands for dont repeat yourself. We have learned loops so that we can avoid repeating ourselves

a = 'this is a string';
b = ' being concatenated';
c = a + b;
console.log(c)

d = 'this is a string'
console.log(d + ' ' + 'being interpolated')

//section 2 Boolean expressions
// a != b
// c > d
// 'Name' === 'Name'
// a < b != c
// a <= a < d
// e === 'Kevin'
// 48 == '48'

// Sections 3 While loops
// infinite loop1:
//this is an infinite loop becuase a while loops will only stop running when the condition is false.
//infinite loop2:
// this is an infinite loop because we do not specify a condition to (runProgram). so no matter what runProgram is set to it will run infinitley 

//section 4
// we run a for loop when we know how many times we want to iterate
// we run a while loop when dont know how many times we want to iterate

// the first part of the control statement is let i = 0;
// the second part of the control statement is i < 100;
// the third part of the control statement is i++;

for(let x = 999; x > 0; x--){
  console.log(x)
}


for(let i = 0; i <= 10; i++){
  console.log("The value of i is :" + i + " of 10");
}

//section 5
