const inputInfo = document.querySelector(".inputInfo");
const btn = document.querySelector(".btn");
const toDoList = document.querySelector(".toDoList");

btn.addEventListener('click', function(){
    const item = document.createElement('li');
    item.innerText = inputInfo.value;
    item.classList.add('toDoAdded');
    toDoList.appendChild(item)
    inputInfo.value = '';
    item.addEventListener('click', ()=>{
        item.classList.add('toDoCompleted');
    })
    item.addEventListener('dblclick', ()=>{
        toDoList.removeChild(item)
    })
}) 