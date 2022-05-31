class Address{
    city = 'Zlin';
    street = 'Bartoska';
};
class Person{
    name = 'Stan';
    age = 23;
    address:Address;
    greet (){
        console.log('Ahoj, jmenuji se ' + this.name);
    }
}
const p = new Person();
p.address = new Address();
p.greet();

const printName = ({name}) => {
    console.log(name);
}
printName(p);

const {address} = p;
//address//?


const myhobbies = ['Sports', 'Cooking', 'skiing'];
const [hobby1, hobby2] = myhobbies;
hobby1
hobby2