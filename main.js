// // work1
// function multiplyValues(obj, n) {
//   const res = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       res[key] = obj[key] * n;
//     }
//   }
//   return res;
// }

// const n = 3;
// const obj = { a: 2, b: 3, c: 4 };
// const res = multiplyValues(obj, n);
// console.log(res);
// //   work2
// function countWordsWithA(str) {
//   const words = str.split(" ");
//   let count = 0;

//   for (let word of words) {
//     if (word.includes("a") || word.includes("A")) {
//       count++;
//     }
//   }

//   return count;
// }

// const str = "Anvar va Akmal bugun darsga kelishdi";
// const result = countWordsWithA(str);
// console.log(result);
// //   work3
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false,
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O'tkir Hoshimov",
//     read: true,
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true,
//   },
// ];

// function displayBookStatus(books) {
//   books.forEach((book, index) => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(
//       `${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`
//     );
//   });
// }

// displayBookStatus(books);
// // work4
// function createLengthObject(arr) {
//   const result = {};
//   arr.forEach((item) => {
//     result[item] = item.length;
//   });
//   return result;
// }

// const input = ["text", "world", "laptop"];
// const output = createLengthObject(input);
// console.log(output);
// // work5
// function countOccurrences(arr) {
//   const counts = {};
//   arr.forEach((item) => {
//     counts[item] = (counts[item] || 0) + 1;
//   });
//   return counts;
// }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const outputs = countOccurrences(animals);
// console.log(outputs);
// //   work6
// function ageDifference(people) {
//   people.sort((a, b) => a.age - b.age);

//   const youngest = people[0].age;
//   const oldest = people[people.length - 1].age;

//   return oldest - youngest;
// }

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const outputs = ageDifference(people);
// console.log(outputs);
// work7
// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(item => !!item);
//     const falsy = arr.filter(item => !item);
//     return { truthy, falsy };
//   }

//   const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
//   const output = getTruthyFalsy(input);
//   console.log(output);

// work8
// function minMaxWord(sentence) {
//     const words = sentence.split(' ');

//     let minWord = words[0];
//     let maxWord = words[0];

//     words.forEach(word => {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     });

//     return { minWord, maxWord };
//   }

//   const input = "Men dasturlash kursida o'qiyman";
//   const output = minMaxWord(input);
//   console.log(output);

// work9
// const jumbledString = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";

// const part1 = jumbledString.slice(20, 25);
// const part2 = jumbledString.slice(2, 8);
// const part3 = jumbledString.slice(35, 37);
// const part4 = jumbledString.slice(49, 52);
// const part5 = jumbledString.slice(55, 59);

// const result = `${part1} ${part2} ${part3} ${part4} ${part5}`;

// const formattedResult = result[0] + result.slice(1).toLowerCase();

// console.log(formattedResult);
// work10
// var searchMatrix = function(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === target) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };

//   let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
//   let target = 3;
//   console.log(searchMatrix(matrix, target));

//   target = 13;
//   console.log(searchMatrix(matrix, target));
//   work11
// function rotateMatrix(matrix) {
//   const n = matrix.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     matrix[i].reverse();
//   }

//   return matrix;
// }

// let matrix1 = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];

// let matrix2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log("Original Matrix 1:");
// matrix1.forEach((row) => console.log(row));

// console.log("\nRotated Matrix 1:");
// let rotatedMatrix1 = rotateMatrix(matrix1);
// rotatedMatrix1.forEach((row) => console.log(row));

// console.log("\nOriginal Matrix 2:");
// matrix2.forEach((row) => console.log(row));

// console.log("\nRotated Matrix 2:");
// let rotatedMatrix2 = rotateMatrix(matrix2);
// rotatedMatrix2.forEach((row) => console.log(row));
// work12
// let str="Men uning sinfdoshi emasman"
// function findLastWordLength(str) {
//     str = str.trim();
    
//     const lastSpaceIndex = str.lastIndexOf(' ');

//     const lastWordLength = str.length - lastSpaceIndex - 1;

//     return lastWordLength;
// }

// let text = "Bu bir nechta so'zli matn"; 
// let lengthOfLastWord = findLastWordLength(text);

// console.log(`Oxirgi so'zning uzunligi: ${lengthOfLastWord}`);
// work13
// function objectToArray(obj) {
//     return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// }

// let inputObj = {a: 2, b: 5, c: 7};
// let outputArr = objectToArray(inputObj);

// console.log(outputArr); 
// work16
// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

// let filteredProducts = products.filter(product => product.id !== 4);

// console.log(filteredProducts);
// work15
// function moveDuplicates(arr) {
//     let seen = {};
//     let unique = [];
    
//     for (let item of arr) {
//         if (!seen[item]) {
//             seen[item] = true;
//             unique.push(item);
//         }
//     }
    
//     return unique;
// }

// let array = [1, 2, 3, 1, 4, 2, 5];
// let result = moveDuplicates(array);
// console.log(result); 


// work17
// function findAgeDifference(people) {
//     people.sort((a, b) => a.age - b.age);
    
//     let youngest = people[0].age;
//     let oldest = people[people.length - 1].age;
//     let ageDifference = oldest - youngest;
    
//     return ageDifference;
// }

// let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// let difference = findAgeDifference(people);
// console.log(difference); 