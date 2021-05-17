const hello = function(name: string){
  console.log(`hello ${name}`)
}
hello('Jack');
hello(123); // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
hello(); // error TS2554: Expected 1 arguments, but got 0.


const hi = function(name: string|number){
  console.log(`hi ${name}`)
}

hi(123)  // ok
