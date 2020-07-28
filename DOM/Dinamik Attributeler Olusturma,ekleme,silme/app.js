const todoInput = document.getElementById("todo");
let element;

// Classlara eleman ekleme
element = todoInput;
element = todoInput.classList;

// Buda bir secenek
// todoInput.className = "form-control newClass";


// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

// element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");
todoInput.setAttribute("title","Input");

// Bir element var mı yok mu die bakabiliyoruz
element = todoInput;
element = todoInput.hasAttribute("name");
todoInput.removeAttribute("name");

console.log(element);