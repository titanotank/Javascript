
// Obje yaratmanın 2. yolu Object.create

// OBJECT CREATE
// Prototipini baska objeden olusturmamıza yarıyor

// const obj = {
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// console.log(obj);
// const emp = Object.create(
    
// objyi tamamını prototip olarak adlı
// emp.name = "Mustafa";
// emp.age = 25;
// console.log(emp); // proto özelliği objectini gösteriyor

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}

// Employe test1 ve test2 yi kalıtım alsın istiyoruz

function Employee(name,age){
    this.name = name;
    this.age = age;
}

// Employe object -> Employe Protoype(Class) -> Person prototype(class) _> object prototype (class)
Employee.prototype = Object.create(Person.prototype);
const emp = new Employee("Tuncay",25);
console.log(emp);

emp.test1(); // Persondaki metodu calıstırdık

// Employeye metod ekleme
Employee.prototype.myTest = function(){
    console.log("My Test");
}

emp.myTest();




