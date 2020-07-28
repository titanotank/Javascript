

// Arrow Function--> Fonksiyon yazmamızı kolaylaştiran bir yapı

// const merhaba = function(){
//     console.log("Merhaba");
// }

// merhaba();


// Arrow function ile tek satırda func tanimlarken rahat edicez
// const merhaba = () => {
//     console.log("Merhaba");
// }
// merhaba();

// 1. Arrow fuction tek parametre alıyorsa paranteze gerek yok
// 2. tek satırsa süslü parantezede gerek yok

const merhaba = firstName => console.log("Merhaba",firstName);

// 3 return yazmaya gerek bu halide oldu;
const cube = x => x * x * x;

merhaba("Tuncay");
console.log(cube(6));