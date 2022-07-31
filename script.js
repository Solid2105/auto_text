const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est perferendis atque cum velit, dolor explicabo fugiat vel sapiente maxime doloremque saepe nostrum tempore amet aliquam veniam laudantium ipsum minima.';

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);