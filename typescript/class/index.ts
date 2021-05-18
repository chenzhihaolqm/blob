class Animal{
  name: string;
  constructor(name){
    this.name = name;
  }
  run(){
    return `${this.name} is running`
  }
}

class Dog extends Animal{
  bark(){
    return `${name} is barking`  // 编译ok， 运行 error
  }
}


class Cat extends Animal{
  age: string;
  constructor(name, age){
    super(name);
    this.age = age;
  }
  eat(food){
    return `${this.name} is eating ${food}`
  }
}

let jack = new Animal('jack');
console.log(jack.run());

let dog = new Dog('wang cai');
console.log(dog.run());
console.log(dog.bark());


let cat = new Cat('tom', 1);
console.log(cat.eat('fish'));

