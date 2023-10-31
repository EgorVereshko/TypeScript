function squareDigits(number: number): number {
    if (number < 0) {
        return number;
    }

    let result = "";
    const digits = String(number).split("");

    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);
        result += String(digit * digit);
    }

    return parseInt(result);
}

console.log(squareDigits(9119)) // 811181