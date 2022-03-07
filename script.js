let form = document.querySelector('.lister');
let subBtn = document.querySelector('#lister-input-button');
let list = document.querySelector('.lister-items-items');

list.addEventListener('click', deleteItem);

form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    let newItem = document.querySelector('#lister-input-input').value;
    // console.log(1);
    let deleteBtn = document.createElement('span');
    deleteBtn.className = 'fas fa-trash';
    let li = document.createElement('li');
    li.className = 'lister-items-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteBtn);
    console.log(deleteBtn);
    // console.log(list);
    // console.log(li);
    list.appendChild(li);
    form.reset();
}

function deleteItem(e){
    if (e.target.classList.contains('fas')){
        // console.log(1);
        // if(confirm('Are you sure you wanna delete this?')){
            let li = e.target.parentElement;
            list.removeChild(li);
        } 
    // }
}