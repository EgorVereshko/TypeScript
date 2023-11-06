type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};
// function getHouse(): House {
    // const house = {} as House;
    // house.street = 'Pushkina';
    // house.apartmentCount = 76;

//     house.buildInfo = {
        // year: 1996,
        // material: 'rocks',
//         };

//     return house;
// }

function getHouse(): House {
    const house: House = {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };

    return house;
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`); // Значение house.apartmentCount не определено и оно не инициализируется значением по умолчанию, значит имеет значение undefined.
    console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `); // Свойство buildInfo.year не инициализировано, значит, когда идёт обращение к нему, свойство будет undefined, из-за чего код выводит ошибку
}

handleHouse();

// TypeScript считает, что все поля в этом объекте указаны, в результате можно получить объект в невалидном состоянии, что приведёт к ошибкам во время выполнения программы.
// Для избежания таких проблем не нужно использовать оператор as. Нужно указывать правильные типы для переменных.
// Новая функция позволяет TS сразу видеть ошибку в том, что необходимые свойства, указанные в type House, пропущены (не указаны)
// Теперь, ошибка возникнет во время компиляции, а не выполнения кода. Если при выводе не будет указываться какое-то значение, то
// будет выводиться ошибка в связи с пропкщенным свойством, а не будет приниматься значение undefined.