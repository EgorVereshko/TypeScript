function areEqual<T extends object>(obj_1:T, obj_2:T): boolean {
    const keys_a = Object.keys(obj_1);
    const keys_b = Object.keys(obj_2);

    if (keys_a.length != keys_b.length) {
        return false;
    }

    for (const key of keys_a) {
        if (!keys_b.includes(key) || obj_1[key] != obj_2[key]) {
            return false;
        }
    }

    return true;
}

const obj_1 = { a: 1, b: 2, c: 3 };
const obj_2 = { a: 1, b: 2, c: 3 };
console.log(areEqual(obj_1, obj_2)); // true

// const obj_1 = { a: 1, b: 2, c: 3 };
// const obj_2 = { a: 1, b: 2, c: 4 };
// console.log(areEqual(obj_1, obj_2)); // false