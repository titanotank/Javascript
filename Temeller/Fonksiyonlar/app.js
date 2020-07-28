// Fonksiyonlar

// function merhaba(name -= "Bilgi Yok", age = "Bilgi Yok"){
    
//     // Daha kısa yolu sudur
//     // if( typeof name === "undefined") name = "Bilgi Yok";

//     console.log(`İsim ${name} Yas: ${age}`);
// }

// merhaba("Murat",25); // Fonksiyon Cagrisi (Function call)
// merhaba("Ayse",30);

// merhaba(); // Parametreli fonksiyona bu sekilde değer yollarsam undefined olur

// Undefined durumunda kontrol koyabiliriz
// merhaba("Kadir"); // age vermedik ama varsayılan eğeri yolladık

// Return -- değer döndürür ve cikar,altındaki hiç bir değer calısmaz

// function square(x){
//     // console.log(x*x); değer dondurmuyor a undefined oluyor 
//     return x*x;
// }
// function cube(x){
//     // console.log(x*x*x); // returnsuz NaN cıkar çarpamaz undefinedi
//     return x*x*x;
// }

// let a = cube(square(12));
// console.log(a);

// Function Expression --> Fonksiyonu değere atayip kullanabiliriz

// function merhaba(){
//     return "Merhaba";
// }

// console.log(merhaba());

// --> Değişken ismi üzerinde foknsiyonu kullanma
// const merhaba = function(name){
//     console.log("Merhaba" + name);
// }

// merhaba("Murat");

// Immediately Invoked Function Expression (IIFE)
// Tanimlandiği yerde çalışan fonksiyonlar
// Tanımlandığı yerde calıstığı için isme gerek yok
// Parantez içinde fonk tanimi yaparım. Parantezden sonra () ile call edilir
// (function(name){
//     console.log("Merhaba: " + name);
// })("Murat");


const database = {
    host : "localhost",

    add : function(){
        console.log("Eklendi");
    },
    get : function(){
        console.log("Elde edildi");
    },
    update : function(id){
        console.log(`Id ${id} güncellendi`);
    },
    delete : function(id){
        console.log(`Id ${id} silindi.`);
    }
    
}

console.log(database.host);

database.add();
database.delete(10);