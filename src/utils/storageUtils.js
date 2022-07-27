function getStorage() {
    let items = JSON.parse(localStorage.getItem('state'));

    if (!items) {
        items = [
            [10, true, 'Написать код'],
            [20, false, 'Выпить кофе'],
            [30, true, 'Протестировать код'],
            [40, false, 'Залить на гит'],
            [50, false, 'Отправить ментору'],
            [60, true, 'Отрефакторить'],
            [70, false, 'Смержить'],
        ]

        setStorage(items);
    }

    return items;
}

function setStorage(items) {
    localStorage.setItem('state', JSON.stringify(items));

    return items;
}

export {getStorage, setStorage};
