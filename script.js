let imgs = [
    { src: 'assets/car.jpg', alt: 'Car' },
    { src: 'assets/cat.jpg', alt: 'Cat' },
    { src: 'assets/dog.jpg', alt: 'Dog' },
    { src: 'assets/forest.jpg', alt: 'Forest' },
    { src: 'assets/panda.jpg', alt: 'Panda' },
    { src: 'assets/women.jpg', alt: 'Woman' }
];
let cards = [...imgs,...imgs];
const card_div = document.getElementById('cards_div');
cards.forEach(el => {
    const image = document.createElement('img');
    image.setAttribute('src',el.src);
    image.setAttribute('alt',el.alt)
    card_div.appendChild(image);
});

