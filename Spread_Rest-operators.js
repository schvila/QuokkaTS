// Spread 
const person  = {
  name: 'Standa',
  age: 58,
//     greet: () => {
//         console.log('Hi, I am ' + this.name + ' ' +this.age + ' old.');
//   }
  greet() {
      console.log('Hi, I am ' + this.name + ' ' +this.age + ' old.');
}
};
const copiedPerson = {...person}; //?

const hobbies = ['Lyzovani', 'Cyklistika'];
//const copiedArray = hobbies.slice();
const copiedArray = [...hobbies]; //spread
hobbies.push('Programovani'); // const ale reference type.
console.log(copiedArray);
console.log(hobbies);

//REST je opak
const toArray = (...args) => args;

console.log(toArray(1,2,3,4,5,))