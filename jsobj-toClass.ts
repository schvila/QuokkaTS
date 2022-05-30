class Person {
  name: string;
  age?: number;
}
/*
 common use of JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.
*/
const obj = JSON.parse('{"name":"John", "age":30}');
let p: Person = obj; //?
let p2: Person = { name: "Stan", age: 57 }; //?
//let p3:IPerson = '{"name":"John", "age":30}' ERR
const sNum = "43.7";
const sPerc = "10";
(+sNum / 100) * +sPerc; //?
Math.PI; //?
let a = (1.2 * 3 * 10) / 10; //?
