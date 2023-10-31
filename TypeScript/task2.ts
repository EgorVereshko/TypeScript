document.addEventListener('click', (e) => {
    const coords = [e.clientX, e.clientY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});

// e не содержит свойств posX и posY
// Нужно заменить на clientX и clientY, свойства являются горизонтальной и вертикальной координатами
// Оба свойства возвращают числа, представляющие пиксели относительно окна просмотра, с началом координат в левом верхнем углу