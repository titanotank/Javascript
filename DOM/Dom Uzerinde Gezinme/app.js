let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

// Child Nodes - Text Dahil

value = todoList.childNodes; //- satir atlamaları bir node olarak sayıyor
value = todoList.childNodes[0];


// Children - Element
// nodesuz halde hepsini getirdi
value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Degisti";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da degisti";


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;


value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// Element Kardesleri

value = todo;

value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;

console.log(value);