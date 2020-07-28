// Değişkenler Oluşturma

// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);

// Primitif Veri Tipleri
// Js dinamik tipleme yapıyor, neyi atarsam js otomatik algiliyor

// var a = 10;     // Number veri tipi
// var b = 3.14;   // Number veri tipi
// console.log(typeof a;
// console.log(typeof b);

// var name = "Mustafa";
// console.log(name);
// console.log(typeof name);

// Boolean

// var a = true;
// console.log(a);
// console.log(typeof a);

// var a = null;
// console.log(typeof a);

// var a;
// console.log(a);

// Referans Tipleri

// Array

// var numbers = [1,2,3,4,5];

// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[0]);

// // Object

// var person = {
//     name:"Mustafa Murat",
//     age:25
// }
// console.log(person);
// console.log(typeof person);

// var date = new Date();

// console.log(date);
// console.log(typeof date);


// var merhaba = function(){
//     console.log("Merhaba");
// }

// console.log(merhaba);
// console.log(typeof merhaba);


// ref ile primitif typelar arasındaki fark
var a = 10;
var b = a;

console.log(a,b);
a = 20;
console.log(a,b);

var a = [1,2,3];

var b = a;

console.log(a,b);
a.push(4);
console.log(a,b);

