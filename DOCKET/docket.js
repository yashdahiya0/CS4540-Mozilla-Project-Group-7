
const items = [{ "item":"testing", "priority":1, "status":true},
{"item":"testing", "priority":2, "status":false},
{"item":"testing", "priority":3, "status":true}]

const itemsStr =JSON.stringify(items);

console.log(itemsStr);
console.log(items);

function fetchItems(){

    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var items = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(items);
        
        for (var i=0; i<itemsArr.length; i++){
            var status = '';
            if(itemsArr[i].status == true){
                status = 'class="done"';
            }

            newItemHTML += `<li data-itemindex = "${i}">
            <span class="item">${itemsArr[i].item}</span> 
            <div><span class="buttons">✅</span> 
            <span class="buttons">❌</span></div>
            </li>`;
            itemsArr[i]
        }
        itemsList.innerHTML = newItemHTML;
    } catch(error){

    }
}

function saveItems(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string);
}

fetchItems();
