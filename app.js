//For loop structure
//for (Initialization; condition; iteration) {

//}
//? Ex. look below vvv

for (let i = 0; i < 10; i++) {
    console.log(`I am currently ${i} and I am still under 10`)
};

//I'm a tacher and I want to get a mean of the total grades of the class

let grades = [78, 89, 35, 90, 76];
let sum = 0;
console.log(grades.length)


for(let i = 0; i < grades.length; i++)  {
    console.log(grades[i])
    sum += grades[i];
};

console.log(sum);
console.log(sum / grades.length);

const favFruits = ["pineapple", "orange", "strawberry", "grapes"]

let fruit = "orange"
for(let i = 0; i < favFruits.length; i++) {
    if (fruit == favFruits[i]) {
        console.log("I'm in da basket!");
        break;
    } else {
        console.log("Not in the string");
    }
};

for (let i = 0; i < favFruits.length; i++) {

    if (favFruits[i] == "orange") {
        favFruits[i] = favFruits[i].toUpperCase()
        console.log(favFruits);
    } else {
        console.log("YOU'RE NOT MY ORANGE")
    }

    // favFruits[i] = favFruits[i].toUpperCase();
    // console.log(favFruits);

};

for (let i = 0; i < 5; i++) {
    //We can utilize the variable i in for loop arguments
    // i number is changing each loop because of the interation argument argument (i++)
    console.log("Monday is a Amazing day to start the week! " + i)
};

let seasons = ["Fall", "Winter", "Summer", "Spring"];
let favSeason = "Fall";
//Display all seasons on the websites console
for (let i = 0; i < seasons.length; i++) {
    //we call array  strings by variables index.
    //ex. seasons[1], seasons[2]...
    console.log(seasons[i]);
};

for (let i = 0; i < seasons.length; i++) {
    if (favSeason == seasons[i]) {
        console.log("That's my favorite season!")
        break;
    } else {
        console.log("Skip")
    };
};

//FOR
for (let i = 0; i < 5; i++) {
    console.log(`(for) i = ${i}`);
}

//WHILE 
let i = 0;
while (i < 5) {
    console.log(`(while) i = ${i}`);
    i++;
};
// debugger
// //DO WHILE
// let j = 0;
// do {
//     console.log(`(do while) j = ${i}`);
//     j++;
// } while (j < 5);

// let input;

// do {
//     input = prompt("enter password: ");
// } while (input != "123");
// console.log("access granted");

//FOR EACH LOOPS
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((x) => {
    if (x === 3) {
        console.log(x);
    }
});


//NESTED LOOPS
//Global and BLOCKED scope

//Global = This variable is accessible from any point in this file.
let global = "Hello!";
debugger
//OUTER LOOP RUNS 10 TIMES
for(let i = 1; i <= 10; i++) {
    let myName = "Chris Jenkins";
    console.log(myName);
    //INNER LOOP IS GONNA RUN 50 TIMES
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${j} = ${i * j}`)
    }
}

let firstWord = "Hello";

{   //THIS IS A BLOCKED SCOPED VARIABLE
    let secondWord = "World";
    console.log(firstWord + secondWord);
}

console.log(firstWord + secondWord);