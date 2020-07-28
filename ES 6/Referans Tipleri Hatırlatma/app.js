// Referans Tipler Mapler ve Setlerde Cok Onemli

// let a = "Mustafa";
// let b = "Mustafa";

// if(a == b){
//     console.log(true);
// }

// Referans tiplerde === bellekte aynı yeri gösteriyor mu die bakiyor

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2){
    console.log("Esit"); /// Bir şey cikmadi
}

const person1 = {
    name:"Mustafa",
    age:25
}


const person2 = {
    name:"Mustafa",
    age:25
}

if(person1 === person2){
    console.log("esit");
}


// Objelerde değerleri karşılaştırmak icim kendimiz yazmaliyiz

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array");


console.log(cities.get("İstanbul")); // 15 verdi
console.log(cities.get([1,2,3])); // Undefined ---> Ref tip karsılastırması yaptı

// Nasil cözücez asağıdaki gibi refleri bir yere koyucaz

// const key = [1,2,3];
// cities.set(key,"Array");
// cities.get(key);

