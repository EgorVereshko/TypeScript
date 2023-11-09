function areEqual<T extends object>(obj1: T, obj2: T): boolean {
    return JSON.stringify(obj1) == JSON.stringify(obj2)
}

const obj_1 = { a: 1, b: 2, c: 3 };
const obj_2 = { a: 1, b: 2, c: 3 };
console.log(areEqual(obj_1, obj_2)); // true

const obj_3 = { a: 1, b: 2, c: 3 };
const obj_4 = { a: 1, b: 2, c: 4 };
console.log(areEqual(obj_3, obj_4)); // false
