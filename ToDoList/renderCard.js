const renderCard = (container, text, id) => {
	const card = document.createElement('div');
	card.classList.add('todoItem');
    card.setAttribute('id', id);
	card.innerHTML = `
    <div class='todoItemText'>${text}</div>
    <div class='todoItemActions'>
        <button class='itemActionButton doneButton' id="${id}">
            <span class='material-symbols-outlined'>task_alt</span>
        </button>
        <button class='itemActionButton deleteButton' id="${id}">
            <span class='material-symbols-outlined'>delete</span>
        </button>
    </div>
    `;
	container.appendChild(card);
};

export { renderCard };
