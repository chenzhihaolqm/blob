var hello = function (name) {
    console.log("hello " + name);
};
hello('Jack');
// hello(123); // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
hello();
