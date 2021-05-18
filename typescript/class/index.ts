class Animal{
  protected name: string; // private protected pubuld
  static isAnimal(a:any){
    return a instanceof Animal;
  }
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

let animal = new Animal('jack');
animal.name = 'lily'; // error Property 'name' is protected and only accessible within class 'Animal' and its subclasses.ts(2445)
console.log(animal.run());

let dog = new Dog('wang cai');
console.log(dog.run());
console.log(dog.bark());


let cat = new Cat('tom', 1);
console.log(cat.eat('fish'));
Animal.isAnimal(cat);


// ===========================interface & class ===============================

interface Radio{
  switchRadio(): void
}

interface Battery{
  checkBatteryStatus(): void
}

interface RadioWithBattery extends Radio{
  checkBatteryStatus(): void
}


class Car implements Radio{
  switchRadio(){

  }
}

class CellPhone implements Radio, Battery{
  switchRadio(){
    
  }
  checkBatteryStatus(){

  }
}

class Phone implements RadioWithBattery{
  switchRadio(){
    
  }
  checkBatteryStatus(){}
}



