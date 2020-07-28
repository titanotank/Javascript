const filterInput = document.getElementById("filter");

// Eski Yöntem -> Onfocus ozelligi aktif olunca functionım calısıyor
// 1. yöntem

// filterInput.onfocus = function(){
//     console.log("Naber");
// }

// Yeni yöntem -- event adi ve callback function yazdık.
// elementlerimize eventleri atayabiliyoruz
// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type); // evet tipi
//     console.log(e.target); // hangi element
//     console.log(e.target.placeholder);
//     // console.log("Naber");
// });


// Form submit olduğunda secme

const todoForm = document.getElementById("todo-form");

// tanımlama yapmak yerine bunu kullanabiliriz
todoForm.addEventListener("submit",submitForm);

// Sayfada yenilendi ve gitti. Yazı cok kısa süre görünür oldu
// e.preventDefault ile submit eventinin önceki özelliklerini engelliyoruz.
function submitForm(e){
    
    console.log("Submit Eventi");
    e.preventDefault();
}




console.log(filterInput);