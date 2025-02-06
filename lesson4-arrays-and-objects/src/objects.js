const obj = {
    car: 'Ford',
    model: 'Mustang',
    props: {
        color: 'black',
        year: '1979'
    },
    func: function() {
        console.log("I like my " + this.car + " " + this.model);
    }
};

console.log(obj);
console.log('-------------------------');
console.log(Object.keys(obj));
console.log('-------------------------');
console.log(Object.values(obj));
console.log('-------------------------');
console.log(Object.values(obj.props));
console.log('-------------------------');
console.log(Object.entries(obj));
console.log('-------------------------');
obj.func();
