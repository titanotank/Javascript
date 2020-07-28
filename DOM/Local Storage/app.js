// Local Storage


// SetItem ---> Mutlaka string olarak kaydedilir

// localStorage.setItem("hareket","burpee");

// Get Item --> Hep String döndürür

// const value = localStorage.getItem("hareket");
// console.log(value);

// Clear Local Storage

// localStorage.clear();


// Local Storage --- Array Yazma

const todos = ["Todo 1" , "Todo 2" , "Todo 3"];
// Burda her elemanı virgul koyup stringe cevirdi - get Item dersek gelir
// localStorage.setItem("todos",todos);

// JSON.stringfy --- json arrayı gibi yazdi

// localStorage.setItem("todos",JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));

// console.log(value);


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit",addTodo);

// Todoları alıp sonuna eklemeliyiz varsa yoksa yeni eklenir
function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();
}


