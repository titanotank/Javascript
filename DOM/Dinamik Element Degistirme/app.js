// REPLACE

const cardbody = document.querySelectorAll(".card-body")[1];


const newElement = document.createElement("h5");
newElement.className = "task-title";
newElement.textContent = "Yeni Todolar";

// Eski Element

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);


console.log(cardbody);