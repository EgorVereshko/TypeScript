function squareDigits(number: number): number {
    if (number < 0) {
        return number;
    }
    else {
        const toArray: string[] = number.toString().split("");
        const toSquare: number[] = toArray.map((e) => parseInt(e) ** 2);
        const result: number = parseInt(toSquare.join(""));
        return result
    }
}

console.log(squareDigits(9119)) // 811181
