const arrNumber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMax1  = ['m ', 'a ', 'x '];
let sum: string | number;

const sumArray1 = function (arr: number[] | string[]): void {
    if (typeof arr[0] === 'number') {
        sum = (arr as number[]).reduce ((a, b) => a + b, 0);
    } else {
        sum = (arr as string[]).reduce ((a, b) => a + b, '');
    };
    console.log(sum);
};

console.log('--------------Sum_Of_Numbers----------------');
sumArray1(arrNumber1);

console.log('--------------Sum_Of_Symbols----------------');
sumArray1(arrMax1);
