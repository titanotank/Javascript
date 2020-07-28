// Prototype 2

// Ortak metodları ve ozellikleri prototypeta toplama
// 1. prototype ortak metodlar icin 2. si obje prototypei

function Employee(name,age){
    this.name = name;
    this.age = age;
    // this.showInfos = function(){
    //     console.log("İsim: " + this.name + "Yas: " + this.age);
    // }
    
}

// Prototype ulaşip metod tanımlıyoruz
// Her obje icin showInfos metodu oluşmayacak -tek metod tanımladık
// Bellekten yer kazandık
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yas: " + this.age);
}

const emp1 = new Employee("Mustafa",25);
const emp2 = new Employee("Oguz",25);

console.log(emp2);