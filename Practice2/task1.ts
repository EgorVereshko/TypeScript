function arrayDiff<T>(a: T[], b: T[]): T[] {
    return a.filter((element) => !b.includes(element));
}

console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 3, 4], [5, 6]))
console.log(arrayDiff([2, 2, 2, 2, 3], [2]))