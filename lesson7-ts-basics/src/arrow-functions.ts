const arrNumber1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMax1: string[] = ['m ', 'a ', 'x '];
let sum: string | number;

const sumArray1 = function (arr: any): void {
    if (typeof arr[0] === 'number') {
        sum = (arr.reduce((a: number, b: string) => a + b, 0));
    } else {
        sum = (arr.reduce((a: string, b: number) => a + b, ''));
    };
    console.log(sum);
};

console.log('--------------Sum_Of_Numbers----------------');
sumArray1(arrNumber1);

console.log('--------------Sum_Of_Symbols----------------');
sumArray1(arrMax1);
