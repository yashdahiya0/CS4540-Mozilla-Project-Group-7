const addForm = document.querySelector('.add');
const list = document.querySelector('.list');
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
 
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

let ARR = [] , id = 0;
let data = localStorage.getItem("ITEMS");

if(data){
    ARR = JSON.parse(data);
    id = ARR.length; 
    loadList(ARR);
}
 
function loadList(array){
    array.forEach(item => itemname(item));
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

function generateTemplate(item, id, done, remove){
    
    if(remove) {return;}

    const D = done ? 'done' : '';

    const html= `
    <li class="item">
        <span class="info ${D}" id="${id}">${item}</span>
        <span class="delete" id="${id}">❌</span>
    </li>
    `;
    //list.innerHTML+=html;

    const position = "beforeend";
    
    list.insertAdjacentHTML(position, html);
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const item = addForm.add.value.trim();
    if(item.length)
    {
        generateTemplate(item, id, false, false);
        ARR.push({
            name: item,
            id: id,
            done: false,
            remove: false
        })
        localStorage.setItem("ITEMS", JSON.stringify(ARR));
        id++;
        addForm.reset();
    }
})


function itemname(task){
    console.log(task);
    generateTemplate(task.name, task.id, task.done, task.remove);
}

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
        element = e.target;
        console.log(element);
        ARR[element.id].remove = true;
        localStorage.setItem("ITEMS", JSON.stringify(ARR));
    }
});


list.addEventListener('click', e => {
    if(e.target.classList.contains('info'))
    {
        e.target.classList.toggle('done');
        element = e.target;
        console.log(element);
        ARR[element.id].done = ARR[element.id].done ? false : true;
        localStorage.setItem("ITEMS", JSON.stringify(ARR));
    }
});


