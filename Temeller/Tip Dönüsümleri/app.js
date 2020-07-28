// Veri Tipleri Dönüsümleri

let value;

// Stringe Cevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function(){console.log()});
value = String([1,2,3,4,5]);

value = (10).toString();
value = (3.14).toString();

// Sayılara Cevirme ----> Cevrilmiyorsa NaN hatası alır

value = Number("123");
value = Number(null); // değeri var ama bos 0 gösterir
value = Number(undefined); // icinde bir şey yok Not a Number hatası cıkar
value = Number("Hello World");
// value = Number(function(){console.log()});
value = Number([1,2,3,4,5]);

value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3");

const a = Number("34 ") + 53;
console.log(a);
console.log(typeof a);

console.log(value);
console.log(typeof value);