//==== 

//==== working with Objects, Props & Methods =======================
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
person.greet();

const hobbies = ['Lyzovani', 'Cyklistika'];
hobbies.push('Programovani'); // const ale reference type.

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);


//==== basic vars and arrow func.=======================
const user = 'Peter';
let age = 58;

age = 62;
// function userInfo(userName, userAge) {
//     return 'Name ' + userName + ' age is ' +userAge;
// }

const userInfo =  (userName, userAge) => {
    return 'Name ' + userName + ' age is ' +userAge;
}
const add = (a, b) => a+b;

console.log(userInfo(user, age));

console.log(add(4,6));
