const addForm = document.querySelector('.add');
const list = document.querySelector('.list');
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

const generateTemplate = (todo) => {
    const html= `
    <li class="item">
        <span class="info">${todo}</span>
        <span class="delete">❌</span>
    </li>
    `;
    list.innerHTML+=html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length)
    {
        generateTemplate(todo);
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


