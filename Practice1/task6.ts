function sqrtDigits(number: number): number {
    if (number <= 0) {
        return -1;
    }

    else if (number < 10) {
        return number;
    }

    else {
        let result = 0;
        const digits = String(number).split("");

        for (let i = 0; i < digits.length; i++) {
            result += parseInt(digits[i])
        }
        
        return sqrtDigits(result);
    }
}

console.log(sqrtDigits(942)) // 6
console.log(sqrtDigits(493193)) // 2