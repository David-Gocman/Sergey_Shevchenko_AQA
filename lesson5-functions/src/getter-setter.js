const user = {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    age: 25,

    address: {
        city: 'Paris',
        street: 'Backer street'
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    get getAddress() {
        return `${this.address.city}, ${this.address.street}`;
    },

    get getAge() {
        return this.age;
    },

    set setAge(newAge) {
        this.age = newAge;
    },

    set setCity(newCity) {
        this.address.city = newCity;
    },

    updateInfo(newAge, newCity) {
        this.setAge = newAge;
        this.setCity = newCity;
        console.log('Updated info');
        console.log('New Name: ' + this.fullName);
        console.log(`New Age: ${this.getAge}`);
        console.log(`New Address: ${this.getAddress}`);
    }
};

console.log(user.fullName);
console.log(user.getAge);
console.log(user.getAddress);

console.log('____________________________________');

user.updateInfo(33, 'London');
