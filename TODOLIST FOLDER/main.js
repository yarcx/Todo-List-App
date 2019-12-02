//creating the variables
const input = document.querySelector('.input');
const container = document.querySelector('.container');
const addButton =  document.querySelector('.addButton');

class Item{
    constructor(itemName) {
        //creating the div element
        this.createDiv(itemName)
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.classList.add('item_input');
        input.disabled = true;
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.innerHTML = 'EDIT   ';

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerHTML = '   REMOVE';

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);


        editButton.addEventListener('click', ()=> this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    };

    edit(input) {
        input.disabled = !input.disabled;
    };

    remove(item) {
        container.removeChild(item);
    }

}

function check() {
    if(input.value != '')
    new Item(input.value);
    input.value = '';
}
addButton.addEventListener('click', check);
windows.addEventListener('keydown', (e) => {
    if(e.which == 13)
    check()
});