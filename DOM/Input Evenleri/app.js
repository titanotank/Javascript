const filter = document.getElementById("filter");

// DOM CONTENT LOADER ---> Documanin tamami olustuktan sonra 

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa Yüklendi");
// }


// Focus -- Odaga girince --> Blur Odaktan cıkınca
// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);


function run(e){
    console.log(e.type);
}

// Paste --- paste yapılırsa kopyalama eventi olusur
// filter.addEventListener("paste",run);

// Copy eventini görme
// filter.addEventListener("copy",run);

// Cut eventi
// filter.addEventListener("cut",run);

// Select -- Yazının bir kısmı veya tamami secilince
// filter.addEventListener("select",run);



console.log(filter);