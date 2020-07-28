const cardbody  =document.querySelectorAll(".card-body")[1];


const title = document.querySelector("#tasks-title");

console.log(title);

//Click Event
// title.addEventListener("click",run);

// Double Click
// title.addEventListener("dblclick",run);


// Mouse Down
// title.addEventListener("mousedown",run);

// Mouse Up
// title.addEventListener("mouseup",run);

// Mouse Over
// title.addEventListener("mouseover",run);

// Mouse Out
// title.addEventListener("mouseout",run);


// İc ice elementlerde bu sekilde olusur cardboydye 
// icteki bir elementede girersek yine olusur
// cardbody.addEventListener("mouseover",run);


// Mouse Enter ve Leave ----> Mouse over ve enterden farklı coklamıyor
cardbody.addEventListener("mouseenter",run); // Mouse Over olsa bir cok kez calısırdı
cardbody.addEventListener("mouseleave",run); //


function run(e){
    console.log(e.type);
}