const h1Container = document.querySelector('h1');
const button = document.querySelector('button');

const randomHexadecimalColorGenerator = () => {
	const hexadecimalColor = Math.floor(Math.random() * 16777215).toString(16);
	return hexadecimalColor;
};

const changeBackgroundColor = () => {
	const hexadecimalColor = randomHexadecimalColorGenerator();
	document.body.style.backgroundColor = `#${hexadecimalColor}`;
	h1Container.textContent = `#${hexadecimalColor.toUpperCase()}`;
};

window.addEventListener('load', changeBackgroundColor);

button.addEventListener('click', changeBackgroundColor);
