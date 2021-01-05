const apiKey = 'e826c9fc5c929e0d6c6d423841a282aa';
var offset = 0;

let slideRight = document.getElementById('sliderRight');
let slideLeft = document.getElementById('sliderLeft');

async function getTrendingGifos(offset) {
    
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}&limit=3`;
    let answer = await fetch(url);
    let json = await answer.json();
    createThreeGifoCards(json);
    return json;
};

function createThreeGifoCards(json) {
    
    let card1 = createGifCard(result.data[0]);
    let card2 = createGifCard(result.data[1]);
    let card3 = createGifCard(result.data[2]);

    let container = document.getElementById('containerGifos');
    container.replaceChild(card1, container.children[0]);
    container.replaceChild(card2, container.children[1]);
    container.replaceChild(card3, container.children[2]);
};

function createGifoCard(gifo) {
    let gif = document.createElement('gif');
    gif.innerHTML = `<img src=${gifo.images.original.url} class='imgGif' id='gif'>`;
    return gif;
};

getTrendingGifos();

slideRight.addEventListener('click', () => {
    offset = offset - 3;
    getTrendingGifos(offset);
});

slideLeft.addEventListener('click', () => {
    offset = offset - 3;
    getTrendingGifos(offset);
});