const addForm = document.querySelector('.add');
const list = document.querySelector('.list');
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
 
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

const generateTemplate = (item) => {
    const html= `
    <li class="item">
        <span class="info">${item}</span>
        <span class="delete">❌</span>
    </li>
    `;
    list.innerHTML+=html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const item = addForm.add.value.trim();
    if(item.length)
    {
        generateTemplate(item);
        addForm.reset();
    }
})

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});


list.addEventListener('click', e => {
    if(e.target.classList.contains('info'))
    {
        e.target.classList.add('done');
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

//create function to save the queries in local storage.
