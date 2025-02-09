const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMax = ['m ', 'a ', 'x '];

function sumArray (arr) {
    let sum = typeof arr[0] === 'number' ? 0 : '' ;
    for (let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    console.log(sum);
}

console.log('--------------Sum_Of_Numbers----------------');
sumArray(arrNumber);

console.log('--------------Sum_Of_Symbols----------------');
sumArray(arrMax);

/* Если закомментировать верх и раскомментировать низ - при сложении букв будет получаться "0 м а х" */

// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrMax = ['m ', 'a ', 'x '];

// function sumArray (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++ ) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }

// console.log('--------------Sum_Of_Numbers----------------');
// sumArray(arrNumber);

// console.log('--------------Sum_Of_Symbols----------------');
// sumArray(arrMax);
