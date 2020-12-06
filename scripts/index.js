
const TODO_LIST = [
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌷' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
    { title: 'Позвонить маме 📞' },
    // { title: 'Помыть машину 🚗' },
    // { title: 'Встретиться с друзьями 👋' },
    // { title: 'Съесть печеньку 🍪' },
];

const listContainerElement = document.querySelector('.todo__list');
const inputElement = document.querySelector('input');
const templateElement = document.querySelector('.template');

function renderList() {
    const listItems = TODO_LIST.map(composeItem);
    listContainerElement.append(...listItems);
}

function composeItem(item){
    const newItem = templateElement.content.cloneNode(true);
    const headerElement = newItem.querySelector('.card__title');
    headerElement.textContent = item.title;
    const removeButton = newItem.querySelector('.button_remove');
    removeButton.addEventListener('click', removeItem);
    const duplicateButton = newItem.querySelector('.button_duplicate'); 
    duplicateButton.addEventListener('click', duplicateItem);
    return newItem;
}


function bindAddItemListener(){
    const addButtonElement = document.querySelector('.button_add');
    addButtonElement.addEventListener('click', addNewItem)
}

function addNewItem(){
    const inputText = inputElement.value;
    const newItem = composeItem({ title: inputText});
    listContainerElement.prepend(newItem);
    inputElement.value = '';
}

function removeItem(evt){
const targetItem = evt.target.closest('.card');
targetItem.remove();
}

function duplicateItem(evt){
const targetItem = evt.target.closest('.card');
const headerElement = targetItem.querySelector('.card__title');
const title = headerElement.textContent;
const newItem = composeItem({ title: title })
listContainerElement.prepend(newItem);
}

renderList();
bindAddItemListener();
