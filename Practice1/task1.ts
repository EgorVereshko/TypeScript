const actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // убрать кавычки, т.к переменная age должна принимать числовое значение (number)
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '34'

// Чтобы избежать данной ошибки, благодаря TS можно понять и правильно указать нужные типы переменным,
// чтобы они ошибочно не принимали другие значения