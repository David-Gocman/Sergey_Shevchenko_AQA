const a1 = 2;
const a2 = 4;
let c = a2 % a1;
const b1 = true;
const b2 = false;


if (c != 0) {
    console.log('odd');
} else {
    console.log('even');
}

console.log ('--------------------------------------');

if (a1 > a2) {
    console.log ('more');
} else if (a1 == a2) {
    console.log ('equal');
} else {
    console.log ('less');
}

console.log ('--------------------------------------');

if (b1 && b2) {
    console.log ('if 1 false -> all false');
} else if (b1 || b2) {
    console.log ('if 1 true -> all true');
} else {
    console.log ('end of circle');
}
