function reverseWord(text: string): string {
    const words = text.split(" ");
    const reverseWord = words.map(word => reverseString(word));
    return reverseWord.join(" ")
}

function reverseString(str: string): string {
    return str.split("").reverse().join("")
}

console.log(reverseWord("Это Пример!")); // "отЭ !ремирп"