// Mapler -> Key(Anahtar) -- Value(Değer)

let myMap = new Map();

const key1 = "Mustafa";
const key2 = {a:10,b:20};
const key3 = () => 2;

myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

console.log(myMap);

// console.log(myMap.get(key1));
console.log(myMap.size);

const cities = new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);


// For Each

// cities.forEach(function(value,key){
//     console.log(key,value);
// });

// For Of ---> Her value bir array [key,value]
// Destrcutingle cozduk olayı
for(let [key,value] of cities){
    console.log(value,key);
}

// Sadece Keyleri almak istersem

for(let key of cities.keys()){
    console.log(key);
}

// Sadece Valueler

for(let value of cities.values()){
    console.log(value);
}


// Mappler ile arrayler arasında bag
// 2li elemanlardan oluşan arrayleri mape koyavbilirim
const arr = [["key1","value1"],["key2","value2"]];

const lastmap = new Map(arr);

console.log(lastmap);

// Maplerden Array olusturma

const cities1 = new Map();
cities1.set("Ankara",5);
cities1.set("İzmir",15);
cities1.set("İstanbul",4);

const array = Array.from(cities1);

console.log(array);

