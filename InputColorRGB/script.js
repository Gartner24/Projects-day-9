const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const redText = document.querySelector('.redText');
const greenText = document.querySelector('.greenText');
const blueText = document.querySelector('.blueText');

let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;

redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

const uptadeColor = (red, green, blue) => {
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB;
}

redInput.addEventListener('input', () => {
    red = redInput.value;
    redText.innerText = red;
    uptadeColor(red, green, blue);
});

greenInput.addEventListener('input', () => {
    green = greenInput.value;
    greenText.innerText = green;
    uptadeColor(red, green, blue);
});

blueInput.addEventListener('input', () => {
    blue = blueInput.value;
    blueText.innerText = blue;
    uptadeColor(red, green, blue);
});