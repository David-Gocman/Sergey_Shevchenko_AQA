const a = 3;
let b = 5;
const c = '5';
console.log(a > b, a < b, a < c, b < c);

console.log(a == b, a === b);

console.log(b == c, b === c);

console.log(a <= c, b >= c);

console.log(a != b, b != c);

console.log(a !== b, b !== c);

console.log('____________________');

const b1 = true;
const b2 = 'true';
console.log(b1 == b2);

const b3 = false;
console.log(b1 && b3);
console.log(b1 || b3);
console.log(!b1);
console.log(!!a);

console.log('____________________');

const i = NaN;
const j = 7;
const k = null;
const z = i ?? j;
const y = j ?? k;
console.log(z, y);
