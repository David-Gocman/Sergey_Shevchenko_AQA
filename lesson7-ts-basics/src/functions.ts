const arrNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMax: string[] = ['m ', 'a ', 'x '];

function sumArray<X extends number | string>(arr: X[]): void {
    let sum: X extends number ? number : string = (typeof arr[0] === 'number' ? 0 : '')as any;

    for (const item of arr) {
        sum += item as any;
    }

    console.log(sum);
}

console.log('--------------Sum_Of_Numbers----------------');
sumArray(arrNumber);

console.log('--------------Sum_Of_Symbols----------------');
sumArray(arrMax);
