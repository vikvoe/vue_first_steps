var elements = [
    {
        id: 1,
        title: 'Gretel A7',
        pic: '../assets/Gretel-A7.jpg',
        link: 'https://market.yandex.ru/product/1725613811?show-uid=111646259028863319816001&nid=54726&context=search'
    },
    {
        id: 2,
        title: 'Jinga Simple F315',
        pic: '../assets/Jinga-Simple-F315.jpg',
        link: 'https://market.yandex.ru/product/13623394?show-uid=111646259028863319816002&nid=54726&context=search'
    },
    {
        id: 3,
        title: 'Philips S386',
        pic: '../assets/Philips-S386.jpg',
        link: 'https://market.yandex.ru/product/1729159126?show-uid=111646259028863319816003&nid=54726&context=search'
    }
]

var currentIds = [1, 3]

// Выведи все свойства title элементов массива elements 
// id которых равен id из currentIds
// Результат должен быть – Gretel A7 и Philips S386
//сделай ее двумя способами – простым и предложи, 
//как поменять структуру данных для того, чтобы скорость работы увеличилась