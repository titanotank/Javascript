// Call ve Apply benzerler ama bir farkla

// Proto objesinde bulunan default iki metod

// Call
// test(obj,arg1,arg2) --> Test metoduna Objemizi ve argumanları yolluyoruz
// Apply test(obj,[arg1,arg2]); ----> Parametreleri arrayde veriyorum-> calldan farkı
const obj1 = {
    number1 : 10,
    number2 : 20
};

const obj2 = {
    number1:30,
    number2:40
};

// ! NaN geldi !
function addNumbers(number3,number4){
    // call, apply ile cağirinca bu this yolladığım obje oldu
    // console.log(this); // constructor olmadığı icin window geliyo geliyor
    // console.log(this.number1);
    
    console.log(this.number1 + this.number2 + number3 +number4);
}

// addNumbers(100,200);
// ! Hangi objeyle kullanmak isteğimi yolluyorum!
// addNumbers.call(obj1,100,200); // ----> Artık fonk icindeki this- obj nin thisi oldu

// addNumbers.call(ob2,100,200);

// Apply Metodu --> Calldan farkı array olarak parametreleri atmak

addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);


// Bind --> Bir fonksiyonu bir objeye bağlıyoruz --> Kopya bir fonksiyon veriyor
// Genelde eventlerde kullanıyoruz. This anahtar kelimesi karistiği durumlarda bindi kullanıtoruz
// Call ve apply kopya fonksiyon üretmiyor
function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

// Kopya fonksiyon ürettik ve aldık return etti
const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);
console.log(copyFunc1);
console.log(copyFunc2);


// Kopyası üretildiği icin bunları isteğimiz yerden cağırabiliriz.
console.log(copyFunc1(100,200)); // --> Daha basit kullanımı





