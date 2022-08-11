let produtos = ['Notebook', 'Celular', 'Televisão', 'Xbox', 'Playstation', 'NitendoSwitch', 'Tablet'];
for (let i = 0; i < 7; i++) {
    document.querySelector('.produto').innerHTML += `<div class="item" id="${produtos[i]}" onclick="addItem()">${produtos[i]}</div>`;
}

function addItem() {
    let a = event.target.id;
    document.querySelector('.sacola').innerHTML += `<div class="item" id="${a}">${a}</div>`;

}
