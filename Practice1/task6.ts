function sqrtDigits(number: number): number {
    while (number >= 10) {
        number = number.toString().split("").map(Number).reduce((result, current) => result + current, 0)
    }
    return number
}

console.log(sqrtDigits(942)) // 6
console.log(sqrtDigits(493193)) // 2
