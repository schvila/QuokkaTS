class Address{
    city: 'Zlin';
    street = 'Bartoska';
};
class Person{
    name = 'Stan';
    age = 23;
    address:Address;
}
const p = new Person();
p.address = new Address();

const {address} = p;
address//?
const hobbies = ['Sports', 'Cooking', 'skiing'];
const [hobby1, hobby2] = hobbies;
hobby1
hobby2