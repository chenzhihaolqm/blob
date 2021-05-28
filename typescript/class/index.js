var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return name + " is barking"; // 编译ok， 运行 error
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Cat.prototype.eat = function (food) {
        return this.name + " is eating " + food;
    };
    return Cat;
}(Animal));
var animal = new Animal('jack');
// animal.name = 'lily'; // error Property 'name' is protected and only accessible within class 'Animal' and its subclasses.ts(2445)
console.log(animal.run());
var dog = new Dog('wang cai');
console.log(dog.run());
console.log(dog.bark());
var cat = new Cat('tom', 1);
console.log(cat.eat('fish'));
Animal.isAnimal(cat);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () {
    };
    return Car;
}());
var CellPhone = /** @class */ (function () {
    function CellPhone() {
    }
    CellPhone.prototype.switchRadio = function () {
    };
    CellPhone.prototype.checkBatteryStatus = function () {
    };
    return CellPhone;
}());
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.switchRadio = function () {
    };
    Phone.prototype.checkBatteryStatus = function () { };
    return Phone;
}());
jQuery(''); // index.ts(83,1): error TS2304: Cannot find name 'jQuery'.
