type SentenceTransformation = (sentence: string) => string;
const transformSentence: SentenceTransformation = (sentence: string) => {
    const words = sentence.split(' ');
    const transformedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restLetters = word.slice(1).toLowerCase();
    return firstLetter + restLetters;
    });

    return transformedWords.join(' ');
};
    
const sentence = 'Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили';
const transformedSentence = transformSentence(sentence);
console.log(transformedSentence);