function add (x:number, y:number, z?: number): number {
  return x + y + z||0;
}
let res = add(2, 3)

function add2(a: string, b:string, c:string = '') {
  return a + b + c;
}

res = add2('hello', ' ts') // 上面已经定义过了 number类型了；   error TS2322: Type 'string' is not assignable to type 'number'.

res = 5; // ok

let res2 = add2('hello', ' ts'); // ok