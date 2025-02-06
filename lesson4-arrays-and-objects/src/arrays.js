const arrString = ['a' ,'b' ,'c' ,'d' ,'e' ];

const arrNumber = [1, 2, 3, 4, 5];

const arrBoolean = [true, true, false, true];

const arrAny = [];

console.log('----------------FILTER-------------------');

const filterOperation = arrString.filter((el) => typeof el === "string");
console.log(filterOperation);

console.log('----------------FIND-------------------');

const findOperation = arrNumber.find((el) => typeof el === 'object');
console.log(findOperation);

console.log('----------------SORT_1-------------------');

const sortOperation = arrBoolean.sort();
console.log(sortOperation);

console.log('----------------SORT_2-------------------');

const sortNumber = arrNumber.sort((a, b) => b - a);
console.log(sortNumber);

console.log('----------------CONCAT-------------------');

const concatOperation = arrString.concat(arrBoolean, arrAny, arrNumber);
console.log(concatOperation);

console.log('----------------INCLUDES_1-------------------');

const includesOperation = arrString.includes('b');
console.log(includesOperation);

console.log('----------------INCLUDES_2-------------------');

const includesOperation2 = arrString.includes('b', 2);
console.log(includesOperation2);

console.log('----------------JOIN-------------------');

const joinOperation = arrNumber.join(' + ');
console.log(joinOperation);

console.log('----------------FOREACH-------------------');

arrNumber.forEach((el) => console.log(el));

console.log('----------------MAP-------------------');

const mapOperation = arrBoolean.map((el) => {
    if (typeof el !== 'symbol') {
        return 'ok';
    }
});
console.log(mapOperation);
