// Callback Fonksiyonlar
// Bir fonksiyonu başka fonksiyona parametre olarak atayabiliyoruz

// const langs = ["Pyhton","Java","C++"];

// Callback fonksiyonu daha önce kullanmıstık

// langs.forEach(function(lang){
//     console.log(lang);
// })

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkla");
// });


// Kendi fonksiyonlarımıza callback olark cağırabilirz

// callback seklinde parametere yazdım
function process1(callback){
    setTimeout(function(){         // Timeoutlar asenkron bir durum yaratır
        // console.log("Process 1");
        callback();              //  --> callback yolladığım fonksiyon calısır
    },3000);
}

function process2(){
    setTimeout(function(){
        // console.log("Process 2");
    },2000);
}

// process1(); // Asenkron bir durum söz konusu process 2 calısır sonra process1
// process2();
// console.log("Naber"); 

/// Peki Process2 in Process 1 den sonra cağrılmasını istersem napicam

// STEP 1 : fonksiyona parametre yaz --> callback
// STEP 2 : fonksiyonu parametre olarak yazdım --> pro1(pro2)
// STEP 3 : fonksiyonu cağiririr  --> calback() --> parametre yollanan fonksiyonu calistirdim

process1(process2); /// 2. metodu sonra calıssın diye parametre olarak verdik


const langs = ["Pyhton","Java","C++"];


function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}


// addLang("Javascript");
// getAllLangs(); // Asenkron durum --> Eklendi javascript ama eklendikten sonra calismadi

addLang("Javascript",getAllLangs);