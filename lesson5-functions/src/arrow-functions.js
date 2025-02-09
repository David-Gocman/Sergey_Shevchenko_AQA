const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMax = ['m ', 'a ', 'x '];
let sum;

const sumArray = function (arr) {
    if (typeof arr[0] === 'number') {
        sum = (arr.reduce((a, b) => a + b, 0));
    } else {
        sum = (arr.reduce((a, b) => a + b, ''));
    };
    console.log(sum);
};

console.log('--------------Sum_Of_Numbers----------------');
sumArray(arrNumber);

console.log('--------------Sum_Of_Symbols----------------');
sumArray(arrMax);

/* Если закомментировать верх и раскомментировать низ - при сложении букв будет получаться "0 м а х" */

// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrMax = ['m ', 'a ', 'x '];

// const sumArray = function (arr) {
//     const sum = (arr.reduce((a, b) => a + b, 0));
//     console.log(sum);
// };

// console.log('--------------Sum_Of_Numbers----------------');
// sumArray(arrNumber);

// console.log('--------------Sum_Of_Symbols----------------');
// sumArray(arrMax);
