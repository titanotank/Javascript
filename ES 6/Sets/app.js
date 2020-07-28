// Setler bir değeri sadece 1 adet tutuyor


const mySet = new Set();

mySet.add(100);
mySet.add(100); // hata vermedi ama eklemedide
mySet.add(3.14);
mySet.add("Mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const myset2 = new Set([100,100,3.14,"Mustafa"]);

console.log(mySet);
console.log(myset2);

// Size
console.log(mySet.size);

// Delete Metodu
myset2.delete("Mustafa");

// Has metodu --> True yada false
console.log(mySet.has("Mustafa"));
console.log(mySet.has([1,2,3])); // --> Ref tip olduğundan yanlis oldu

console.log(myset2);

// FOR EACH

mySet.forEach(function(value){
    console.log(value);
})

// For Of
for(let value of mySet){
    console.log(value);
}

// Bir arrayi setten oluşturma
const array = Array.from(mySet);
console.log(array);
