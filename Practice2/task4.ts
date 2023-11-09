type SentenceTransformation = (sentence: string) => string;

const transformSentence: SentenceTransformation = (sentence: string) => {
    const words = sentence.split(' ');

    const firstWord = words[0];
    const firstWordLength = firstWord.length;
    const wordsWithoutFirstWord = words.splice(firstWordLength, 1);

    const transformedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
    });

    return transformedWords.join(' ');
};

const sentence = 'Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили';
const transformedSentence = transformSentence(sentence);
console.log(transformedSentence);
