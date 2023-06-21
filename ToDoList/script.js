import { renderCard } from './renderCard.js';

// const card = document.createElement('div');
// 	card.classList.add('todoItem');
//     card.setAttribute('id', id);
// 	card.innerHTML = `
//     <div class='todoItemText'>${text}</div>
//     <div class='todoItemActions'>
//         <button class='itemActionButton doneButton' id="${id}">
//             <span class='material-symbols-outlined'>task_alt</span>
//         </button>
//         <button class='itemActionButton deleteButton' id="${id}">
//             <span class='material-symbols-outlined'>delete</span>
//         </button>
//     </div>
//     `;

const todoInput = document.querySelector('#todoInput');
const createToDoButton = document.querySelector('#createToDoButton');
const todolistContainer = document.querySelector('.todolistContainer');
let id = 0;

createToDoButton.addEventListener('click', () => {
	if (todoInput.value) {
		renderCard(todolistContainer, todoInput.value, id++);
		todoInput.value = '';
	}
});

todolistContainer.addEventListener('click', (event) => {
	let deleteId = event.target.id;
	if (event.target.classList.contains('deleteButton')) {
		const parentElement = event.target.parentElement.parentElement;
		parentElement.remove();
	}
	if (event.target.classList.contains('doneButton')) {
		const parentElement = event.target.parentElement.parentElement;
		parentElement.classList.toggle('done');
		event.target.classList.toggle('dondeButtonTrue');
	}
})