// OLAY KABARCIKLANMASI --EVENT BUBBLİNG --> Denizde derinden gelen kabarcık

// HTML Documentine özgü bir özellik -- kabarcıklanarak yukarı cıkıyor
// documentaki bir elemente tıklayınca parentine geciyor, sonrada onun parentina

// Event Bubbling --> Childa tıklayıncada parenta eklediğimiz eventlistener calisir
// document.querySelector(".container").addEventListener("click",run1);

// document.querySelector(".card.row").addEventListener("click",function(e){
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(e){
//     console.log("Card Body");
// });

// function run1(e){
//     console.log("Div Container");
// }

// Event Target Özelliği vardi --DOMA Yeni eklenen element icin event atayamiyoruz cozumu bu

// Eventi Childlarda yakalma -> Tüm childlara event eklemek yerine bu yapılırdı
// Ayni zamanda yeni childe ekleyincede eventini tanımlamak zorunda değiliz parenti kullanır
// EVENT CAPTURİNG / DELEGATİON --> Childlarda hangi elementi tıkladığımızı anlayıp ilem yapma

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme islemi");
    }else if(e.target.id === "filter"){
        console.log("Filtreleme İslemi");
    }else if(e.target.id === "clear-todos"){
        console.log("Tüm taskları silme işlemi");
    }
    // console.log(e.target);
}

