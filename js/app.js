// 1. Concatenation uses 2 stings or intergers where interpolation combines strings/intergers and variables.
		// Interpolation ex. 
		// let num = 1
		// console.log("the number 2 is larger than " + num);

		// Concatenation ex.
		// let first = "Anthony"
		// let last = "Lower"
		// console.log(first + last);

// 2. DRY stands for "Don't repeat yourself". You should always use as little code as is necessary because it make the program run faster and makes it easier for someone else to read. Some tools we use to help us write dry code are loops and classes

// Section 2 Boolean Expressions

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(a < b < c);
// console.log(a <= a < d);
// console.log(e === 'Kevin');
// console.log(48 == '48');

// Section 3 while loops

// 1. Yes, because as long as the expression inside of the () is true it will run the loop, and having "true" inside of it will work the same

// 2. Yes, even though you are changing runProgram to false runProgram is a constant variable to it cannot be changed.

// 3. it will print a concatenated string of 20 "A"'s - That is what it did

// let letters = "A";
// let i = 0;

// while(i < 20){
// 	letters += "A";
// 	i++;
// }

// console.log(letters);

// Section 3 For loops

// 1. In a for loop you declare the variable, condition, and expression in the expression instead of doing it before and inside.

// For loop 1

// for(let i = 0; i < 1000; i++){
// 	console.log(i);
// }

// for loop control statement
	// The first part is called initialization
	// The second part is called condition
	// The third part is called final-expression

// For loop in reverse

// for(let i = 999; i >= 0; i--){
// 	console.log(i);
// }

// More counting

// for(let i = 1; i <= 10; i++){
// 	console.log("the value of i is: " + i + " of 10");
// };





// 2 Anthonys-MacBook-Air:12_05_17 anthonylower$ mkdir homework_part_2

// 3 Anthonys-MacBook-Air:homework_part_2 anthonylower$ mkdir death_star
// Anthonys-MacBook-Air:homework_part_2 anthonylower$ touch death_star/darth_vader.txt death_star/princess_leia.txt death_star/storm_trooper.txt

// 4 Anthonys-MacBook-Air:homework_part_2 anthonylower$ mkdir galaxy_far_far_away
// Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ mkdir tatooine
// Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ touch tatooine/luke.txt tatooine/ben_kenobi.txt

// 5 Anthonys-MacBook-Air:tatooine anthonylower$ mkdir millenium_falcon
// Anthonys-MacBook-Air:tatooine anthonylower$ touch millenium_falcon/han_solo.txt millenium_falcon/chewbacca.txt

// 1 Anthonys-MacBook-Air:tatooine anthonylower$ mv ben_kenobi.txt obi_wan.txt

// 2 Anthonys-MacBook-Air:death_star anthonylower$ cp storm_trooper.txt ../galaxy_far_far_away/tatooine/

// 3 Anthonys-MacBook-Air:tatooine anthonylower$ mv luke.txt millenium_falcon/
// Anthonys-MacBook-Air:tatooine anthonylower$ mv obi_wan.txt millenium_falcon/

// 4 Anthonys-MacBook-Air:tatooine anthonylower$ mv millenium_falcon/ ..

// 5 Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ mv millenium_falcon/ ../death_star/

// 6 Anthonys-MacBook-Air:death_star anthonylower$ mv princess_leia millenium_falcon/

// 7 Anthonys-MacBook-Air:millenium_falcon anthonylower$ rm obi_wan.txt

// 8 Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ mkdir yavin_4

// 9 Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ mv millenium_falcon/ ../galaxy_far_far_away/yavin_4/

// 10 Anthonys-MacBook-Air:yavin_4 anthonylower$ mkdir x_wing

// 11 Anthonys-MacBook-Air:millenium_falcon anthonylower$ mv princess_leia.txt ../
// Anthonys-MacBook-Air:millenium_falcon anthonylower$ mv luke.txt ../x_wing/

// 12 Anthonys-MacBook-Air:yavin_4 anthonylower$ mv x_wing/ ../
// Anthonys-MacBook-Air:yavin_4 anthonylower$ mv millenium_falcon/ ../

// 13 Anthonys-MacBook-Air:death_star anthonylower$ mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3

// 14 Anthonys-MacBook-Air:death_star anthonylower$ mv darth_vader.txt tie_fighter_1

// 15 Anthonys-MacBook-Air:death_star anthonylower$ cp storm_trooper.txt tie_fighter_2
// Anthonys-MacBook-Air:death_star anthonylower$ cp storm_trooper.txt tie_fighter_3

// 16 Anthonys-MacBook-Air:death_star anthonylower$ mv tie_fighter_* ../

// 6 Anthonys-MacBook-Air:homework_part_2 anthonylower$ rm -r tie_fighter_2
// Anthonys-MacBook-Air:homework_part_2 anthonylower$ rm -r tie_fighter_3

// 7 Anthonys-MacBook-Air:x_wing anthonylower$ touch the_force.txt

// 8 Anthonys-MacBook-Air:homework_part_2 anthonylower$ rm -r death_star/

// 9 Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ mv x_wing/ yavin_4/
// Anthonys-MacBook-Air:galaxy_far_far_away anthonylower$ mv millenium_falcon/ yavin_4/