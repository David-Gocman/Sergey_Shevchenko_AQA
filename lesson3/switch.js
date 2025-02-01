const a1 = 2;
const a2 = 4;
let c = a2 % a1;
const b1 = true;
const b2 = false;


//if (c != 0) {
//    console.log('odd');
//} else {
//    console.log('even');
//}

switch (c) {
    case (c > 0): {
        console.log('even');
        break; 
    }
    case (c < 0): {
        console.log ('WTF???');
        break;
    }
    default: {
        console.log('odd');
    }
}

console.log ('--------------------------------------');

//if (a1 > a2) {
//    console.log ('more');
//} else if (a1 == a2) {
//    console.log ('equal');
//} else {
//    console.log ('less');
//}

switch (a1) {
    case (a1 > a2): {
        console.log ('more');
        break;
    }
    case (a1 == a2): {
        console.log ("equal");
        break;
    }
    default: {
        console.log ('less');
        break;
    }
}

console.log ('--------------------------------------');

//if (b1 && b2) {
//    console.log ('if 1 false -> all false');
//} else if (b1 || b2) {
//    console.log ('if 1 true -> all true');
//} else {
//    console.log ('end of circle');
//}

switch (b1) {
    case (b1 && b2): {
        console.log('if 1 false -> all false');
        break;
    }
    case (b1 || b2): {
        console.log('if 1 true -> all true');
        break;
    }
    default: {
        console.log ('end of circle');
    }
}