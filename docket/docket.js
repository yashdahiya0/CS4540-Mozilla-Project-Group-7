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

function generateTemplate(item, id, done, remove, priority){
    
    if(remove) {return;}
    const D = done ? 'done' : '';
    const P = priority ? 'priority' : '';
    const html= `
    <li class="item">
        <span class="heart ${P}" id="${id}">♥</span>
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
        generateTemplate(item, id, false, false, false);
        ARR.push({
            id: id,
            name: item,
            done: false,
            remove: false,
            priority: false
        })
        localStorage.setItem("ITEMS", JSON.stringify(ARR));
        id++;
        addForm.reset();
    }
})


function itemname(task){
    console.log(task);
    generateTemplate(task.name, task.id, task.done, task.remove, task.priority);
}

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
        element = e.target;
        console.log(element);
        if(ARR[element.id].priority)
        {
            if(ARR[element.id].done == false){
                ARR[element.id].remove = false;
            } else {
                ARR[element.id].remove = true;
            }

        }else{
            ARR[element.id].remove = true;
        }
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


list.addEventListener('click', e => {
    if(e.target.classList.contains('heart'))
    {
        e.target.classList.toggle('priority');
        element = e.target;
        console.log(element);
        ARR[element.id].priority = ARR[element.id].priority ? false : true;
        localStorage.setItem("ITEMS", JSON.stringify(ARR));
    }
});

//var bgcolors = ["#45097e","#cc7134"];
var bgcolors = ["url(icons/2.png)", "url(icons/3.png)", "url(icons/4.png)", "url(icons/1.png)"];
var lscolors = ["#A3DCEE","#FFB6C1","white","#EEE9A3"];
var colorIndex = 0;
function changeColor() {
    var col = document.getElementById("body");
    if( colorIndex >= bgcolors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundImage = bgcolors[colorIndex];
    list.style.backgroundColor = lscolors[colorIndex];
    colorIndex++;
}

const colorBG = document.querySelector(".edit-color");
colorBG.addEventListener("click", function(){
    changeColor();
});


//Future use when integrating applications and database
function priorityAlert(){
    alert("You have priority tasks left to finish!");
}
