// Task 1

// let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];

// let teamA = [];
// let teamH = [];

// harryPotterTeam.forEach((item) => {
//     if (item.includes('a')) {
//         teamA.push(item);
//     }
//     if (item.includes('H')) {
//         teamH.push(item);
//     }
// });

// console.log(teamA);
// console.log(teamH);


// Task 2

// let arr = [6, 3, "ten", 1, true, "4"];
// let sum = 0;
// let multiplication = 1;

// arr.forEach((item) => {
//     if (typeof item === "number") {
//         sum += item;
//         multiplication *= item;
//     }
// });

// let result = [sum, multiplication];

// console.log(result);

// Task 3

// let numArr = [1, 3, 5, 7, 9, 11];

// function createNewArray(arr) {
//     let newArray = [];
//     arr.forEach((item) => {
//         newArray.push(Math.pow(item, 2));

//     });
//     return newArray;
// }

// let result = createNewArray(numArr);
// console.log(result);

// Task 4

// let students = [
//     { name: 'Alexey', id: 123, marks: 9 },
//     { name: 'Vitalik', id: 101, marks: 5 },
//     { name: 'Tanya', id: 200, marks: 7 },
//     { name: 'Sasha', id: 115, marks: 10 }
// ];

// let result = students.find(item => item.id === 101);
// console.log(result);

// Task 5

// let javaScriptTypes = ["number", "null", "undefined", "string"];

// javaScriptTypes.splice(4, 0, 'BigInt', 'oject', 'symbol', 'boolean');
// console.log(javaScriptTypes);

// Task 6
// let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

// parfume.splice(parfume.length - 1, 1, 'Jo Malone');
// console.log(parfume);