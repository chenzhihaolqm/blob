
let numberOrStr: number|string = 234;  // 组合类型
numberOrStr = 'hello';

let arrOfNumbers: number[] = [1, 2, 'str', 4] //  error TS2322: Type 'string' is not assignable to type 'number'.
arrOfNumbers.push(true) // error


let arr: [string, number] = ['init', 2]; // 元组