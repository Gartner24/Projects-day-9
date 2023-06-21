
const randomHexadecimalColorGenerator = () => {
	const hexadecimalColor = Math.floor(Math.random() * 16777215).toString(16);
	return hexadecimalColor;
};

const changeBackgroundColor = () => {
	const hexadecimalColor = randomHexadecimalColorGenerator();
	document.body.style.backgroundColor = `#${hexadecimalColor}`;
};

window.addEventListener('load', changeBackgroundColor);
