// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrMax = ['m ', 'a ', 'x '];
// let sum: string | number;

// function sumArray( arr: number[] | string[]);

// <X extends number | string>(arr: X[]): void {
//     let sum: X extends number ? number : string = (typeof arr[0] === 'number' ? 0 : '')as any;

//     for (const item of arr) {
//         sum += item as any;
//     }

//     console.log(sum);
// }

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMax = ['m ', 'a ', 'x '];
export let sum: number | string;

function sumArray(arr: string[] | number[]): void {
    sum = typeof arr[0] === 'number' ? 0 : '' ;

    arr.forEach(function(item) {
        if (typeof sum === 'number' && typeof item === 'number') {
            sum += item;
        } else if (typeof sum === 'string' && typeof item === 'string') {
            sum += item;
        }
    });
    console.log(sum);
}

console.log('--------------Sum_Of_Numbers----------------');
sumArray(arrNumber);

console.log('--------------Sum_Of_Symbols----------------');
sumArray(arrMax);
