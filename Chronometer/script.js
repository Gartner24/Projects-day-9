const buttonStartPause = document.getElementById('StartPauseButton');
const restartButton = document.getElementById('RestartButton');
const timeContainer = document.getElementById('timer');

let [hora, minutos, segundos] = [0, 0, 0];
let chronometerState = false;

const randomHexadecimalColorGenerator = () => {
	const hexadecimalColor = Math.floor(Math.random() * 16777215).toString(16);
	return hexadecimalColor;
};

const changeBackgroundColor = () => {
	const hexadecimalColor = randomHexadecimalColorGenerator();
	document.body.style.backgroundColor = `#${hexadecimalColor}`;
	h1Container.textContent = `#${hexadecimalColor.toUpperCase()}`;
};
const pause = () => {
	chronometerState = false;
	buttonStartPause.classList.remove('pause');
	buttonStartPause.classList.add('start');
	buttonStartPause.innerHTML =
		'<span class="material-symbols-outlined">play_arrow</span>';
};

const start = () => {
	chronometerState = true;
	buttonStartPause.classList.remove('start');
	buttonStartPause.classList.add('pause');
	buttonStartPause.innerHTML =
		'<span class="material-symbols-outlined">pause</span>';
};

restartButton.addEventListener('click', () => {
	chronometerState = false;
	if (buttonStartPause.classList.contains('pause')) pause();

	hora = 0;
	minutos = 0;
	segundos = 0;
	printTime();
});

buttonStartPause.addEventListener('click', () => {
	if (buttonStartPause.classList.contains('start')) {
		start();
	} else {
		pause();
	}
});

const printTime = () => {
	timeContainer.innerHTML = `${hora < 10 ? '0' + hora : hora}:${
		minutos < 10 ? '0' + minutos : minutos
	}:${segundos < 10 ? '0' + segundos : segundos}`;
    changeBackgroundColor();
};

const updateChronometer = () => {
	if (chronometerState) {
        segundos++;
		if (segundos == 60) {
            segundos = 0;
			minutos++;
			if (minutos == 60) {
                minutos = 0;
				hora++;
			}
		}
		printTime();
	}
};


window.onload = () => changeBackgroundColor();

setInterval(updateChronometer, 1000);
