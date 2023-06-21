import { citas } from './citas.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('#changeQuoteButton');

const randomQuoteGenerator = () => {
	const randomQuote = citas[Math.floor(Math.random() * citas.length)];
	quote.textContent = randomQuote.texto;
	author.textContent = randomQuote.autor;
};

changeQuoteButton.addEventListener('click', () => {
	randomQuoteGenerator();
});

window.onload = () => {
	randomQuoteGenerator();
};
