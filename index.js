const drawInterval = 20; // num pixels to wait before next image is drawn
let index = 0; // current index in list of images. incremented each draw
let moveCount = 0; // number of times mouse has changed positions
const RESOURCE_PATHNAME = "./resources/";
let imageList = ['parviz.png', 'andrewlan.png', 'corner.png',   'emma.png',     'jaime.png',    'liberatore.png',     'parviz.png',   'timrichards.png',
'andrewstone.png',    'david_3.png',  'fisher.png',   'joe.png','minea.png',    'peterklemperer.png', 'wilenden.png',
'brianlevine.png',    'emery.png',    'gordon.png',   'laurahaas.png','obara.png',    'ramesh.png',];

var c = document.getElementById("my_canvas");
var ctx = c.getContext("2d");


c.width = window.innerWidth - 20;
c.height = window.innerHeight - 20;

function bounce(t, v=0.5, g=1, xi=0.9) {

    const k = Math.floor(Math.log((xi - 1) * (g * t) / (2 * v) + 1) / Math.log(xi));
    const inner_term = (t - (2 * v / g) * (Math.pow(xi, k) - 1) / (xi - 1));
    const first = v * Math.pow(xi, k)
        * inner_term;
    const second = (g / 2) * Math.pow(inner_term, 2);
    // console.log(`k=${k}, inner_term=${inner_term}, first=${first}, second=${second}`);
    return first - second;
}

// shuffle
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

window.addEventListener('load', e => {
    let images = [];
    for(const imgName of imageList) {
        const image = new Image();
        image.src = RESOURCE_PATHNAME + imgName;
        image.addEventListener('load', function () {
            var interval = setInterval(function () {
                let x = Math.random() * window.innerWidth;
                let y = Math.random() * window.innerHeight;
                let dx = 5 * Math.random();
                let dy = 5 * Math.random();

                return function () {
                    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(image, x, y);

                    x += dx;
                    y += dy;

                    if (x + image.width > window.innerWidth || x < 0) {
                        dx *= -1;
                    }
                    if (y + image.height > window.innerHeight || y < 0) {
                        dy *= -1;
                    }
                };
            }(), 1000 / 40);
        }, false);
    }
})