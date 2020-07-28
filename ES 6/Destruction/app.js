
// Destructing --> Array icinden kolayca değer almak

// let number1,number2;

arr = [100,200,300,400];

// arr 0. indexini number1e, arr 1. indexini number2 ye atamak istiyorum

// [number1,number2] = arr;

// Bu sekilde aynı satırda tanımlamada yapabilirim
// const [number1,number2] = arr;


// console.log(number1,number2);


// Obje Destructing --> Keylere bakiyor array gibi değil
// {} süslü parantez kullanılıyor
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

// Keyleri alip değişkene koyuyor 
// İsim vericeksek a: vermek isteğimiz değişken ismini yaziyoruz
const {a:number1,c:number2,e:number3} = numbers;

console.log(number1,number2,number3);


// Function Destructing --> Dönen değerleri destructing

const getLangs = ()=>["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();


const person = {
    name : "Mustafa Murat",
    year : 1993,
    salary : 3000,
    showInfos : () => console.log("Bilgileri gösteriliyor...")
}

const {name:isim,year:yıl,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yıl,maas);
bilgileriGoster();