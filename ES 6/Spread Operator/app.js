
// Spread Operator

const langs = ["Python","C++","Java","Php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// Üsteki değeri alttakine ceviriyor
console.log(...langs);

// Yeni array yarattik ve birlestirdik

const langs2 = ["Javascript","C#",...langs];

// Destructingle beraber kullanma

const numbers = [1,2,3,4,5,6];

//2. bir array yarattik destruntingle
const [a,b,...numbers2] = numbers;

console.log(a,b);


// En güzel kullanım örneği Fonksiyonlarda
// Fonksiyonlara array elemanlarını parametre olarak verme

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers1 = [100,200,300];

addNumbers(...numbers1);