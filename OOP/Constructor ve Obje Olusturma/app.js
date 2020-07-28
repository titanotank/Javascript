// OOP Java kadar olmasada classlar yerine nesneler yaratıp, türetebiliyoruz

// GLOBAL SCOPE
// this üzerinde olan objeyi gösteriyor
// console.log(this); // Global scope da en temel objemiz window objesidir


// const emp1 = {   // Object Literal basit obje olusturma olarak geciyor
//     name : "Mustafa",
//     age : 25,
//     showInfos: function() {console.log("Bilgiler Gösteriliyor")}
// };

// const emp2 = {
//     name: "Ahmet",
//     age : 25
// };

// console.log(emp1);


// Constructor ile 100 kere obje olusturma kodu yazmaktan kurtuluyoruz normal const calgirip obje yaratıroz


// !!!!! Fonksiyon adi Büyük harfle baslaması önemli !!!!!

// 1 Büyük harfle başlayan fonk ismi
// 2 olması gerekn özellikler this.property = "" olarak yazılmalı, üzerindeki objenin özelliği
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }

    // console.log(this);   // İceride this bizim  Employee objemizi verdi -> Global scopeda değiliz
}

// Obje nesnesi olusturma new Object ile
const emp1 = new Employee("Tuncay",25,1235);
const emp2 = new Employee("Mustafa",25,5001);

// console.log(emp1);
// console.log(emp2);
emp1.showInfos();
emp2.showInfos();







