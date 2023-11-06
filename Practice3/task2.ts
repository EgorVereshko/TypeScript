type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}

// 1 способ

// function whatDoesThePetSay(pet: Dog | Cat): string {
//     if ('meow' in pet) {
//         return pet.meow()
//     }
//     else {
//         return pet.bark()
//     }
// }

// 2 способ

// function isCat(pet: Dog | Cat): pet is Cat {
//     return (pet as Cat).meow != undefined;
// }
// function whatDoesThePetSay(pet: Dog | Cat): string {
//     if (isCat(pet)) {
//         return pet.meow()
//     }
//     else {
//         return pet.bark()
//     }
// }

// 3 способ

function whatDoesThePetSay(pet: Dog | Cat): string {
    if ('meow' in pet) {
        return pet.meow()
    }
    else if ('bark' in pet) {
        return pet.bark()
    }
    return 'Nothing :('
}

// console.log(whatDoesThePetSay(cat)) // meow
// console.log(whatDoesThePetSay(dog)) // bark

// Пользовательский тайпгард имеет больше сложную проверку типов, однако более точную проверку типов, что является более безопасным.

// Через обычный тайпгард программа реализуется проще и понятнее. Работает без необходимости явного указания типов.
// Обнаружение ошибок во время компиляции
// Легкое добавление новых типов и функций