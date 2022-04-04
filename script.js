let form = document.querySelector('.todoList');
let button = document.querySelector('.button');
let check = document.querySelector('.item-check');
let input = document.querySelector('.input');



form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault();
        if (input.value == ''){
            displayWarningAlert();
        }
        else if(input.value != ''){
            addItemToList();
            itemAddedAlert()
            input.value = ''
        }
}
function displayWarningAlert(){
    document.querySelector('.noitemAlert').style.opacity = '1';
    setTimeout(function(){document.querySelector('.noitemAlert').style.opacity = '0'}, 1000)
}
function itemAddedAlert(){
    document.querySelector('.addAlert').style.opacity = '1';
    setTimeout(function(){document.querySelector('.addAlert').style.opacity = '0'}, 1000)
}
function delAlert(){
    document.querySelector('.delAlert').style.opacity = '1';
    setTimeout(function(){document.querySelector('.delAlert').style.opacity = '0'}, 1000)
}
function addItemToList(e){
    let list = document.querySelector('.items');
    let newItem = document.createElement('li');
    let newIcon = document.createElement('i');
    newItem.innerText = input.value;
    newItem.className = 'item';
    newIcon.className = 'fa-solid fa-check item-check'
    newItem.append(newIcon);
    list.append(newItem);
    newItem.addEventListener('click', e=>{
        if(e.target.classList.contains('item-check')){
            // console.log('1');
            let itemToDelete = e.target.parentElement;
            list.removeChild(itemToDelete);
            delAlert();
        }
    })
}


document.querySelector('.clear').addEventListener('click', e=>{
    location.reload()
})

document.addEventListener('keydown',e=>{
    if (e.key == 'Escape'){
        input.focus();
    }
})