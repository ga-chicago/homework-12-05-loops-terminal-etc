// ---------------------------------------------- Section 1 ----------------------------------------------

// Concatenation is the merging of two strings into one. 
// console.log("The cat is" + " climbing the tree!");

// Interpolation is the introduction of a variable into a string. 
// let pet = "cat"; 
// console.log("The " + pet + " is climbing the tree!");

// DRY stands for don't repeat yourself. We should pay attention to this because it is a waste of time and memory to create the same code over and over. 
// It also makes it harder to scale your program later on. We have learned how loops, functions, and classes can help with this.

// ---------------------------------------------- Section 2 ----------------------------------------------

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// a != b;
// c != d;
// 'Name' === 'Name';
// a + b === c;
// a * a === d;
// e === 'Kevin';
// 48 == '48';

// ---------------------------------------------- Section 3 ----------------------------------------------

// It is an infinite loop because it has no stopping point. The condition is set permanently on true.

// This loop is also an infinite, that is because a const variable was used, so it doesn't let the loop apply the new value of false.

// It gave me the expected result

// ---------------------------------------------- Section 4 ----------------------------------------------

// A for loop and while loop are similar in the sense that they both run untill a certain condition is met. 
// They differ in the sense that a for loop is usually needed when you know how many loops you need to run.
// While a while loop makes more sense when you don't know the number of loops you will need to run.

// for (let i = 0; i <= 999; i++) {
// 	console.log(i);
// }

// The first component sets the counter.
// The second component sets the number of iterations.
// The last component updates the counter.

// for (let i = 999; i >= 0; i--) {
// 	console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
// 	console.log("The value of i is: " + i + " of 10");
// };

// ---------------------------------------------- Section 5 ----------------------------------------------

// mkdir homework_part_2
// cd homework_part_2

// mkdir death_star
// touch death_star/darth_vader.txt death_star/princess_leia.txt death_star/storm_trooper.txt

// mkdir galaxy_far_far_away
// cd galaxy_far_far_away
// mkdir tatooine; touch luke.txt ben_kenobi.txt
// cd tatooine
// mkdir millenium_falcon; touch millenium_falcon/han_solo.txt millenium_falcon/chewbaca.txt

// cd ..
// mv ben_kenobi.txt obi_wan.txt
// cd ../death_star
// cp storm_trooper.txt ../galaxy_far_far_away


// mv ../galaxy_far_far_away/luke.txt ../galaxy_far_far_away/tatooine/millenium_falcon
// mv ../galaxy_far_far_away/obi_wan.txt ../galaxy_far_far_away/tatooine/millenium_falcon

// mv ../galaxy_far_far_away/tatooine/millenium_falcon ../galaxy_far_far_away

// mv ../galaxy_far_far_away/millenium_falcon .

// mv princess_leia.txt millenium_falcon

// rm millenium_falcon/obi_wan.txt

// cd ../galaxy_far_far_away 
// mkdir yavin_4

// mv ../death_star/millenium_falcon yavin_4

// cd yavin_4
// mkdir x_wing

// mv millenium_falcon/princess_leia.txt .
// mv millenium_falcon/luke.txt x_wing

// cd ../../
// mv galaxy_far_far_away/yavin_4/millenium_falcon galaxy_far_far_away
// mv galaxy_far_far_away/yavin_4/x_wing galaxy_far_far_away

// mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3

// mv death_star/darth_vader.txt death_star/tie_fighter_1
// cp death_star/storm_trooper.txt death_star/tie_fighter_3
// cp death_star/storm_trooper.txt deamv death_star/tie_fighter_3 galaxy_far_far_away
// th_star/tie_fighter_2

// mv death_star/tie_fighter_1 galaxy_far_far_away
// mv death_star/tie_fighter_2 galaxy_far_far_away

// rm -r galaxy_far_far_away/tie_fighter_2
// rm -r galaxy_far_far_away/tie_fighter_3

// touch galaxy_far_far_away/x_wing/the_force.txt

// rm -r death_star

// mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/yavin_4
// mv galaxy_far_far_away/x_wing galaxy_far_far_away/yavin_4


