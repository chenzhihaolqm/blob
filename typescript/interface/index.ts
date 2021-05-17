/*  
   1. 对对象的形状进行描述
   2. 对类进行抽象
   3. DuckTyping 鸭子类型
*/

interface IPerson {
  name: string;
  age: number;
}

interface IPerson2 {
  readonly id: number;  // can not setting
  name: string;
  age?: number;  // 可选
}

let p:IPerson = {
  name: 'Jack',
  age: 20,
  gender: 'male' // error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'IPerson'.
                 // Object literal may only specify known properties, and 'gender' does not existin type 'IPerson'.
}


