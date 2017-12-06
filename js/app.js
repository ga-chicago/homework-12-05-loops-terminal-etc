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
/*
Part 1:
mkdir homework_part_2
cd homework_part_2/
mkdir death_star
touch darth_vader.txt princess_leia.txt storm_trooper.txt
mkdir galaxy_far_far_away
 cd galaxy_far_far_away/
 mkdir tatooine
 cd tatooine/
 touch luke.txt ben_kenobi.txt
 mv darth_vader.txt death_star/         fixed mistake forgot to cd into folder
  mv princess_leia.txt death_star/       fixed mistake forgot to cd into folder
  cd galaxy_far_far_away/tatooine/
  mkdir millenium_falcon
  touch han_solo.txt chewbaca.txt
   mv han_solo.txt millenium_fallcon/           fixed mistake forgot to cd into folder
    mv chewbaca.txt millenium_fallcon/          fixed mistake forgot to cd into folder

Part 2:
mv ben_kenobi.txt obi_wan.txt

Part 2:
mv storm_trooper.txt death_star/       //messed up fixed it
cd death_star/
cp storm_trooper.txt ../galaxy_far_far_away/tatooine/

Part 3:
cd galaxy_far_far_away/tatooine/
cd tatooine/
mv luke.txt millenium_falcon/
mv obi_wan.txt millenium_falcon/
cd ../../
mv galaxy_far_far_away/tatooine/millenium_fallcon/ galaxy_far_far_away/
mv galaxy_far_far_away/millenium_fallcon/ death_star/
cd death_star/
mv princess_leia.txt millenium_fallcon/
cd millenium_fallcon/

Part 4:
rm obi_wan.txt

Part 5:
cd ../../
 cd galaxy_far_far_away/
 mkdir yavin_4
  mv death_star/millenium_fallcon/ galaxy_far_far_away/yavin_4/
  cd galaxy_far_far_away/yavin_4/
  mkdir x_wing
   cd millenium_fallcon/
   mv princess_leia.txt ../../   // mess up // read it as move it into galaxy..
   cd ../../
   mv galaxy_far_far_away/yavin_4/millenium_fallcon/luke.txt ../x-wing       // accidently deleted
    mv galaxy_far_far_away/yavin_4/millenium_fallcon/ ../../                 //same again
cd death_star/
mv darth_vader.txt tie_fighter_1
cp storm_trooper.txt tie_fighter_2
cp storm_trooper.txt tie_fighter_3
mv tie_fighter_1 ../galaxy_far_far_away/
mv tie_fighter_2 ../galaxy_far_far_away/
mv tie_fighter_3 ../galaxy_far_far_away/

Part 6:
rm -r tie_fighter_2
rm -r tie_fighter_3

Part 7:
cd yavin_4/x_wing/
touch the_force.txt
cd ../../../
rm -r death_star/






*/