// ES6 da Class Yaratma

// Önceden function tanımlıyorduk- Constructo gibi

// ES6 Öncesi class

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim : " + this.name + " Yas: " + this.age)    ;
// }

// const emp = new Employee("Mustafa",25,4000);
// console.log(emp);


// class yazim icine yazdıklarımız prototype ekleniyor
class Employee{
    // Basina function yazmadanda calıstı prototipine ekler
    constructor(name,age,salary){ // Constructorda obje özellikleri verdik
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim : " + this.name + " Yas : " + this.age);
    }

}
const emp = new Employee("Mustafa",25,4000);

console.log(emp);

