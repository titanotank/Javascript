// Scope Kavramı

// Scope Bir değişken nerelerde tanımlı olduğunu söyler

// Global Scope

var value1 = 10;
let value2 = 20;
const value3 = 30;

// Foksionda tanımlanan değişkenler sadece orda va oluyor

// function Func(){ 
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     // Kendi fonksiyonuna özel olarak 40 50 60 cıkarır, local scope bakar
//     console.log(value1,value2,value3);
// }

// Func();

// Block Scopeda farklı şeyler var

if(true){
    var value1 = 40; // Ayni isimle disardaki değer değişti
    let value2 = 50; // value2, value3 dişardaki değeri değişmedi
    const value3 = 60;
    // console.log(a,b,c);
     console.log(value1,value2,value3); // ---> Hepsini yazdı
}

// var değişkeni dişardada var oluyor blockta

// console.log(a); // -> 10 yazdı
// console.log(b); // -> Undefined
// console.log(c); // -> Undefined

console.log(value1,value2,value3);


// COK ONEMLİ DEĞİŞKENLERİ VAR İLE TANIMLAMAMALIYIM YOKSA 
// If, While veya For bloğunun içinde bu değişke tanımlanabilir