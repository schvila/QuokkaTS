// decorators funguji jen pri deklaraci to je ne pri vytvoreni instance

function Logger(logString: string) {
  return function(constructor: Function) { //returns decorator
  console.log(logString);
  console.log(constructor);
  };
}


// function Logger(constructor: Function) {
//   console.log('Logging in decorator.');
//   console.log(constructor);
// }
// @Logger
@Logger('pass param.')
class PersonDec {
  name = 'Standa';
  constructor() {
    console.log('Creating person Standa...');
  }
};
// const pd = new PersonDec();
// console.log(pd);


//----
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);

}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {  console.log('Accessor decorator');
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {  console.log('Accessor decorator');
  console.log('Param decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  @Log2
  set Price(val: number) {
    if(val > 0) {
      this._price - val;
    }
    else {
      throw new Error('Invalid price, shoukd be greater then 0');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price *(1 + tax);
  }
}