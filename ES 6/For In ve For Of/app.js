// For In ve For Of

const person = {
    name:"Mustafa Murat",
    age:25,
    salary:3000
}

const langs = ["Python","Java","C++","Php"];

const name = "Mustafa";

// For In  ---> Object

for(let prop in person){
    console.log(prop,person[prop]);
}

// Array --> Burda arrayin indexleri gelir --> String objesi icinde ayni

for(let index in langs){
    console.log(index,langs[index]);
}

// Arrayin değerleri üzerinden dolasırı
// For Of ---> Objeler üzerinde dolanamiyoruz. Arraye benzeyen seyler üzerinde olabilir
// Person is not iterable hatası verir
// for( let value of person ){
//     console.log(value);
// }


for(let value of langs){
    console.log(value);
}

for(let value of name){
    console.log(value);
}