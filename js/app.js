//Section 1

	//1 Interpolation is when an expression containing a variable and a string is joined upon evaluation
		//example: 
		//let myName = "daniel"
		//console.log("Hello, my name is "+myName);

		//Concatenation is when an expression joins strings together upon evaluation
		//example:
		//console.log("Hello, my name is "+"daniel");

	//2 DRY Code stands for Don't Repeat Yourself. Redundancy in code is confusing and cumbersome, both in terms of performance and readability. Declaring & reusing variables and loops are both examples of tools to be utilized to write DRY code

//Section 2

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

	//a < b
	//c > d
	//'Name' === 'Name'
	//a < b < c
	//a < b < c
	//(a === a) < d
	//e === 'Kevin'
	//48 == '48'

//Section 3

	//1 Yes, it's an infinite loop because While loops will continue to evaluate until the set condition is no longer true, and the condition is just... true

	//2 Yes, because while the variable is redeclared as false in the block of code the loop is running, it is initially set as a constant, which means you cannot redeclare it's value

	//3 The console will log 'AAAAAAAAAAAAAAAAAAAAA' because console.log is after the loop, which means it will only be run once the loop has finished, the loop will add one 'A' for each loop, and the loop will run 20 times

	// let letters = 'A';
	// let i = 0;

	// while (i < 20) {
	// 	letters += "A";
	// 	i++;
	// }

	// console.log(letters);

//Section 4

	//A While loop will continue to evaluate as long as it's expression evaluates to truthy; a For loop has more flexibility in how you intend to close the loop

	//For loop 
	//	for (i = 0; i <= 999; i++) { console.log(i); }

	//Control statements:
	//The first part of the control statement is the variable declaration
	//The second part of the control statement is the condition for the loop to run
	//The third part of the control statement is the advancement of the declared variable 

	//Reverse For loop
	//	for (i = 999; i >= 0; i--) { console.log(i); }

	//Interpolation For loop
	// for (i = 1; i <= 10; i++) { console.log("The value of i is: "+i+" of 10"); }

//Section 5

// mkdir galaxy_far_far_away
// cd galaxy_far_far_away
// mkdir death_star
// cd death_star
// touch darth_vader.txt princess_leia.txt stormtrooper.txt
// cd ..
// mkdir tatooine
// cd tatooine
// touch luke.txt ben_kenobi.txt
// mkdir millenium_falcon
// cd millenium_falcon
// touch han_solo.txt chewbacca.txt
// cd ..
// mv ben_kenobi.txt obi_wan.txt
// cd ../death_star
// cp stormtrooper.txt ../tatooine/
// cd ../tatooine
// mv obi_wan.txt millenium_falcon
// mv luke.txt millenium_falcon
// mv millenium_falcon ../..
// cd ..
// mv millenium_falcon death_star
// cd death_star
// mv princess_leia.txt millenium_falcon
// rm obi_wan.txt
// cd ..
// mkdir yavin_4
// mv death_star/millenium_falcon yavin_4
// cd yavin_4
// mkdir x_wing
// mv millenium_falcon/princess_leia.txt .
// mv millenium_falcon/luke.txt x_wing
// mv millenium_falcon ..
// mv x_wing ..
// cd ..
// mkdir death_star/tie_fighter1 death_star/tie_fighter2 death_star/tie_fighter3
// mv death_star/darth_vader.txt death_star/tie_fighter1
// cp death_star/stormtrooper.txt death_star/tie_fighter2
// cp death_star/stormtrooper.txt death_star/tie_fighter3
// cd death_star
// mv tie_fighter1/ ..
// mv tie_fighter2/ ..
// mv tie_fighter3/ ..
// cd ..
// rm -r tie_fighter2
// rm -r tie_fighter3
// touch x_wing/the_force.txt
// rm -r death_star
// mv x_wing yavin_4
// mv millenium_falcon yavin_4



