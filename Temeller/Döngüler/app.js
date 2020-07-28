// While Döngüleri

// let i = 0;

// while( i < 10){ // Sonsuz Döngü

//     console.log(i);

//     i++;

// }

// let i = 10;

// while( i > 0 ){
//     console.log(i);
//     i-=2;
// }

// Break ve Continue

// let i = 0;

// while ( i < 10 ){

//     if( i == 3 || i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Do While --- Cok fazla kullanılmaz

// let i = 0;

// do {
//     console.log(i);
//     i++;

// }while( i < 10);

// Iterasyon methodları

const langs = ["Python","Javascript","Java"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);
//     index++;
// }

// For döngüsü ile yapabiliriz

// for(let index = 0; index < langs.length ; index++){
//     console.log(langs[index]);
// }


// For Each --> Call back kullanıcaz
// js otomatikman her elemanı kendisi teker teker fonksiyona yolluyor
// langs.forEach(function(langs,index){
//     console.log(lang);
// });

// Objelerde kullanabileceğimiz map fonksiyonumuz var
// Bu fonksiyonlar objeler içindeki değerleri alabiliriz array olarak
const users = [
    {name:"Mustafa",age:25},
    {name:"Zeynep",age:40},
    {name:"Ali",age:12}
];

const names = users.map(function(user){
    return user.name;
});

const ages = users.map(function(user){
    return user.age;
});

console.log(names);
console.log(ages);

// For in döngüsü

const user = {
    name:"Mustafa",
    age:25
};

for(let key in user){
    console.log(key,user[key]);
};