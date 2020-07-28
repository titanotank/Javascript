// Elementi Id'ye göre secme

let element;
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Elementi classa göre secme

element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

// Elementi Tag'a göre secme

element = document.getElementsByTagName("div");

// Query Selector - Css selector ---> ilk bulduğu tek elementi secer

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

// QuerySelectorAll- Tüm Elementleri Sec
element = document.querySelectorAll(".list-group-item"); // Node List

element.forEach(function(e){
    console.log(e);
});


console.log(element);

